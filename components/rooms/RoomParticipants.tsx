import { Avatar, AvatarGroup } from '@mui/material';
import React from 'react';
import { RoomParticipant } from '../../model/Room';

interface Props {
    participants: RoomParticipant[];
}

export default (props: Props) => {

    return (
        <div>
            <AvatarGroup max={8}>
                {props.participants.map(participant => {
                    return (
                        <Avatar key={participant.id}>
                            {participant.name.charAt(0)}
                        </Avatar>
                    )
                })}
            </AvatarGroup>
        </div>
    )
}