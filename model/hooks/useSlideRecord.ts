import { useAddSlideRecordPieceMutation, useDeleteSlideMutation, useStartSlideRecordMutation } from "../../src/generated/graphql"
import { useSnackMessage } from "../util-hooks/useSnackMessage"

export default () => {
    const { displayErrorMessage } = useSnackMessage()
    const [insertRecordPieceMutation] = useAddSlideRecordPieceMutation({ onError: (e) => displayErrorMessage(e.message) })
    const [insertSlideRecordMutation] = useStartSlideRecordMutation({ onError: (e) => displayErrorMessage(e.message) })

    const insertSlideRecord = async (slideId: number, audioUrl: string) => {
        const res = await insertSlideRecordMutation({ variables: { slideId, audioUrl } })
        return res.data?.insert_slideshare_SlideRecord_one?.id
    }

    const addRecordPiece = async (slideRecordId: number, pageId: string, startTime: number) => {
        await insertRecordPieceMutation({ variables: { slideRecordId, pageId, startTime } })
    }

    return { insertSlideRecord, addRecordPiece }
}
