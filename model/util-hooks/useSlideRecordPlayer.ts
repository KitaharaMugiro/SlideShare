import { Howl, Howler } from 'howler';
import { useEffect, useRef, useState } from 'react';
import { QuerySlideQuery } from '../../src/generated/graphql';
import { Storage } from "aws-amplify"
//機能概要
/**
 * 音声再生/停止
 * 音声の位置を変更することができる
 * 現在の再生時間と音声の長さを取得できる
 * 倍速にできる
 * 矢印キーで5秒とばす
 * 現在のスライドIDを返却
 */


export default (initialSlide: QuerySlideQuery) => {
    const pages = initialSlide.slideshare_Slide_by_pk?.Pages || []
    const slideRecord = initialSlide.slideshare_SlideRecord.length == 0 ? undefined : initialSlide.slideshare_SlideRecord[0]
    const slideRecordPieces = slideRecord?.SlideRecordPieces

    const howlerRef = useRef<Howl | undefined>(undefined)
    const [seek, setSeek] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentPageId, setCurrentPageId] = useState<string | undefined>(undefined)
    const [isPlaying, setIsPlaying] = useState(false) //TODO: howlerから取得したいがラグがある


    const onPlay = () => {
        const TIMEOUT = 1000
        if (howlerRef.current?.playing()) {
            const seek = howlerRef.current?.seek()
            const currentPage = slideRecordPieces?.find(p => p.startTime > seek)

            setSeek(Math.round(seek))
            setCurrentPageId(currentPage?.pageId)
            setTimeout(onPlay, TIMEOUT); //adjust timeout to fit your needs
        }
    }

    const onLoad = () => {
        setDuration(Math.round(howlerRef.current?.duration() || 0))
    }

    useEffect(() => {
        const load = async () => {
            const audioUrl = slideRecord?.audioUrl
            if (!audioUrl) return
            const signedURL = await Storage.get(audioUrl);
            const howler = new Howl({
                src: [signedURL],
                onplay: onPlay,
                onload: onLoad
            });
            howlerRef.current = howler
        }
        load()
    }, [initialSlide])

    const play = () => {
        howlerRef.current?.play()
        setIsPlaying(true)
    }

    const pause = () => {
        howlerRef.current?.pause()
        setIsPlaying(false)
    }

    const changeRate = () => {

    }

    const changeSeek = () => {

    }
    const skip5sec = () => {

    }

    return { play, pause, isPlaying, seek, duration, currentPageId }
}