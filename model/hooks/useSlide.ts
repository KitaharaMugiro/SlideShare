import { useDeleteSlideMutation, useQueryUserSlideQuery } from "../../src/generated/graphql"
import { useSnackMessage } from "./useSnackMessage"

export default () => {
    const { displayErrorMessage } = useSnackMessage()
    const [deleteSlideMutation] = useDeleteSlideMutation({ onError: (e) => displayErrorMessage(e.message) })
    const deleteSlide = async (slideId: number) => {
        await deleteSlideMutation({
            variables: {
                id: slideId
            }
        })
    }
    return { deleteSlide }
}
