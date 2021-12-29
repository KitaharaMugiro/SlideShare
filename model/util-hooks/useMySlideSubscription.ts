import { useEffect, useState } from "react"
import { QueryUserSlideQuery, useQueryUserSlideQuery, useSubscribeUserSlideSubscription } from "../../src/generated/graphql"
import useUser from "./useUser"

export default (initialValue: number = 10) => {
    const { user } = useUser()
    const [limit, setLimit] = useState(initialValue)
    const { data, loading, error } = useSubscribeUserSlideSubscription({
        variables: {
            limit: limit,
            userId: user?.attributes.sub || ""
        }
    })

    const loadMore = async () => {
        setLimit(limit + 10)
    }

    console.log({ data })
    return { slides: data?.slideshare_Slide, loadMore }
}