import React, { useEffect, useState } from "react";
import { useRealtimeUserAction } from 'realtimely';
import MiniBottomTextField from './MiniBottomTextField';
import MiniFukidashi from './MiniFukidashi';

const MiniChat = () => {
    const [yourText, setYourText] = useState("")
    const [prevText, setPrevText] = useState("")
    const [time, setTime] = useState(0)

    const { pushUserAction, userActionList } = useRealtimeUserAction()

    const onChange = (text: string) => {
        setYourText(text)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!pushUserAction) return
            const actionId = "text"
            setTime(time + 1)
            if (yourText === prevText) return
            console.log("API pushed")
            pushUserAction(actionId, yourText)
            setPrevText(yourText)
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [time]);

    const renderChats = () => {
        // const userActionList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(i => {
        //     return {
        //         actionId: "text", value: "tes", "key": i, color: "black", name: "tes", avator: "a"
        //     }
        // }
        // )
        return userActionList.map(c => {
            if (c.actionId !== "text") return <div key={c.key} />
            if (!c.value) return <div key={c.key} />
            return (
                <MiniFukidashi
                    key={c.key} text={c.value} avator={c.avator} color={c.color} name={c.name} />
            )
        })
    }

    return (
        <div style={{
            height: "90vh",
            padding: "0 0.5rem",
            overflowY: "scroll"
        }}>
            {renderChats()}
            <MiniBottomTextField onChange={onChange} value={yourText} />
        </div>
    )
}

export default MiniChat