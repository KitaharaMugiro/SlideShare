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

    const handleEachFile = async (file: any) => {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = reject;
            fileReader.readAsText(file);
        });
    }


    const onFileUpload = async (acceptedFiles: any[]) => {
        const promises = []
        for (const file of acceptedFiles) {
            const fileResult: any = await handleEachFile(file) //TODO: as anyで逃げてる
            const fileAsArrayBuffer = new Uint8Array(fileResult);
            // do whatever you want with the file content
            const fileName = "Page#" + props.page.id + "/Name#" + file.name
            //TODO: できたらユーザごとにフォルダ分けたいけどCognitoUserのsubの取り方がわからない
            const result = await Storage.put(`upload/${fileName}`, fileAsArrayBuffer,
                { contentType: file.type })

            const key = result.key
            const r = await insertFile({
                variables: {
                    path: key,
                    pageId: props.page.id,
                    filename: file.name
                }
            })
            const d = r.data?.insert_slideshare_File_one
            promises.push({ id: d?.id!, path: key, filename: file.name })
        }
        if (files) {
            setFiles([...files, ...promises])
        } else {
            setFiles(promises)
        }
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