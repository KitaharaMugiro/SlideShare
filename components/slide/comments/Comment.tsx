import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Link } from "@mui/material"
import { VariableNode } from "graphql"
import React from "react"

interface Props {
    name: string | null | undefined
    pageNumber: number
    pageId: string
    comment: string
    onClickLink: (pageId: string) => void
    isPresenter: boolean
}

export default (props: Props) => {
    const onClickLink = () => {
        props.onClickLink(props.pageId)
    }

    return (
        <ListItem alignItems="flex-start" sx={{ backgroundColor: props.isPresenter ? "#8B0000" : "" }}>
            <ListItemAvatar>
                <Avatar alt={props.name || "Anon"} />
            </ListItemAvatar>
            <ListItemText
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {props.name || ""}
                        </Typography>
                        <br />
                        <Link onClick={onClickLink} style={{ cursor: "pointer" }}>@{props.pageNumber}</Link>
                        {" " + props.comment}
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}