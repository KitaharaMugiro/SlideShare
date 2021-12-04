import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Storage } from "aws-amplify";
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useState } from "react";
import useSlide from '../../model/hooks/useSlide';

interface Props {
    imageUrl: string | undefined | null
    slideId: number
    actionMode: "mypage" | "pick" | "none"
    linkTo: "slide" | "presentation"
    onDeleteCard?: (slideId: number) => void
    onClickPick?: (slideId: number) => void
}

export default function SlideCard(props: Props) {
    const { deleteSlide } = useSlide()

    const [url, setUrl] = useState("")
    useEffect(() => {
        const load = async () => {
            if (props.imageUrl) {
                const signedURL = await Storage.get(props.imageUrl);
                setUrl(signedURL)
            } else {
                setUrl("static/noimage.jpg")
            }
        }
        load()
    }, [props.imageUrl])

    const onClickDelete = async () => {
        if (window.confirm("本当に削除しますか？")) {
            deleteSlide(props.slideId)
            if (props.onDeleteCard) {
                props.onDeleteCard(props.slideId)
            }
        }
    }

    const renderActionsAccordingToMode = () => {
        switch (props.actionMode) {
            case "mypage":
                return <>
                    <Button
                        href={`/edit/${props.slideId}`}
                        size="small" color="primary">
                        Edit
                    </Button>
                    <Button
                        onClick={onClickDelete}
                        size="small" color="error">
                        Delete
                    </Button>
                </>
            case "pick":
                return <>
                    <span style={{ marginRight: 10 }}>
                        {"ID: " + props.slideId}
                    </span>
                    <Button
                        onClick={() => { props.onClickPick && props.onClickPick(props.slideId) }}
                        size="small" color="primary" variant="outlined">
                        Use this
                    </Button>
                </>
            case "none":
                return <>
                    <span style={{ marginRight: 10 }}>
                        {"ID: " + props.slideId}
                    </span>
                </>
            default:
                return <div />
        }
    }

    return (
        <Card sx={{ width: 280, height: 185 }}>
            <Link href={`/${props.linkTo || "slide"}/${props.slideId}`} passHref>
                <a target="_blank" rel="noreferrer">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={url}
                        />
                    </CardActionArea>
                </a>
            </Link>
            <CardActions>
                {renderActionsAccordingToMode()}
            </CardActions>
        </Card>
    );
}