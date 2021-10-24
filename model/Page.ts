import * as uuid from "uuid"
import { Slideshare_PageType_Enum } from "../src/generated/graphql"

export type Page = {
    id: string
    type: Slideshare_PageType_Enum
    pageNumber: number
    text?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    slideId?: number
    Poll?: {
        question: string
        option1: string
        option2: string
        option3?: string | null
        option4?: string | null
    } | null
}

export const createNewPage = () => {
    const id = uuid.v4()
    const type = Slideshare_PageType_Enum.Temp
    const pageNumber = 999
    return { id, type, pageNumber }
}

export const reorderPageList = (pageList: Page[]) => {
    pageList.forEach((p, index) => {
        p.pageNumber = index
    })
}