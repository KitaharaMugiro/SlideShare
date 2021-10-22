import dynamic from "next/dynamic";

const ClientSideControls = dynamic(
    () => {
        return import("./useAgora") as any;
    },
    { ssr: false }
);

import {
    AgoraVideoPlayer,
    createClient,
    createMicrophoneAndCameraTracks,
    ClientConfig,
    IAgoraRTCRemoteUser,
    ICameraVideoTrack,
    IMicrophoneAudioTrack,
} from "agora-rtc-react";

// define config for rtc engine
const config: ClientConfig = {
    mode: "rtc", codec: "vp8",
};

const appId: string = "b2a72b031fc64276bfee7398c7eb6d7b"; //ENTER APP ID HERE
const token: string | null = null;