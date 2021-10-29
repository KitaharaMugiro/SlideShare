import { NextApiRequest, NextApiResponse } from 'next'
import { NotionAPI } from 'notion-client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    var notion = new NotionAPI()
    var notionId = req.body.notionId
    var recordMap = await notion.getPage(notionId)
    res.status(200).json(recordMap)
}