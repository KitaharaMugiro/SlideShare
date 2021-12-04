import dynamic from "next/dynamic";

const AgoraClient = dynamic(
    () => {
        return import("./_AgoraClient");
    },
    { ssr: false }
);

export default AgoraClient