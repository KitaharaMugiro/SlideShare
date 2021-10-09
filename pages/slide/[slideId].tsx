import { useRouter } from "next/dist/client/router"
import React, { useState } from "react"
import { useRealtimeCursor, useRealtimeSharedState, useRealtimeUserAction } from "realtimely"
import MiniChat from "../../components/slide/MiniChat"
import NormalButton from "../../components/slide/NormalButton"
import style from "./style.module.css"
import { CSSTransition } from 'react-transition-group';


const Page = () => {
    const router = useRouter()
    const { slideId, admin } = router.query

    //制御変数
    const [customizeWidth, setWidth] = useState(950)

    //slide状態変数
    const [slideState, setSlideState] = useRealtimeSharedState({
        picNumber: 1,
        enableCursor: false,
        enableChat: false,
        enableButtons: false
    }, "slideState")
    const [clickState, setClickState] = useRealtimeSharedState({
        nice: 0,
        what: 0
    }, "clickState")

    const goNext = () => {
        slideState.picNumber += 1
        setSlideState(slideState)
    }

    const goPrevious = () => {
        slideState.picNumber -= 1
        setSlideState(slideState)
    }

    const goStart = () => {
        slideState.picNumber = 1
        setSlideState(slideState)
    }

    const toggleCursor = () => {
        slideState.enableCursor = !slideState.enableCursor
        setSlideState(slideState)
    }

    const toggleChat = () => {
        slideState.enableChat = !slideState.enableChat
        setSlideState(slideState)
    }

    const toggleButtons = () => {
        slideState.enableButtons = !slideState.enableButtons
        setSlideState(slideState)
    }

    //カーソル
    const { onMouseMove, renderCursors } = useRealtimeCursor()

    //画像Path
    let picturePath = "/static/slides_pic/" + slideId + "/slide" + slideState.picNumber + ".png"
    if (slideState.picNumber == 6) {
        picturePath = "/static/slides_pic/" + slideId + "/slide" + slideState.picNumber + ".gif"
    }

    const pictureUrl = "url(" + picturePath + ")"

    //スライドサイズは16:9, 4:3から選ぶ
    const width = customizeWidth + "px"
    const height = (customizeWidth / 16 * 9) + "px"
    const sizeStyle = { width, height }
    const imageSizeStyle = { width, height, backgroundSize: `${width} ${height}` }

    //callback式の記述
    const { pushUserAction } = useRealtimeUserAction((actionId: string, value: string) => {
        if (actionId === "button_1") {
            setFire1(true)
        } else if (actionId === "button_2") {
            setFire2(true)
        }
    })

    const [fire1, setFire1] = useState(false)
    const [fire2, setFire2] = useState(false)
    const onClick = (actionId: string) => {
        pushUserAction(actionId, "clicked")
        if (actionId === "button_1") {
            if (!clickState.nice) clickState.nice = 0
            clickState.nice += 1
            setClickState(clickState)
        } else if (actionId === "button_2") {
            if (!clickState.what) clickState.what = 0
            clickState.what += 1
            setClickState(clickState)
        }
    }

    const resetNiceAndWhat = () => {
        clickState.nice = 0
        clickState.what = 0
        setClickState(clickState)
    }

    return (
        <div className={style.main}>

            {/* Adminコントロール */}
            {admin ? <div>
                <button onClick={goStart}>Back to beginning</button>
                <button onClick={goPrevious}>Previous</button>
                <button onClick={goNext}>Next</button>
                <button onClick={toggleCursor}>{slideState.enableCursor ? "Disable" : "Enable"} Cursor</button>
                <button onClick={toggleChat}>{slideState.enableChat ? "Disable" : "Enable"} Chat</button>
                <button onClick={toggleButtons}>{slideState.enableButtons ? "Disable" : "Enable"} Button</button>
                <button onClick={resetNiceAndWhat}>Reset count</button>

            </div> : <div />}

            {/* スライド */}
            <div className={style.center}>
                <div className={style.paper} style={sizeStyle} onMouseMove={onMouseMove}>
                    {slideState.enableCursor ? renderCursors() : <div />}
                    <div
                        className={style.picture}
                        style={{ backgroundImage: pictureUrl, ...imageSizeStyle }}
                    />
                </div>
            </div>

            {/* チャット */}
            <div style={
                {
                    position: "absolute",
                    right: 0,
                    top: 60,
                    width: 250
                }
            }>
                {slideState.enableChat ? <MiniChat /> : <div />}
            </div>

            {slideState.enableButtons ?
                <div style={{ position: "absolute", left: 3, bottom: 3 }}>
                    <CSSTransition
                        in={!fire1}
                        timeout={500}
                        onExited={() => setFire1(false)}
                        classNames={{
                            enterActive: style.enterActive,
                            enterDone: style.enterDone,
                            exitActive: style.exitActive,
                            exitDone: style.exitDone
                        }}>
                        <NormalButton onClick={() => onClick("button_1")} text={"LIKE " + clickState.nice} />
                    </CSSTransition>
                    <div style={{ height: 10 }} />

                    <CSSTransition
                        in={!fire2}
                        timeout={500}
                        onExited={() => setFire2(false)}
                        classNames={{
                            enterActive: style.enterActive,
                            enterDone: style.enterDone,
                            exitActive: style.exitActive,
                            exitDone: style.exitDone
                        }}>
                        <NormalButton onClick={() => onClick("button_2")} text={"WHAT? " + clickState.what} />
                    </CSSTransition>

                </div> : <div />}


        </div>
    )

}

export default Page