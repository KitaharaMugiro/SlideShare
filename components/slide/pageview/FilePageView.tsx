import React from "react";
import { Page } from "../../../model/Page";
import FilePaperList from "../../common/FilePaperList";
import { Storage } from "aws-amplify";
interface Props {
    page: Page
    width: number
    height: number
}
export default (props: Props) => {
    const { width, height, page } = props
    const files = page.Files


    const onClickDonwload = async (key: string, filename: string) => {
        function downloadBlob(blob: any, filename: any) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename || 'download';
            const clickHandler = () => {
                setTimeout(() => {
                    URL.revokeObjectURL(url);
                    a.removeEventListener('click', clickHandler);
                }, 150);
            };
            a.addEventListener('click', clickHandler, false);
            a.click();
            return a;
        }

        const result = await Storage.get(key, { download: true })
        downloadBlob(result.Body, filename);
    }


    return <div style={{
        width, height,
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}>
        <h1 style={{ color: "white" }}>{props.page.title || "Downloads"}</h1>
        {files ? <FilePaperList files={files} onClickDonwload={onClickDonwload} /> : <div />}
    </div>
}