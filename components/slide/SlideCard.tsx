import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useEffect, useState } from "react";
import { Storage } from "aws-amplify"
import { useRouter } from 'next/dist/client/router';
import useSlide from '../../model/hooks/useSlide';
import Link from 'next/link';

interface Props {
    imageUrl: string | undefined | null
    slideId: number
    onDeleteCard?: (slideId: number) => void
}

export default function SlideCard(props: Props) {
    const router = useRouter()
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

    return (
        <Card sx={{ width: 280, height: 185 }}>
            <Link href={`/slide/${props.slideId}`}>
                <a>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={url}
                        />
                        {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent> */}
                    </CardActionArea>
                </a>
            </Link>
            <CardActions>

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
            </CardActions>
        </Card>
    );
}