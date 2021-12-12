import { useReactMediaRecorder } from "react-media-recorder";
import useSlideRecorder from "../../model/util-hooks/useSlideRecorder";

export default () => {

    const { } = useSlideRecorder()
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
    } = useReactMediaRecorder({ video: false });

    return (
        <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            {mediaBlobUrl && <audio src={mediaBlobUrl} controls />}
        </div>
    );
};