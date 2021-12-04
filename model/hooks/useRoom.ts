import { addHours, format } from "date-fns"
import { useState } from "react"
import { useCreateRoomMutation, useJoinRoomMutationMutation, useRoomsSubscription, useUpdateRoomMutation, useUpdateRoomParticipantMutationMutation, useUpdateRoomPresentationSlideIdMutation } from "../../src/generated/graphql"
import { Room } from "../Room"
import { useSnackMessage } from "../util-hooks/useSnackMessage"
import useUser from "../util-hooks/useUser"

export default () => {
    const [date] = useState(addHours(new Date(), -3))
    const dateStr = format(date, "yyyy-MM-dd'T'HH:mm:ss",)
    const { data, error, loading } = useRoomsSubscription({ variables: {} })

    const rooms: Room[] = data?.slideshare_Room.map(r => {
        return {
            id: r.id,
            name: r.name,
            description: r.description,
            participants: r.RoomParticipants.map(p => { return { id: p.userId, name: p.Profile.name || "Anon", slideId: p.Slide?.id, slideImageUrl: (p.Slide?.Pages && p.Slide?.Pages.length > 0) ? p.Slide?.Pages[0].imageUrl : null } }) || [],
            status: r.Slide ? "open" : "waiting",
            presentingSlide: r.Slide ? { slideId: r.Slide.id, slideImageUrl: r.Slide.Pages && r.Slide.Pages.length > 0 ? r.Slide.Pages[0].imageUrl : null } : null,
            createdBy: r.createdBy
        }
    }) || []


    return { rooms }
}

export const useRoomMutation = () => {
    const { displayErrorMessage } = useSnackMessage()
    const [createRoomMutation] = useCreateRoomMutation({ onError: (e) => displayErrorMessage(e.message) })
    const [updateRoomMutation] = useUpdateRoomMutation({ onError: (e) => displayErrorMessage(e.message) })
    const [updateRoomPresantationSlideMutation] = useUpdateRoomPresentationSlideIdMutation({ onError: (e) => displayErrorMessage(e.message) })

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

    const updatePresentingSlide = async (roomId: number, slideId: number | null) => {
        await updateRoomPresantationSlideMutation({
            variables: {
                id: roomId,
                presentingSlide: slideId
            }
        })
    }
    return { createRoom, updateRoom, updatePresentingSlide }
}

export const useRoomParticipantMutation = () => {
    const { user } = useUser()
    const { displayErrorMessage } = useSnackMessage()
    const [joinRoomMutation] = useJoinRoomMutationMutation({ onError: (e) => displayErrorMessage(e.message) })
    const [updateRoomMutation] = useUpdateRoomParticipantMutationMutation({ onError: (e) => displayErrorMessage(e.message) })

    const joinRoom = async (roomId: number) => {
        await joinRoomMutation({ variables: { roomId } })
    }

    const updatePresentingSlide = async (slideId: number) => {
        const sub = user?.attributes.sub
        if (!sub) return
        await updateRoomMutation({
            variables: {
                userId: sub,
                slideId: slideId
            }
        })
    }

    return { joinRoom, updatePresentingSlide }
}