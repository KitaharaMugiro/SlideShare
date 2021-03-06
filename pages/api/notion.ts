import { NextApiRequest, NextApiResponse } from 'next'
import { NotionAPI } from 'notion-client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const notion = new NotionAPI()
    const notionId = req.body.notionId
    const recordMap = await notion.getPage(notionId)
    res.status(200).json(recordMap)
}

export default handler;