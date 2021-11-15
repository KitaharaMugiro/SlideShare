import { useInsertConferenceMutation, useUpdateConferenceMutation, useUpdateConferenceStartDateMutation } from "../../src/generated/graphql"
import { useSnackMessage } from "./useSnackMessage"

export default () => {
    const { displayErrorMessage } = useSnackMessage()
    const [insertConferenceMutation] = useInsertConferenceMutation({ onError: (e) => displayErrorMessage(e.message) })
    const [updateConferenceStartDateMutation] = useUpdateConferenceStartDateMutation({ onError: (e) => displayErrorMessage(e.message) })
    const [updateConferenceMutation] = useUpdateConferenceMutation({ onError: (e) => displayErrorMessage(e.message) })

    const createConference = async (slideId: number, title: string, startDate: Date, endDate: Date) => {
        await insertConferenceMutation({
            variables: {
                slideId,
                title,
                startDate: startDate.getTime(),
                endDate: endDate.getTime()
            }
        })
    }

    const updateStartDate = async (conferenceId: number, startDate: Date) => {
        await updateConferenceStartDateMutation({
            variables: {
                conferenceId,
                startDate: startDate.getTime()
            }
        })
    }

    const updateConference = async (conferenceId: number, title: string, startDate: Date, endDate: Date) => {
        await updateConferenceMutation({
            variables: {
                conferenceId,
                startDate: startDate.getTime(),
                endDate: endDate.getTime(),
                title
            }
        })
    }


    return { createConference, updateStartDate, updateConference }
}