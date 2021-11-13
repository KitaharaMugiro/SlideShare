import { useFollowMutation, useIsFollowQuery, useUnfollowMutation } from "../../src/generated/graphql"

export default () => {
    const [followMutation] = useFollowMutation()
    const [unfollowMutation] = useUnfollowMutation()

    const follow = async (userId: string) => {
        await followMutation({
            variables: {
                follow_user_id: userId
            }
        })
    }

    const unfollow = async (userId: string, yourId: string) => {
        await unfollowMutation({
            variables: {
                follow_user_id: userId,
                follower_user_id: yourId
            }
        })
    }


    return { follow, unfollow, useIsFollowQuery }
}