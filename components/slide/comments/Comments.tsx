import { Alert, Button, TextField, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import * as React from 'react';
import Comment from "./Comment";
import SendIcon from '@mui/icons-material/Send';
import { useQueryCommentSubscription, useSendCommentMutation } from '../../../src/generated/graphql';
import { Page } from '../../../model/Page';
import { useTranslations } from 'use-intl';

interface Props {
    viewingPage: Page
    presenterUserId?: string
    onClickLink: (pageId: string) => void
}


export default function Comments(props: Props) {
    const t = useTranslations("Comment")
    const { data, loading, error } = useQueryCommentSubscription({ variables: { slideId: props.viewingPage.slideId } })
    const [sendComment] = useSendCommentMutation()
    const [comment, setComment] = React.useState("")
    const WIDTH = 340
    const renderComments = () => {
        if (data?.slideshare_Comment.length === 0) {
            return (
                <Alert variant="filled" severity="info">
                    {t("lets-first-comment")}
                </Alert>
            )
        }
        return data?.slideshare_Comment.map((comment) => {
            const isPresenter = props.presenterUserId ? comment.createdBy === props.presenterUserId : false
            return <>
                <Comment
                    name={comment.Profile?.name}
                    pageNumber={comment.Page.pageNumber + 1}
                    pageId={comment.pageId}
                    comment={comment.text}
                    onClickLink={props.onClickLink}
                    isPresenter={isPresenter}
                />
                <Divider variant="inset" component="li" />
            </>
        })
    }

    const onClickSend = () => {
        sendComment({
            variables: {
                slideId: props.viewingPage.slideId,
                pageId: props.viewingPage.id,
                text: comment
            }
        })
        setComment("")
    }

    const onChangeComment = (_text: string) => {
        const splittedTexts = _text.split(": ")
        const splittedDeleteZeroIndex = splittedTexts.filter((v, i) => i !== 0)
        const text = splittedDeleteZeroIndex.join(": ")
        setComment(text)
    }

    const commentFinal = `@${props.viewingPage.pageNumber + 1}: ` + comment

    if (loading) return <div />
    if (error) return <div>{JSON.stringify(error)}</div>

    return (
        <>
            <List sx={{
                width: WIDTH,
                height: 300,
                overflowY: "scroll",
                bgcolor: 'background.paper'
            }}>
                {renderComments()}
            </List>
            <TextField
                style={{ width: WIDTH }}
                InputProps={{
                    style: { color: "white" }
                }}
                label="Comment"
                multiline
                rows={3}
                onChange={(e) => onChangeComment(e.target.value)}
                variant="filled"
            />
            <div style={{ width: WIDTH, display: "flex", flexDirection: "row-reverse" }}>
                <Button onClick={onClickSend} variant="contained" endIcon={<SendIcon />}>
                    {t("send")}
                </Button>
            </div>
        </>
    );
}