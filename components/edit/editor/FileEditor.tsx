import { Storage } from "aws-amplify";
import React, { useState } from "react";
import { Page } from "../../../model/Page";
import { useDeleteFileMutation, useInsertFileMutation } from "../../../src/generated/graphql";
import FilePaperList from '../../common/FilePaperList';
import FileUploader from "../../common/FileUploader";

interface Props {
    page: Page
}

export default (props: Props) => {
    const [files, setFiles] = useState(props.page.Files)
    const [insertFile] = useInsertFileMutation()
    const [deleteFile] = useDeleteFileMutation()

    const onFileUpload = (acceptedFiles: any[]) => {
        console.log("onFileUpload")
        console.log(acceptedFiles)
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader();
            reader.onload = () => {
                //TODO: as anyで逃げてる
                const fileAsArrayBuffer = new Uint8Array(reader.result as any);
                // do whatever you want with the file content
                const fileName = "Page#" + props.page.id + "/Name#" + file.name
                //TODO: できたらユーザごとにフォルダ分けたいけどCognitoUserのsubの取り方がわからない
                console.log("Before upload")
                Storage.put(`upload/${fileName}`, fileAsArrayBuffer,
                    { contentType: file.type })
                    .then(result => {
                        console.log("After upload")
                        const key = result.key
                        insertFile({
                            variables: {
                                path: key,
                                pageId: props.page.id,
                                filename: file.name
                            }
                        }).then(r => {
                            console.log("After insert data")
                            const d = r.data?.insert_slideshare_File_one
                            if (files) {
                                console.log("set file")
                                setFiles([...files, { id: d?.id!, path: key, filename: file.name }])
                            } else {
                                console.log("set file")
                                setFiles([{ id: d?.id!, path: key, filename: file.name }])
                            }
                        })
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
    }

    const onClickDonwload = async (key: string, filename: string) => {
        function downloadBlob(blob: any, filename: any) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename || 'download';
            const clickHandler = () => {
                setTimeout(() => {
                    URL.revokeObjectURL(url);
                    a.removeEventListener('click', clickHandler);
                }, 150);
            };
            a.addEventListener('click', clickHandler, false);
            a.click();
            return a;
        }

        const result = await Storage.get(key, { download: true })
        downloadBlob(result.Body, filename);
    }

    const onClickLinkDelete = (id: number) => {
        const newFiles = files?.filter(f => f.id !== id)
        setFiles(newFiles)
        deleteFile({ variables: { id } })
    }


    return (
        <>
            <FileUploader onFileUpload={onFileUpload} />
            {files ?
                <FilePaperList
                    files={files}
                    onClickDonwload={onClickDonwload}
                    onClickLinkDelete={onClickLinkDelete} />
                : <div />}
        </>
    )
}