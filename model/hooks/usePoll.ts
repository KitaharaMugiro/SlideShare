import { useInsertPollMutation } from "../../src/generated/graphql"

export default () => {
    const [insertPollMutation] = useInsertPollMutation()

    const createPoll = async (pageId: string, question: string, option1: string, option2: string, option3?: string, option4?: string) => {
        await insertPollMutation({
            variables: {
                question,
                pageId,
                option1,
                option2,
                option3,
                option4
            }
        })
    }

    return { createPoll }
}