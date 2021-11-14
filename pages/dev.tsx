import { Button } from "@mui/material"
import { useSnackMessage } from "../model/hooks/useSnackMessage"

export default () => {
    const { displayErrorMessage, displayInfoMessage } = useSnackMessage()

    return <>
        <Button onClick={() => displayInfoMessage("hello")}>メッセージ</Button>
        <Button onClick={() => displayErrorMessage("errorだね")}>メッセージ2</Button>
    </>
}