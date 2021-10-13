import * as uuid from "uuid"
import { Slideshare_PageType_Enum } from "../src/generated/graphql"

export type Page = {
    id: string | number
    type: Slideshare_PageType_Enum
    pageNumber: number
    text?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
}

export const createNewPage = (): Page => {
    const id = uuid.v4()
    const type = Slideshare_PageType_Enum.Temp
    const pageNumber = 0
    return { id, type, pageNumber }
}

export const reorderPageList = (pageList: Page[]) => {
    pageList.forEach((p, index) => {
        p.pageNumber = index
    })
}