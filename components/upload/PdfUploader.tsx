import { Button, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import UploadDragzoneDesign from './UploadDragzoneDesign';
function Basic() {
    const onDrop = async (acceptedFiles: any) => {
        console.log(acceptedFiles);
    }

    //TODO: pptxかpdfのみを受け付けるようにする
    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div>
            <section {...getRootProps({ className: 'dropzone' })} >
                {/* アップロード */}
                <input {...getInputProps()} />
                <UploadDragzoneDesign type="PDF" isDragActive={isDragActive} />
            </section>
        </div>
    );
}

export default Basic