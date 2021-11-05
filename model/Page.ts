import * as uuid from "uuid"
import { Slideshare_PageType_Enum } from "../src/generated/graphql"

export type Page = {
    id: string
    type: Slideshare_PageType_Enum
    title?: string | null
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
    Bookmarks?: {
        id: number
        url: string
    }[] | null
    Files?: {
        id: number
        path: string
        filename: string
    }[] | null
}

export const createNewPage = (slideId: number) => {
    const id = uuid.v4()
    const type = Slideshare_PageType_Enum.Temp
    const pageNumber = 999
    return { id, type, pageNumber, slideId }
}

export const reorderPageList = (pageList: Page[]) => {
    pageList.forEach((p, index) => {
        p.pageNumber = index
    })
}