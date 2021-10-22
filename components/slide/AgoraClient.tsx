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
const token: string = "006b2a72b031fc64276bfee7398c7eb6d7bIAAYdUPgJrEaElvV5FhYEeekNFEwmtJdd7XB02hqwQ6J3S1zB/AAAAAAEADJD5AXm7tzYQEAAQCau3Nh";

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
    return (
        <div>
            <h1 className="heading">Agora RTC NG SDK React Wrapper</h1>
            <Call channelName={channelName} />
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
}) => {
    const { channelName } = props;
    const [users, setUsers] = useState<IAgoraRTCRemoteUser[]>([]);
    const [start, setStart] = useState<boolean>(false);
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
                if (mediaType === "video") {
                    setUsers((prevUsers) => {
                        return [...prevUsers, user];
                    });
                }
                if (mediaType === "audio") {
                    user.audioTrack?.play();
                }
            });

            client.on("user-unpublished", (user, type) => {
                console.log("unpublished", user, type);
                if (type === "audio") {
                    user.audioTrack?.stop();
                }
                if (type === "video") {
                    setUsers((prevUsers) => {
                        return prevUsers.filter((User) => User.uid !== user.uid);
                    });
                }
            });

            client.on("user-left", (user) => {
                console.log("leaving", user);
                setUsers((prevUsers) => {
                    return prevUsers.filter((User) => User.uid !== user.uid);
                });
            });

            await client.join(appId, name, token, null);
            if (track) await client.publish(track);
            setStart(true);

        };

        if (ready && track) {
            console.log("init ready");
            init(channelName);
        }

    }, [channelName, client, ready, track]);


    return (
        <div className="App">
            {ready && track && (
                <Controls track={track} setStart={setStart} />
            )}
        </div>
    );
};


export const Controls = (props: {
    track: IMicrophoneAudioTrack;
    setStart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const client = useClient();
    const { track, setStart } = props;
    const [trackState, setTrackState] = useState({ video: true, audio: true });

    const mute = async (type: "audio" | "video") => {
        if (type === "audio") {
            await track.setEnabled(!trackState.audio);
            setTrackState((ps) => {
                return { ...ps, audio: !ps.audio };
            });
        }
    };

    const leaveChannel = async () => {
        await client.leave();
        client.removeAllListeners();
        // we close the tracks to perform cleanup
        track.close();
        setStart(false);
    };

    return (
        <div className="controls">
            <p className={trackState.audio ? "on" : ""}
                onClick={() => mute("audio")}>
                {trackState.audio ? "MuteAudio" : "UnmuteAudio"}
            </p>
            <p className={trackState.video ? "on" : ""}
                onClick={() => mute("video")}>
                {trackState.video ? "MuteVideo" : "UnmuteVideo"}
            </p>
            {<p onClick={() => leaveChannel()}>Leave</p>}
        </div>
    );
};

export default App;