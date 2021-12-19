import React, { useState } from "react"
import { useQueryProfileQuery, useSaveProfileMutation } from "../../src/generated/graphql"
import EditableProfileCard from "./EditableProfileCard"
import ProfileCard from "./ProfileCard"

interface Props {
    isAdmin: boolean
    userId: string
}

export default (props: Props) => {
    const [saveProfileMutation] = useSaveProfileMutation()
    const { data, loading, error, refetch } = useQueryProfileQuery({ variables: { userId: props.userId } })
    const profile = data?.slideshare_Profile_by_pk
    const [editing, setEditing] = useState(false)
    const onFinishEdit = async (name: string, profile: string) => {
        setEditing(false)
        await saveProfileMutation({
            variables: {
                name, profile
            }
        })
        refetch()
    }
    const onClickEdit = () => {
        setEditing(true)
    }

    if (loading) return <div />
    if (error) return <div>{JSON.stringify(error)}</div>
    return <>
        <EditableProfileCard
            name={profile?.name || ""}
            description={profile?.profile || ""}
            onFinishEdit={onFinishEdit}
            open={editing}
        />
        <ProfileCard
            name={profile?.name || "未設定"}
            subtitle="Contributions: 328"
            description={profile?.profile || "未設定"}
            isAdmin={props.isAdmin}
            userId={profile?.userId}
            onClickEdit={onClickEdit}
        />
    </>
}