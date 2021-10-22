import {
    ClientConfig, createClient,
    createMicrophoneAudioTrack, IAgoraRTCRemoteUser, IMicrophoneAudioTrack
} from "agora-rtc-react";
import React, { useEffect, useState } from "react";
import { useGenerateAgoraTokenMutation } from "../../src/generated/graphql";

const config: ClientConfig = {
    mode: "rtc", codec: "vp8",
};

const appId: string = "b2a72b031fc64276bfee7398c7eb6d7b"; //ENTER APP ID HERE

interface Props {
    channelName: string
    uid: string
}

const App = ({ channelName, uid }: Props) => {
    const [getToken, { data, loading, error }] = useGenerateAgoraTokenMutation({ variables: { channelName, uid } })
    useEffect(() => {
        getToken()
    }, [])
    if (loading) return <div>ローディング</div>
    if (error) return <div>エラー</div>
    const token = data?.GenerateAgoraToken?.token
    if (!token) return <div>トークンエラー</div>
    console.log({ token })
    return (
        <div>
            <Call channelName={channelName} token={token} uid={uid} />
        </div>
    );
};

// the create methods in the wrapper return a hook
// the create method should be called outside the parent component
// this hook can be used the get the client/stream in any component
const useClient = createClient(config);
const useMicrophone = createMicrophoneAudioTrack();

const Call = (props: {
    channelName: string;
    token: string;
    uid: string;
}) => {
    const { channelName, token, uid } = props;
    // using the hook to get access to the client object
    const client = useClient();
    // ready is a state variable, which returns true when the local tracks are initialized, untill then tracks variable is null
    const { ready, track } = useMicrophone();

    useEffect(() => {
        // function to initialise the SDK
        let init = async (name: string) => {
            client.on("user-published", async (user, mediaType) => {
                await client.subscribe(user, mediaType);
                console.log("subscribe success");
                if (mediaType === "audio") {
                    user.audioTrack?.play();
                }
            });

            client.on("user-unpublished", (user, type) => {
                console.log("unpublished", user, type);
                if (type === "audio") {
                    user.audioTrack?.stop();
                }
            });

            client.on("user-left", (user) => {
                console.log("leaving", user);
            });

            await client.join(appId, name, token, uid);
            if (track) await client.publish(track);
        };

        if (ready && track) {
            console.log("init ready");
            init(channelName);
        }

    }, [channelName, client, ready, track, token]);


    return (
        <div className="App">
            {ready && track && (
                <Controls track={track} />
            )}
        </div>
    );
};


export const Controls = (props: {
    track: IMicrophoneAudioTrack;
}) => {
    const client = useClient();
    const { track } = props;
    const [trackState, setTrackState] = useState({ audio: true });

    const mute = async () => {
        await track.setEnabled(!trackState.audio);
        setTrackState((ps) => {
            return { ...ps, audio: !ps.audio };
        });

    };

    const leaveChannel = async () => {
        await client.leave();
        client.removeAllListeners();
        // we close the tracks to perform cleanup
        track.close();
    };

    return (
        <div className="controls">
            <p className={trackState.audio ? "on" : ""}
                onClick={() => mute()}>
                {trackState.audio ? "MuteAudio" : "UnmuteAudio"}
            </p>
            {<p onClick={() => leaveChannel()}>Leave</p>}
        </div>
    );
};

export default App;