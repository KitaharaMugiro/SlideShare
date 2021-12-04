import { Button } from "@mui/material"
import React, { useState } from "react"
import MyDialog from "../../components/common/MyDialog"
import { usePageList } from "../hooks/usePageList"
import { useRoomMutation } from "../hooks/useRoom"
import { Page } from "../Page"

export default () => {

    const [openDialog, setOpenDialog] = useState(false)
    const { createRoom } = useRoomMutation()

    const onFinishDialog = async (values: { key: string, value: string }[]) => {
        setOpenDialog(false)
        const name = values.find(v => v.key === "name")
        const description = values.find(v => v.key === "description")
        if (name && description) {
            await createRoom(name.value, description.value)
        }
    }

    const modal = <MyDialog
        initialValues={[{ key: "name", value: "", title: "タイトル" }, { key: "description", value: "", title: "説明" }]}
        dialogTitle={"ルームの設定"}
        dialogDescription={""}
        open={openDialog}
        onFinishEdit={onFinishDialog}
        onClose={() => setOpenDialog(false)}
        width={800} />

    const button = <>
        <Button
            variant="contained" disableElevation onClick={() => setOpenDialog(true)}>
            ルーム作成
        </Button>
    </>

    return { modal, button }
}
