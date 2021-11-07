import { useInsertConferenceMutation } from "../../src/generated/graphql"

export default () => {
    const [insertConferenceMutation] = useInsertConferenceMutation()
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

    return { createConference }
}