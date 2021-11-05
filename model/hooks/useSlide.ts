import { useDeleteSlideMutation, useQueryUserSlideQuery } from "../../src/generated/graphql"

export default () => {
    const [deleteSlideMutation] = useDeleteSlideMutation()
    const deleteSlide = async (slideId: number) => {
        await deleteSlideMutation({
            variables: {
                id: slideId
            }
        })
    }
    return { deleteSlide }
}
