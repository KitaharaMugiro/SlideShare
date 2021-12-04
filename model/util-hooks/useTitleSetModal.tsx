import { Button } from "@mui/material"
import React, { useState } from "react"
import MyDialog from "../../components/common/MyDialog"
import { usePageList } from "../hooks/usePageList"
import { Page } from "../Page"

export default (page: Page) => {
    const [openDialog, setOpenDialog] = useState(false)
    const { updatePage } = usePageList()

    const onFinishDialog = (values: { key: string, value: string }[]) => {
        setOpenDialog(false)
        if (!page) return
        const value = values.find(v => v.key === "title")
        if (!value) return
        const newPage = Object.assign({}, page)
        newPage.title = value.value
        updatePage(newPage)
    }

    const modal = <MyDialog
        initialValues={[{ key: "title", value: page?.title || "", title: "title" }]}
        dialogTitle={"ページタイトルの設定"}
        dialogDescription={"ページ上部に表示されます"}
        open={openDialog}
        onFinishEdit={onFinishDialog}
        onClose={() => setOpenDialog(false)} />

    const button = <>
        <Button onClick={() => setOpenDialog(true)}>タイトル追加</Button>
        {page?.title}
    </>

    return { modal, button }
}
