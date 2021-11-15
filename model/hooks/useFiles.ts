import { useState } from "react"
import { useDeleteBookmarkMutation, useDeleteFileMutation, useInsertBookmarkMutation, useInsertFileMutation, useInsertPollMutation } from "../../src/generated/graphql"
import { Page } from "../Page"
import { usePageList } from "./usePageList"
import { Storage } from "aws-amplify";
import { useSnackMessage } from "./useSnackMessage";

export default (initialState?: { id: number, path: string, filename: string }[] | null) => {
    const { displayErrorMessage } = useSnackMessage()
    const { updatePage } = usePageList()
    const [files, setFiles] = useState(initialState || [])
    const [insertFileMutation] = useInsertFileMutation()
    const [deleteFileMutation] = useDeleteFileMutation()

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


    const onFileUpload = async (acceptedFiles: any[], page: Page) => {
        const promises = []
        for (const file of acceptedFiles) {
            const fileResult: any = await handleEachFile(file) //TODO: as anyで逃げてる
            const fileAsArrayBuffer = new Uint8Array(fileResult);
            // do whatever you want with the file content
            const fileName = "Page#" + page.id + "/Name#" + file.name
            //TODO: できたらユーザごとにフォルダ分けたいけどCognitoUserのsubの取り方がわからない
            const result = await Storage.put(`upload/${fileName}`, fileAsArrayBuffer,
                { contentType: file.type })

            const key = result.key
            const r = await insertFileMutation({
                variables: {
                    path: key,
                    pageId: page.id,
                    filename: file.name
                }
            })
            const d = r.data?.insert_slideshare_File_one
            promises.push({ id: d?.id!, path: key, filename: file.name })
        }

        const newFiles = [...files, ...promises]
        setFiles(newFiles)
        page.Files = newFiles
        updatePage(page, true)
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


    const deleteFile = async (page: Page, fileId: number) => {
        const newFiles = files?.filter(f => f.id !== fileId)
        setFiles(newFiles)
        deleteFileMutation({ variables: { id: fileId } })
        page.Files = newFiles
        updatePage(page, true)
    }

    return { files, onFileUpload, onClickDonwload, deleteFile }
}