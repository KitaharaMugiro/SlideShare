import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Switch, Typography } from "@mui/material"
import { useState } from "react";
import { QuerySlideQuery } from "../../src/generated/graphql"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from "date-fns";
import useSlideRecord from "../../model/hooks/useSlideRecord";
interface Props {
    initialSlide: QuerySlideQuery
    selectedRecordId: number | undefined
    onClickReplay: (id: number) => void
    isAdmin: boolean
}


export default (props: Props) => {
    const { deleteRecord } = useSlideRecord()
    const [locallyDeleteId, setLocallyDeleteId] = useState<number[]>([])
    const records = props.initialSlide.slideshare_SlideRecord.filter(record => !locallyDeleteId.includes(record.id))
    const onClickDelete = async (id: number) => {
        if (window.confirm("本当に削除しますか？")) {
            await deleteRecord(id)
            setLocallyDeleteId([...locallyDeleteId, id])
        }
    }
    const renderListItems = () => {
        return records.map((r) => {
            return <ListItem
                key={r.id}
                secondaryAction={
                    props.isAdmin ?
                        <IconButton edge="end" aria-label="delete"
                            onClick={() => onClickDelete(r.id)}>
                            <DeleteIcon />
                        </IconButton> : <div />
                }>
                <ListItemButton
                    onClick={() => props.onClickReplay(r.id)}
                    selected={props.selectedRecordId === r.id}>
                    <ListItemIcon>
                        <PlayCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ color: "white" }} id="switch-list-label-wifi"
                        primary={r.title}
                        secondary={format(new Date(r.createdAt), "yyyy年MM月dd日 HH時mm分")}
                    />
                </ListItemButton>
            </ListItem>
        })
    }

    return (
        <div style={{ margin: 10 }}>
            {/* <Typography variant="h4" color="white">Replays</Typography> */}
            <List
                sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper' }}
                subheader={<ListSubheader>Replays</ListSubheader>}
            >

                {renderListItems()}
            </List>
        </div>
    )
}