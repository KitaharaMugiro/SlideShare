import React, { useState } from "react"
import useUser from "../../../model/hooks/useUser"
import { useInsertPollMutation, useInsertPollResultMutation, useSubscribePollResultsQuery } from "../../../src/generated/graphql"
import { MultiplePoll } from "./MultiplePoll"

interface Props {
    pageId: string
}

export default (props: Props) => {
    const { data, loading, error } = useSubscribePollResultsQuery({ variables: { pageId: props.pageId } })
    const [insertPollResult] = useInsertPollResultMutation()

    const { tempUserId } = useUser()
    const poll = data?.slideshare_Poll_by_pk
    const pollResults = poll?.PollResults || []
    const results = [
        { text: poll?.option1, votes: 0, percentage: 0 },
        { text: poll?.option2, votes: 0, percentage: 0 },
        { text: poll?.option3, votes: 0, percentage: 0 },
        { text: poll?.option4, votes: 0, percentage: 0 }
    ]
    for (const pollResult of pollResults) {
        results[pollResult.optionNumber].votes++
    }
    const filteredResults = results.filter((item): item is { text: string, votes: number, percentage: number } => typeof item.text == 'string' && item.text !== "")
    const sumVote = results.reduce((p, c) => p + c.votes, 0)
    filteredResults.forEach(r => {
        if (r.percentage !== undefined) {
            r.percentage = Math.round(r.votes / sumVote * 100)
        }
    })

    const yourPollResult = pollResults.find(r => r.createdBy === tempUserId)
    const voted = yourPollResult !== undefined
    const votedIndex = yourPollResult?.optionNumber
    console.log({ voted, votedIndex })

    const onVote = async (votedIndex: number) => {
        insertPollResult({
            variables: {
                createdBy: tempUserId,
                pageId: props.pageId,
                optionNumber: votedIndex
            }
        })
    }
    if (loading) return <div>ロード中</div>
    if (error) return <div>エラー</div>
    return <>
        <MultiplePoll
            question={poll?.question}
            results={filteredResults}
            onVote={onVote}
            voted={voted}
            votedIndex={votedIndex || 0}
        />
    </>
}