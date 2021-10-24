import React, { createRef, RefObject, useEffect, useRef } from 'react'
import { PollOption } from '../../../model/Poll'
import styles from './MultiplePoll.module.css'
import { animateAnswers, manageVote } from './utils'


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
    results: PollOption[]
    theme?: Theme
    voted: boolean
    votedIndex: number
    onVote(votedIndex: number): void
}

const MultiplePoll = ({
    question,
    results,
    theme: propTheme,
    voted,
    votedIndex,
    onVote
}: MultiplePollProps) => {

    const theme = propTheme || {
        textColor: 'black',
        mainColor: '#00B87B',
        backgroundColor: 'rgb(255,255,255)',
        alignment: 'center'
    }
    const answerRefs = useRef<RefObject<HTMLDivElement>[]>(
        results.map(() => createRef<HTMLDivElement>())
    )

    useEffect(() => {
        if (voted) {
            animateAnswers(votedIndex, results, answerRefs, theme, false)
        }
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
                            manageVote(results, result, index, answerRefs, theme)
                            onVote(index)
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
