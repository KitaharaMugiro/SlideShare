import { Button } from "@mui/material";
import React from "react";
import EditOrPreview from "../../components/edit/EditOrPreview";
import HorizontalSlideList from "../../components/edit/HorizontalSlideList";
import style from "./index.module.css";
import SendIcon from '@mui/icons-material/Send';

const Edit = () => {
    const onClickSend = () => {
        //アップロード処理
    }
    return <>
        <HorizontalSlideList />
        <div className={style.edit_or_preview_container}>
            <EditOrPreview />
        </div>
        <div style={{ position: "absolute", right: 20, bottom: 20 }}>
            <Button
                onClick={onClickSend}
                href="/slide/debug" //TODO: 消す
                size="large" variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </div>
    </>
}

export default Edit