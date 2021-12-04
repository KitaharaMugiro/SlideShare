export type RoomParticipant = {
    id: string;
    name: string;
}

export type Room = {
    id: number
    name: string
    description: string
    participants: RoomParticipant[]
    status: "open" | "waiting" | "closed"
    createdBy: string
}

export type MyRoomState = {
    participatedRoomId: number
    role: "owner" | "participant"
}