import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material";
import { Auth } from 'aws-amplify';
import { useAtom } from "jotai";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import EditOrPreview from "../../components/edit/EditOrPreview";
import HorizontalSlideList from "../../components/edit/HorizontalSlideList";
import { usePageList } from '../../model/hooks/usePageList';
import { pageListAtom } from "../../model/jotai/PageList";
import { Page } from '../../model/Page';
import { useLoading } from '../../model/util-hooks/useLoading';
import useSignin from '../../model/util-hooks/useSignin';
import useUser from '../../model/util-hooks/useUser';
import { useQuerySlideQuery } from "../../src/generated/graphql";
import style from "./index.module.css";

const Edit = () => {

    const router = useRouter()
    const { slideId } = router.query
    const { loading, error, data: initialSlide } = useQuerySlideQuery({ variables: { slideId: Number(slideId) } })
    const { user } = useUser()
    const [_, setEditingPageList] = useAtom(pageListAtom)
    const { updateAllPageNumber, pageList } = usePageList()
    const { startLoading, finishLoading } = useLoading()
    const { goSignin } = useSignin()

    useEffect(() => {
        Auth.currentAuthenticatedUser().catch(() => {
            goSignin()
        })
    }, [])

    useEffect(() => {
        if (loading) {
            startLoading()
        } else {
            finishLoading()
        }
    }, [loading])

    useEffect(() => {
        if (user) {
            if (loading) return
            const slide = initialSlide?.slideshare_Slide_by_pk
            if (!slide) {
                console.log("slideがありませんでした")
                router.push("/")
                return
            }
            if (slide.createdBy !== user.attributes.sub) {
                console.log("作成者とユーザIDが一致しませんでした")
                router.push("/")
                return
            }
            const pages = slide?.Pages
            if (pages) {
                //TODO:これ隠蔽したい
                const myClonedArray: Page[] = [];
                pages.forEach(val => myClonedArray.push(Object.assign({}, val)));
                myClonedArray.sort((a, b) => a.pageNumber - b.pageNumber)
                setEditingPageList(myClonedArray)
            }
        }
    }, [initialSlide])

    const onClickSend = async () => {
        if (pageList.length === 0) {
            alert("スライドのページ枚数が0です")
            return
        }
        await updateAllPageNumber()
        router.push(`/slide/${slideId}`)
    }

    //TODO: もっとマシにしよう
    if (error) return <div>{error}</div>
    if (loading) {
        return <div></div>
    }

    return <>
        <HorizontalSlideList />

        <div className={style.edit_or_preview_container}>
            <EditOrPreview />
        </div>


        <div style={{ position: "fixed", right: 20, bottom: 20 }}>
            <Button
                onClick={onClickSend}
                size="large" variant="contained" endIcon={<SendIcon />}>
                スライドページへ
            </Button>
        </div>
    </>
}

export default Edit