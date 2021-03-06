export type RoomParticipant = {
    id: string;
    name: string;
    slideId: number | undefined | null;
    slideImageUrl: string | undefined | null
}

export type Room = {
    id: number
    name: string
    description: string
    participants: RoomParticipant[]
    status: "open" | "waiting" | "closed"
    createdBy: string
    presentingSlide: { slideId: number, slideImageUrl: string | undefined | null, status: string } | undefined | null
}

export type MyRoomState = {
    participatedRoomId: number | undefined
    role: "owner" | "participant" | "public" | "none"
}