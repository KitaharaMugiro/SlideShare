import { NotionAPI } from 'notion-client'

export default async (req: any, res: any) => {
    const notion = new NotionAPI()
    const recordMap = await notion.getPage('6f165148d735485ca8b421142a166a6d')
    res.status(200).json(recordMap)
}