import { useAddSlideRecordPieceMutation, useDeleteRecordMutation, useDeleteSlideMutation, useStartSlideRecordMutation, useUpdateDurationMutation } from "../../src/generated/graphql"
import { useSnackMessage } from "../util-hooks/useSnackMessage"

export default () => {
    const { displayErrorMessage } = useSnackMessage()
    const [insertRecordPieceMutation] = useAddSlideRecordPieceMutation({ onError: (e) => displayErrorMessage(e.message) })
    const [insertSlideRecordMutation] = useStartSlideRecordMutation({ onError: (e) => displayErrorMessage(e.message) })
    const [updateDurationMutation] = useUpdateDurationMutation({ onError: (e) => displayErrorMessage(e.message) })
    const [deleteRecordMutation] = useDeleteRecordMutation({ onError: (e) => displayErrorMessage(e.message) })

    const insertSlideRecord = async (slideId: number, audioUrl: string, title: string | undefined) => {
        const res = await insertSlideRecordMutation({ variables: { slideId, audioUrl, title } })
        return res.data?.insert_slideshare_SlideRecord_one?.id
    }

    const addRecordPiece = async (slideRecordId: number, pageId: string, startTime: number) => {
        await insertRecordPieceMutation({ variables: { slideRecordId, pageId, startTime } })
    }

    const updateDuration = async (id: number, duration: number) => {
        await updateDurationMutation({ variables: { id, duration } })
    }

    const deleteRecord = async (id: number) => {
        await deleteRecordMutation({ variables: { id } })
    }

    return { insertSlideRecord, addRecordPiece, updateDuration, deleteRecord }
}
