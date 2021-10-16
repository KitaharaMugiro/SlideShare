import { Button, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Storage } from "aws-amplify"
import UploadDragzoneDesign from './UploadDragzoneDesign';
import { v4 as uuidv4 } from "uuid"
import { useRouter } from 'next/dist/client/router';

interface Props {
    onSuccessUpload: (key: string) => void
}

function PdfUploader(props: Props) {
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
                        props.onSuccessUpload(key)
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

export default PdfUploader