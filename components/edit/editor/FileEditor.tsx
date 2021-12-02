
import React, { useState } from "react";
import useFiles from "../../../model/hooks/useFiles";
import useTitleSetModal from "../../../model/util-hooks/useTitleSetModal";
import { Page } from "../../../model/Page";
import { useDeleteFileMutation, useInsertFileMutation } from "../../../src/generated/graphql";
import FilePaperList from '../../common/FilePaperList';
import FileUploader from "../../common/FileUploader";

interface Props {
    page: Page
}

export default (props: Props) => {
    const { files, onClickDonwload, onFileUpload, deleteFile } = useFiles(props.page.Files)
    const { modal, button } = useTitleSetModal(props.page)

    const onClickLinkDelete = (id: number) => {
        deleteFile(props.page, id)
    }

    const _onFileUpload = (file: any) => {
        onFileUpload(file, props.page)
    }


    return (
        <>
            <FileUploader onFileUpload={_onFileUpload} />
            {button}
            {files ?
                <FilePaperList
                    files={files}
                    onClickDonwload={onClickDonwload}
                    onClickLinkDelete={onClickLinkDelete} />
                : <div />}

            {modal}
        </>
    )
}