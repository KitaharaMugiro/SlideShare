import React, { useState, useRef, createRef, RefObject, useEffect } from 'react'
import styles from './MultiplePoll.module.css'
import { animateAnswers, manageVote } from './utils'

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

interface MultiplePollProps {
    question?: string
    results: Result[]
    theme?: Theme
    onVote?(item: Result, results: Result[]): void
}

const MultiplePoll = ({
    question,
    results,
    theme,
    onVote
}: MultiplePollProps) => {
    const [voted, setVoted] = useState<boolean>(false)
    const [votedIndex, setVotedIndex] = useState(0)
    const answerRefs = useRef<RefObject<HTMLDivElement>[]>(
        results.map(() => createRef<HTMLDivElement>())
    )
    useEffect(() => {
        animateAnswers(votedIndex, results, answerRefs, theme)
    }, [results])
    return (
        <article
            className={styles.container}
            style={{ alignItems: theme?.alignment }}
        >
            {question && <h1 style={{ color: theme?.textColor }}>{question}</h1>}

            {results.map((result, index) => (
                <div
                    key={index}
                    role='button'
                    id={'mulAnswer' + index}
                    className={
                        voted ? styles.answer : styles.answer_hover + ' ' + styles.answer
                    }
                    style={{
                        backgroundColor: theme?.backgroundColor
                    }}
                    onClick={() => {
                        if (!voted) {
                            setVoted(true)
                            setVotedIndex(index)
                            manageVote(results, result, index, answerRefs, theme)
                            onVote?.(result, results)
                        }
                    }}
                >
                    <div ref={answerRefs.current[index]} className={styles.answerInner}>
                        <p style={{ color: theme?.textColor }}>{result.text}</p>
                    </div>
                    {voted && (
                        <span style={{ color: theme?.textColor }}>
                            {result.percentage}%
                        </span>
                    )}
                </div>
            ))}
        </article>
    )
}

export { MultiplePoll }