import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Link } from "@mui/material"
import { VariableNode } from "graphql"
import React from "react"

interface Props {
    name: string | null | undefined
    pageNumber: number
    pageId: string
    comment: string
    onClickLink: (pageId: string) => void
}

export default (props: Props) => {
    const onClickLink = () => {
        props.onClickLink(props.pageId)
    }

    return (
        <ListItem alignItems="flex-start">
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
                        <div>
                            <Link onClick={onClickLink} style={{ cursor: "pointer" }}>@{props.pageNumber}</Link>
                            {" " + props.comment}
                        </div>
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}