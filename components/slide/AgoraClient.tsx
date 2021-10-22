import dynamic from "next/dynamic";

const ClientSideControls = dynamic(
    () => {
        return import("./_AgoraClient");
    },
    { ssr: false }
);

export default ClientSideControls