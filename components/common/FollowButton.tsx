import { Button } from "@mui/material"
import React from "react"
import useFollower from "../../model/hooks/useFollower"
import useSignin from "../../model/hooks/useSignin"
import useUser from "../../model/hooks/useUser"

interface Props {
    userId?: string | null
}

export default (props: Props) => {
    const { user } = useUser()
    const { goSignin } = useSignin()
    const { useIsFollowQuery, follow, unfollow } = useFollower()
    const { data, loading, refetch } = useIsFollowQuery({ variables: { follow_user_id: props.userId || "", follower_user_id: user?.attributes.sub || "" } })
    const isFollow = data?.slideshare_Follower_by_pk?.follow_user_id
    if (!props.userId) return <div />
    if (loading) return <div />

    const onClickFollow = async () => {
        if (user) {
            if (props.userId) {
                await follow(props.userId)
                refetch()
            }
        } else {
            goSignin()
        }
    }

    const onClickUnfollow = async () => {
        if (user) {
            if (props.userId) {
                await unfollow(props.userId, user.attributes.sub)
                refetch()
            }
        } else {
            goSignin()
        }
    }


    return <>
        {isFollow ? <Button onClick={onClickUnfollow} color="warning">Unfollow</Button> : <Button onClick={onClickFollow} variant="contained">Follow</Button>}
    </>
}