import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material";
import { useAtom } from "jotai";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import EditOrPreview from "../../components/edit/EditOrPreview";
import HorizontalSlideList from "../../components/edit/HorizontalSlideList";
import { pageListAtom } from "../../model/jotai/PageList";
import { Page } from '../../model/Page';
import { useQuerySlideQuery } from "../../src/generated/graphql";
import style from "./index.module.css";

const Edit = () => {
    const router = useRouter()
    const { slideId } = router.query
    const { loading, error, data: initialSlide } = useQuerySlideQuery({ variables: { slideId: Number(slideId) } })

    const [_, setEditingPageList] = useAtom(pageListAtom)

    useEffect(() => {
        const pages = initialSlide?.slideshare_Slide_by_pk?.Pages
        if (pages) {
            //TODO:これ隠蔽したい
            const myClonedArray: Page[] = [];
            pages.forEach(val => myClonedArray.push(Object.assign({}, val)));
            setEditingPageList(myClonedArray)
        }
    }, [initialSlide])

    const onClickSend = () => {
        //アップロード処理
        //これどちらかというとスライドの公開設定に近いかも
        router.push(`/slide/${slideId}`)
    }

    //TODO: もっとマシにしよう
    if (error) return <div>{error}</div>
    if (loading) return <div>ロード中</div>

    return <>
        <HorizontalSlideList />

        <div className={style.edit_or_preview_container}>
            <EditOrPreview />
        </div>


        <div style={{ position: "absolute", right: 20, bottom: 20 }}>
            <Button
                onClick={onClickSend}
                size="large" variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </div>
    </>
}

export default Edit