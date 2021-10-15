import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { usePageList } from '../../../model/hooks/usePageList';
import UploadDragzoneDesign from '../../upload/UploadDragzoneDesign';
import { Storage } from "aws-amplify"
import { v4 as uuidv4 } from "uuid"

function ImageUploader() {

    const accept = "image/*"
    const multiple = false
    const { focusedPage, updatePage } = usePageList()
    const _onDrop = async (acceptedFiles: any) => {
        if (!focusedPage) return
        const file = acceptedFiles[0]
        console.log(file);


        //TODO: とりあえず適当に画像はめているが、きちんと設計する
        const size = file.size
        const newPage = Object.assign({}, focusedPage)
        newPage.imageUrl = `/static/sample_slide${size % 3 + 1}.png`
        updatePage(newPage)
    }

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader();
            reader.onload = () => {
                const fileAsArrayBuffer = new Uint8Array(reader.result);
                // do whatever you want with the file content
                const fileName = uuidv4() + file.name
                Storage.put('upload/' + fileName, fileAsArrayBuffer,
                    { contentType: file.type })
                    .then(result => {
                        const key = result.key
                        const newPage = Object.assign({}, focusedPage)
                        newPage.imageUrl = key
                        updatePage(newPage)
                        return true;
                    })
                    .catch(err => {
                        console.log(err);
                        return true;
                    });
            };
            reader.onabort = () => {
                console.log("Reading file was aborted");
            }
            reader.onerror = () => {
                console.log("Reading file has failed");
            }
            reader.readAsArrayBuffer(file);
        });
    }, []);


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
