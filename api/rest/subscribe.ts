import InitRestClient from "../RestClient"

export default async (conferenceId: number, conferenceTitle: string, date: string, url: string) => {
    const client = await InitRestClient()
    const res = await client.post("/subscribe", {
        input: {
            conferenceId,
            conferenceTitle,
            date,
            url
        }
    })
    console.log(res.data)
}