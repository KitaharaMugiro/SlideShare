import * as uuid from "uuid"

export type PageType = "text" | "image" | "video" | "temp"

export type TextAttribute = {
    markdown: string
}

export type ImageAttribute = {
    url: string
}

export type VideoAttribute = {
    url: string
}

export type Page = {
    pageId: string
    type: PageType
    order: number
    textAttribute?: TextAttribute
    imageAttribute?: ImageAttribute
    videoAttribute?: VideoAttribute
}



export const createNewPage = (): Page => {
    const pageId = uuid.v4()
    const type = "temp"
    const order = 0
    return { pageId, type, order }
}