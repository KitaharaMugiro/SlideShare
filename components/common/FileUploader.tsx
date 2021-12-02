import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadDragzoneDesign from '../upload/UploadDragzoneDesign';

interface Props {
    onFileUpload: (files: any[]) => void
}

function FileUploader(props: Props) {

    const multiple = true
    const maxSize = 10485760 // 10MB

    const onDrop = useCallback(acceptedFiles => {
        console.log("onDrop")
        console.log(acceptedFiles)
        props.onFileUpload(acceptedFiles)
    }, []);


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple, maxSize });
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
