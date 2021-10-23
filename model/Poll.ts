export type Poll = {
    question: string
    pollOption: PollOption[]
}

export type PollOption = {
    text: string
    votes: number
    percentage?: number
    order?: number
}