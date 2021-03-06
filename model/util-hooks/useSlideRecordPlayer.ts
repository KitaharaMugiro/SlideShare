import { ConstructionOutlined } from "@mui/icons-material";
import { Storage } from "aws-amplify";
import axios from "axios";
import { Howl } from 'howler';
import { useEffect, useRef, useState } from 'react';
import { QuerySlideQuery } from '../../src/generated/graphql';
import { useSnackMessage } from "./useSnackMessage";
//機能概要
/**
 * 音声再生/停止
 * 音声の位置を変更することができる
 * 現在の再生時間と音声の長さを取得できる
 * 倍速にできる
 * 矢印キーで5秒とばす
 * 現在のスライドIDを返却
 */


export default (initialSlide: QuerySlideQuery, selectedRecordId: number | undefined) => {
    //const slideRecord = initialSlide.slideshare_SlideRecord.length == 0 ? undefined : initialSlide.slideshare_SlideRecord[0]
    const slideRecord = selectedRecordId ? initialSlide.slideshare_SlideRecord.find(r => r.id === selectedRecordId) : undefined

    const slideRecordPieces = slideRecord?.SlideRecordPieces
    const duration = slideRecord?.duration || 0

    const howlerRef = useRef<Howl | undefined>(undefined)
    const [seek, setSeek] = useState(0)
    const [rate, setRate] = useState(1.0)
    const [currentPageId, setCurrentPageId] = useState<string | undefined>(undefined)
    const [isPlaying, setIsPlaying] = useState(false) //TODO: howlerから取得したいがラグがある

    const { displayErrorMessage } = useSnackMessage()
    useEffect(() => {
        const onPlay = () => {
            const TIMEOUT = 500
            if (howlerRef.current?.playing()) {
                const seek = howlerRef.current?.seek()
                //CAUTION: startTime大きい順に並んでいることが前提
                const currentPiece = slideRecordPieces?.find(p => seek >= p.startTime)

                setSeek(Math.round(seek))
                setCurrentPageId(currentPiece?.pageId)
            }
            setTimeout(onPlay, TIMEOUT); //adjust timeout to fit your needs
        }
        onPlay()
    }, [])


    const onPlayError = () => {
        displayErrorMessage("再生に失敗しました(iOS非対応)")
    }

    const onLoadError = (soundId: number, error: unknown) => {
        displayErrorMessage("動画読み込みに失敗しました(iOS非対応)")
    }
    useEffect(() => {
        const load = async () => {
            howlerRef.current?.stop()
            const audioUrl = slideRecord?.audioUrl
            if (!audioUrl) return
            const signedURL = await Storage.get(audioUrl);
            const data = await axios.get(signedURL)
            console.log({ data })

            const howler = new Howl({
                html5: true,
                preload: true,
                src: [signedURL],
                onplayerror: onPlayError,
                onloaderror: onLoadError
            });
            howlerRef.current = howler
            play()
        }
        load()
    }, [initialSlide, selectedRecordId])

    const play = () => {
        howlerRef.current?.play()
        setIsPlaying(true)
    }

    const pause = () => {
        howlerRef.current?.pause()
        setIsPlaying(false)
    }

    const changeRate = (rate: number) => {
        howlerRef.current?.rate(rate)
        setRate(rate)
    }

    const changeSeek = () => {

    }

    const skip = (sec: number) => {
        howlerRef.current?.seek(howlerRef.current.seek() + sec)
    }

    return { play, pause, isPlaying, seek, duration, currentPageId, changeRate, rate, skip }
}