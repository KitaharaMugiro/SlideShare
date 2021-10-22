import dynamic from "next/dynamic";

const ClientSideControls = dynamic(
    () => {
        return import("../../components/slide/AgoraClient");
    },
    { ssr: false }
);

const App = () => {
    return <ClientSideControls channelName={"aaa"} uid={"aaa"} />
}

export default App