import { RefObject, MutableRefObject } from 'react'

export interface Result {
    text: string
    votes: number
    percentage?: number
}

export interface Theme {
    mainColor?: string // multiple poll only
    leftColor?: string // binary poll only
    rightColor?: string // binary poll only
    textColor?: string
    backgroundColor?: string
    // alignment?: 'start' | 'center' | 'end'
    alignment?: string
}

function manageVote(
    results: Result[],
    item: Result,
    index: number,
    refs: MutableRefObject<RefObject<HTMLDivElement>[]>,
    theme?: Theme
): void {
    item.votes++
    countPercentage(results)
    animateAnswers(index, results, refs, theme)
}

export function animateAnswers(
    index: number,
    results: Result[],
    refs: MutableRefObject<RefObject<HTMLDivElement>[]>,
    theme?: Theme
): void {
    const answers: HTMLElement[] = []
    const restOfAnswersIndexes: number[] = []

    for (let i = 0; i < results.length; i++) {
        if (i !== index) restOfAnswersIndexes.push(i)
        const answerBuffer: HTMLElement | null = refs.current[i].current
        answerBuffer && answers.push(answerBuffer)
    }

    // animate clicked answer
    answers[index].animate(
        [
            { width: 0, easing: 'ease-out', backgroundColor: 'white' },
            {
                width: `${results[index].percentage}%`,
                easing: 'ease-out',
                backgroundColor: `${theme?.mainColor}`
            }
        ],
        500
    )
    answers[index].style.width = `${results[index].percentage}%`
    if (theme?.mainColor) answers[index].style.backgroundColor = theme?.mainColor

    // animate rest of answers (not clicked)
    for (const i of restOfAnswersIndexes) {
        answers[i].animate(
            [
                { width: 0, easing: 'ease-out', backgroundColor: 'white' },
                {
                    width: `${results[i].percentage}%`,
                    easing: 'ease-out',
                    backgroundColor: '#efefef'
                }
            ],
            500
        )
        answers[i].style.width = `${results[i].percentage}%`
        answers[i].style.backgroundColor = '#efefef'
    }
}

function countPercentage(results: Result[]): void {
    const votes: number[] = []
    let sum: number = 0

    for (const result of results) {
        votes.push(result.votes)
        sum += result.votes
    }

    for (let i = 0; i < votes.length; i++) {
        results[i].percentage = Math.floor((votes[i] / sum) * 100)
    }
}

export { manageVote, countPercentage }