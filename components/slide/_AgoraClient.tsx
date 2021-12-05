import { Button } from "@mui/material";
import {
    ClientConfig, createClient,
    createMicrophoneAudioTrack, IAgoraRTCRemoteUser, IMicrophoneAudioTrack
} from "agora-rtc-react";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { TrackStateAtom } from "../../model/jotai/TrackState";
import { useGenerateAgoraTokenMutation } from "../../src/generated/graphql";


const appId: string = "b2a72b031fc64276bfee7398c7eb6d7b"; //ENTER APP ID HERE

//TODO :それぞれどういう意味でどういう役割だっけ？
interface Props {
    channelName: string
    uid: string
    host: string
    isHost: boolean
    onClickLeave?: () => void
}

//Leaveボタンを返すという訳のわからない実装。dynamic importしないといけないのとuseClientが共有されないのが問題。
const App = ({ channelName, uid, host, isHost, onClickLeave }: Props) => {
    const [getToken, { data, loading, error }] = useGenerateAgoraTokenMutation({ variables: { channelName, uid, host }, fetchPolicy: "no-cache" });

    useEffect(() => {
        const _getToken = async () => {
            console.log("------get token------")
            const r = await getToken({ variables: { channelName, uid, host }, fetchPolicy: "no-cache" })
            console.log("________token________")
            console.log(r.data?.GenerateAgoraToken?.token)
        }
        _getToken()

    }, [channelName])

    if (loading) return <div>ローディング</div>
    if (error) return <div>エラー</div>
    const token = data?.GenerateAgoraToken?.token
    if (!token) return <div>トークンエラー</div>
    console.log({ token })
    return (
        <div>
            {isHost ?
                <Call channelName={channelName} token={token} uid={uid} isHost={isHost} onClickLeave={onClickLeave} />
                : <Subscribe channelName={channelName} token={token} uid={uid} isHost={isHost} onClickLeave={onClickLeave} />
            }
        </div>
    );
};

// the create methods in the wrapper return a hook
// the create method should be called outside the parent component
// this hook can be used the get the client/stream in any component
const useClient = createClient({ mode: "live", codec: "vp8" });
const useMicrophone = createMicrophoneAudioTrack();

const Call = (props: {
    channelName: string;
    token: string;
    uid: string;
    isHost: boolean;
    onClickLeave?: () => void;
}) => {
    const { channelName, token, uid, isHost, onClickLeave } = props;
    // using the hook to get access to the client object
    const client = useClient();
    // ready is a state variable, which returns true when the local tracks are initialized, untill then tracks variable is null
    const { ready, track } = useMicrophone();


    useEffect(() => {
        // function to initialise the SDK
        let init = async (channelName: string) => {
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

            await client.leave();

            await client.join(appId, channelName, token, uid);
            if (isHost) {
                await client.setClientRole("host");
                if (track?.enabled) await client.publish(track);
            }
        };

        if (ready && track) {
            console.log("init ready = " + channelName);
            init(channelName);
        }

    }, [channelName, client, ready, track, token]);

    return (
        <div>
            {ready && track && (
                <Controls track={track} onClickLeave={onClickLeave} />
            )}
        </div>
    );
};

const Subscribe = (props: {
    channelName: string;
    token: string;
    uid: string;
    isHost: boolean;
    onClickLeave?: () => void;
}) => {
    const { channelName, token, uid, isHost, onClickLeave } = props;
    // using the hook to get access to the client object
    const client = useClient();
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

            await client.leave();

            await client.join(appId, name, token, uid);

        };


        init(channelName);
    }, [channelName, client, token]);


    return (
        <div>
            {ready && track && (
                <Controls track={track} onClickLeave={onClickLeave} />
            )}
        </div>
    );
};


export const Controls = (props: {
    track: IMicrophoneAudioTrack;
    onClickLeave?: () => void;
}) => {
    const { track } = props;
    const client = useClient()
    const [trackState] = useAtom(TrackStateAtom);

    useEffect(() => {
        track.setMuted(!trackState.audio);
        track.setEnabled(true);
    }, [trackState])

    const onClickLeave = async () => {
        await client.leave()
        if (props.onClickLeave) props.onClickLeave()
    }


    return (
        <div>
            {/* {trackState.audio ? "録音中" : "ミュート中"} */}
            {props.onClickLeave ? <Button onClick={onClickLeave}>Leave</Button> : <div />}

        </div>
    );
};


export default App;