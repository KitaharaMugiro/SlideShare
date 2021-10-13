import React from 'react';
import { useDropzone } from 'react-dropzone';
import { usePageList } from '../../../model/hooks/usePageList';
import UploadDragzoneDesign from '../../upload/UploadDragzoneDesign';

function ImageUploader() {

    const accept = "image/*"
    const multiple = false
    const { focusedPage, updatePage } = usePageList()
    const onDrop = async (acceptedFiles: any) => {
        if (!focusedPage) return
        const file = acceptedFiles[0]
        console.log(file);
        //TODO: とりあえず適当に画像はめているが、きちんと設計する
        const size = file.size
        focusedPage.imageUrl = `/static/sample_slide${size % 3 + 1}.png`
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