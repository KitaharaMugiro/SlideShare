import { Storage } from "aws-amplify";
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from "uuid";
import { usePageList } from '../../model/hooks/usePageList';
import UploadDragzoneDesign from '../upload/UploadDragzoneDesign';

interface Props {
    onFileUpload: (files: any[]) => void
}

function FileUploader(props: Props) {

    const multiple = true

    const onDrop = useCallback(acceptedFiles => {
        console.log("onDrop")
        console.log(acceptedFiles)
        props.onFileUpload(acceptedFiles)
    }, []);


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple });
    return (
        <div>
            <section {...getRootProps({ className: 'dropzone' })} >
                {/* アップロード */}
                <input {...getInputProps()} />
                <UploadDragzoneDesign type="Files" isDragActive={isDragActive} />
            </section>
        </div>
    );
}

export default FileUploader