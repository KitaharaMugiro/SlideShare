import { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { useStopwatch, useTimer } from "react-timer-hook";
import useSlideRecord from "../hooks/useSlideRecord";
import { Storage } from "aws-amplify"
import { useSnackMessage } from "./useSnackMessage";
import { useAtom } from "jotai";
import { TrackStateAtom } from "../jotai/TrackState";

export default () => {
    const [audioState] = useAtom(TrackStateAtom)
    const [confirmedRecording, setConfirmedRecording] = useState(false)
    const [finishedRecording, setFinishedRecording] = useState(false)
    const [recordId, setRecordId] = useState<number | undefined>(undefined);
    const [audioPath, setAudioPath] = useState<string | undefined>(undefined);
    const { displayErrorMessage } = useSnackMessage()
    const onStop = async () => {
        setFinishedRecording(true)
    }

    const {
        status,
        startRecording,
        pauseRecording,
        stopRecording,
        mediaBlobUrl,
        previewAudioStream
    } = useReactMediaRecorder({ video: false, onStop });

    const {
        seconds,
        minutes,
        hours,
        start,
        pause,
    } = useStopwatch({ autoStart: false });

    const { insertSlideRecord, addRecordPiece } = useSlideRecord()

    const startSlideRecord = async (slideId: number) => {
        const date = new Date()
        const audioUrl = `record/${slideId}_${date.toISOString()}.mp3`;
        const recordId = await insertSlideRecord(slideId, audioUrl)
        setRecordId(recordId)
        setAudioPath(audioUrl)
        setConfirmedRecording(true)
        startRecording();
        console.log("start Slide Record")
    }

    const _onStop = async () => {
        console.log("onStop")
        if (!audioPath) {
            displayErrorMessage("No audio path")
            return
        }
        if (!previewAudioStream) {
            displayErrorMessage("No previewAudioStream")
            return
        }

        await Storage.put(
            audioPath,
            previewAudioStream,
            { contentType: "audio/mp3" }
        )
        console.log("Stored audio")
    }

    const changePage = async (pageId: string) => {
        if (!recordId) {
            return
        }
        const startTime = seconds + minutes * 60 + hours * 60 * 60;
        await addRecordPiece(recordId, pageId, startTime)
    }

    const stopSlideRecord = async () => {
        stopRecording();
    }

    useEffect(() => {
        if (confirmedRecording) {
            if (status === "recording") {
                start();
            } else if (status === "stopped") {
                pause();
            }
        }

    }, [status])

    useEffect(() => {
        if (finishedRecording) {
            _onStop()
        }
    }, [finishedRecording])

    useEffect(() => {
        if (confirmedRecording) {
            if (!audioState.audio) {
                pauseRecording()
            } else {
                startRecording()
            }
        }
    }, [audioState])

    return { startSlideRecord, stopSlideRecord, changePage, seconds, minutes, hours }
}