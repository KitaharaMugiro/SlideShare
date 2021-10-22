import dynamic from "next/dynamic";

const ClientSideControls = dynamic(
    () => {
        return import("../../components/slide/test") as any;
    },
    { ssr: false }
);

export default ClientSideControls