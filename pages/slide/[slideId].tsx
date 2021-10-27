import { useAtom } from "jotai";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AdminSlideController from "../../components/slide/AdminSlideController";
import Comments from "../../components/slide/comments/Comments";
import PageViewController from "../../components/slide/pageview/PageViewController";
import ProfileCardController from "../../components/slide/ProfileCardController";
import SlideSlider from "../../components/slide/SlideSlider";
import useUser from "../../model/hooks/useUser";
import { SlideStateAtom } from "../../model/jotai/SlideState";
import { useQuerySlideQuery } from "../../src/generated/graphql";
import style from "./style.module.css";

const Page = () => {
    const router = useRouter()
    const { slideId } = router.query

    const [isAdmin, setIsAdmin] = useState(false)
    const { user } = useUser()
    const [uuid] = useState(uuidv4())

    //slide状態変数
    const [localAdminSlideState] = useAtom(SlideStateAtom)
    const [localPageNumber, setLocalPageNumber] = useState(0)

    //データ取得
    const { loading, error, data: initialSlide } = useQuerySlideQuery({ variables: { slideId: Number(slideId) }, fetchPolicy: "no-cache" })
    const slide = initialSlide?.slideshare_Slide_by_pk
    const pages = slide?.Pages ? [...slide?.Pages].sort((a, b) => a.pageNumber - b.pageNumber) : []
    const viewingPage = pages[localPageNumber]

    useEffect(() => {
        //TODO: Realtimely側をsecureにしないと意味ない
        if (slide && user) {
            if (slide?.createdBy === user?.attributes.sub) {
                setIsAdmin(true)
            }
        }
    }, [user, slide])

    const goNext = () => {
        const nextPageNumber = localPageNumber + 1
        if (nextPageNumber >= pages.length) return
        setLocalPageNumber(nextPageNumber)
    }

    const goPrevious = () => {
        const nextPageNumber = localPageNumber - 1
        if (nextPageNumber < 0) return
        setLocalPageNumber(nextPageNumber)

    }

    const onChangePageNumber = (number: number) => {
        const nextPageNumber = number
        setLocalPageNumber(nextPageNumber)
    }

    const onClickPageLink = (pageId: string) => {
        const targetPage = pages.find(p => p.id === pageId)
        onChangePageNumber(targetPage?.pageNumber || 0)
    }

    if (loading) return <div>ロード中</div>
    if (error) return <div>{JSON.stringify(error)}</div>

    return (
        <div className={style.main}>
            {/* スライド */}
            <div className={style.deck_space} >
                <div>
                    <div style={{ position: "relative" }}>
                        {/* onMouseMove={isAdmin && slideState.enableCursor ? onMouseMove : undefined}> */}
                        <PageViewController
                            viewingPage={viewingPage}
                            onClickLeft={goPrevious}
                            onClickRight={goNext}
                        />
                        {/* {slideState.enableCursor ? renderCursors() : <div />} */}
                    </div>
                    <SlideSlider
                        maxPageNumber={pages?.length || 0}
                        pageNumber={localPageNumber}
                        onChangePageNumber={onChangePageNumber}
                        isSync={false}
                    />
                    {isAdmin ? <AdminSlideController /> : <div />}

                </div>
                <div style={{
                    marginLeft: 60,
                    marginRight: 30,
                    width: "100%",
                }}>
                    <ProfileCardController isAdmin={isAdmin} userId={slide?.createdBy || ""} />
                    <Comments
                        viewingPage={viewingPage}
                        onClickLink={onClickPageLink}
                    />
                </div>
            </div>
        </div>
    )
}

export default Page