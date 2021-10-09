import { Button, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { usePageList } from '../../../model/jotai/FocusedPageId';
import UploadDragzoneDesign from '../../upload/UploadDragzoneDesign';

function ImageUploader() {
    const { focusedPage, updatePage } = usePageList()
    if (!focusedPage) return <div />
    const accept = "image/*"
    const multiple = false
    const onDrop = async (acceptedFiles: any) => {
        const file = acceptedFiles[0]
        console.log(file);
        //TODO: とりあえず適当に画像はめているが、きちんと設計する
        const size = file.size
        focusedPage.imageAttribute = { url: `/static/sample_slide${size % 3 + 1}.png` }
        updatePage(focusedPage)
    }

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept, multiple });

    return (
        <div>
            <section {...getRootProps({ className: 'dropzone' })} >
                {/* アップロード */}
                <input {...getInputProps()} />
                <UploadDragzoneDesign type="Image" isDragActive={isDragActive} />
            </section>
        </div>
    );
}

export default ImageUploader