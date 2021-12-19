import { useEffect, useState } from "react"
import useUser from "../../model/util-hooks/useUser"
import { useSaveProfileMutation, useQueryProfileQuery } from "../../src/generated/graphql"
import EditableProfileCard from "../slide/EditableProfileCard"
import ProfileCard from "../slide/ProfileCard"
import ForceEditableProfileCard from "./ForceEditableProfileCard"

export default () => {
    const { user } = useUser()
    const [saveProfileMutation] = useSaveProfileMutation()
    const { data, loading, error, refetch } = useQueryProfileQuery({ variables: { userId: user?.attributes.sub || "" } })
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

    useEffect(() => {
        if (!loading) {
            if (user && !profile) {
                setEditing(true)
            }
        }
    }, [user, profile])

    if (!user) return <div />
    if (profile) return <div />
    if (loading) return <div />
    if (error) return <div>{JSON.stringify(error)}</div>
    return <>
        <ForceEditableProfileCard
            name=""
            description=""
            onFinishEdit={onFinishEdit}
            open={editing}
        />
    </>

}