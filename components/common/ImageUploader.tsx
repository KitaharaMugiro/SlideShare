import { Storage } from "aws-amplify";
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from "uuid";
import { usePageList } from '../../model/hooks/usePageList';
import UploadDragzoneDesign from '../upload/UploadDragzoneDesign';

function ImageUploader() {

    const accept = "image/*"
    const multiple = false
    const { focusedPage, updatePage } = usePageList()


    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader();
            reader.onload = () => {
                //TODO: as anyで逃げてる
                const fileAsArrayBuffer = new Uint8Array(reader.result as any);
                // do whatever you want with the file content
                const fileName = uuidv4() + file.name
                //TODO: できたらユーザごとにフォルダ分けたいけどCognitoUserのsubの取り方がわからない
                Storage.put(`upload/${fileName}`, fileAsArrayBuffer,
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
