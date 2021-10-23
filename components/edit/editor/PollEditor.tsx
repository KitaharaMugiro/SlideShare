import { Button, TextField } from "@mui/material"
import React, { useState } from "react"
import { usePageList } from "../../../model/hooks/usePageList"
import usePoll from "../../../model/hooks/usePoll"
import { Page } from "../../../model/Page"


interface Props {
    page: Page
}

export default (props: Props) => {
    const { createPoll } = usePoll()
    const [poll, setPoll] = useState({
        question: props.page.Poll?.question || "",
        option1: props.page.Poll?.option1 || "",
        option2: props.page.Poll?.option2 || "",
        option3: props.page.Poll?.option3 || "",
        option4: props.page.Poll?.option4 || "",
    })
    const [loading, setLoading] = useState(false)

    const onChangeOption = (text: string, order: number) => {
        if (order === 0) {
            setPoll({ ...poll, option1: text })
        } else if (order === 1) {
            setPoll({ ...poll, option2: text })
        } else if (order === 2) {
            setPoll({ ...poll, option3: text })
        } else if (order === 3) {
            setPoll({ ...poll, option4: text })
        }
    }

    const onChangeQuestion = (text: string) => {
        setPoll({ ...poll, question: text })
    }

    const onConfirm = async () => {
        setLoading(true)
        await createPoll(props.page.id, poll.question, poll.option1, poll.option2, poll.option3, poll.option4)
        setLoading(false)
    }

    return <>
        <div style={{ width: 500 }}>
            <TextField value={poll.question} onChange={(e) => onChangeQuestion(e.target.value)} margin="dense" label="質問をする" variant="standard" fullWidth />
            <TextField value={poll.option1} onChange={(e) => onChangeOption(e.target.value, 0)} margin="dense" label="選択肢1" variant="filled" fullWidth />
            <TextField value={poll.option2} onChange={(e) => onChangeOption(e.target.value, 1)} margin="dense" label="選択肢2" variant="filled" fullWidth />
            <TextField value={poll.option3} onChange={(e) => onChangeOption(e.target.value, 2)} margin="dense" label="選択肢3(オプション)" variant="filled" fullWidth />
            <TextField value={poll.option4} onChange={(e) => onChangeOption(e.target.value, 3)} margin="dense" label="選択肢4(オプション)" variant="filled" fullWidth />
            <Button
                onClick={onConfirm} fullWidth variant="contained">{loading ? "保存中..." : "保存"}</Button>
        </div>
    </>
}