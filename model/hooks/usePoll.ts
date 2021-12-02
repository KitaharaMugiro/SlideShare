import { useInsertPollMutation } from "../../src/generated/graphql"
import { Page } from "../Page"
import { usePageList } from "./usePageList"
import { useSnackMessage } from "../util-hooks/useSnackMessage"

export default () => {
    const { displayErrorMessage } = useSnackMessage()
    const { updatePage } = usePageList()
    const [insertPollMutation] = useInsertPollMutation({ onError: (e) => displayErrorMessage(e.message) })

    const createPoll = async (page: Page, question: string, option1: string, option2: string, option3?: string, option4?: string) => {
        page.Poll = { question, option1, option2, option3, option4 }
        updatePage(page, true)
        await insertPollMutation({
            variables: {
                question,
                pageId: page.id,
                option1,
                option2,
                option3,
                option4
            }
        })
    }

    return { createPoll }
}