import { addHours, format } from "date-fns"
import { useState } from "react"
import { useCreateRoomMutation, useJoinRoomMutationMutation, useRoomsSubscription, useUpdateRoomMutation } from "../../src/generated/graphql"
import { Room } from "../Room"
import { useSnackMessage } from "../util-hooks/useSnackMessage"

export default () => {
    const [date] = useState(addHours(new Date(), -3))
    const dateStr = format(date, "yyyy-MM-dd'T'HH:mm:ss",)
    const { data, error, loading } = useRoomsSubscription({ variables: {} })

    const rooms: Room[] = data?.slideshare_Room.map(r => {
        return {
            id: r.id,
            name: r.name,
            description: r.description,
            participants: r.RoomParticipants.map(p => { return { id: p.userId, name: p.Profile.name || "Anon" } }) || [],
            status: r.Slide ? "open" : "waiting",
            createdBy: r.createdBy
        }
    }) || []


    return { rooms }
}

export const useRoomMutation = () => {
    const { displayErrorMessage } = useSnackMessage()
    const [createRoomMutation] = useCreateRoomMutation({ onError: (e) => displayErrorMessage(e.message) })
    const [updateRoomMutation] = useUpdateRoomMutation({ onError: (e) => displayErrorMessage(e.message) })

    const createRoom = async (name: string, description: string) => {
        await createRoomMutation({ variables: { name, description } })
    }

    const updateRoom = async (room: Room) => {
        await updateRoomMutation({
            variables: {
                id: room.id,
                name: room.name,
                description: room.description
            }
        })
    }

    const startPresentation = async (roomId: number, slideId: number) => {
        await updateRoomMutation({
            variables: {
                id: roomId,
                presentingSlide: slideId
            }
        })
    }
    return { createRoom, updateRoom, startPresentation }
}

export const useRoomParticipantMutation = () => {
    const { displayErrorMessage } = useSnackMessage()
    const [joinRoomMutation] = useJoinRoomMutationMutation({ onError: (e) => displayErrorMessage(e.message) })

    const joinRoom = async (roomId: number) => {
        await joinRoomMutation({ variables: { roomId } })
    }

    return { joinRoom }
}