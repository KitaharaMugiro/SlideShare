import { useEffect, useState } from "react"
import { QueryUserSlideQuery, useQueryUserSlideQuery } from "../../src/generated/graphql"
import useUser from "./useUser"

export default (initialValue: number = 0) => {
    const { user } = useUser()
    const [offset, setOffset] = useState(initialValue)
    const { data, loading, error, refetch } = useQueryUserSlideQuery({
        variables: {
            offset: offset,
            userId: user?.attributes.sub || ""
        }
    })
    const [localSlides, setLocalSlides] = useState<QueryUserSlideQuery | undefined>(undefined)

    const onDeleteCard = (slideId: number) => {
        if (localSlides) {
            const newSlides = localSlides.slideshare_Slide.filter((slide) => {
                return slide.id !== slideId
            })
            setLocalSlides({
                ...data,
                slideshare_Slide: newSlides
            })
        }
    }

    //TODO: クエリでとってきたものをローカルに持って表示するケースのベストプラクティスは？
    useEffect(() => {
        if (data?.slideshare_Slide && !localSlides) {
            setLocalSlides(data)
        }
    }, [data])


    const loadMore = async () => {
        const { data: newData } = await refetch({
            userId: user?.attributes.sub || "",
            offset: offset + 10
        })
        if (localSlides) {
            const newSlides = localSlides.slideshare_Slide.concat(newData?.slideshare_Slide)
            setLocalSlides({
                ...data,
                slideshare_Slide: newSlides
            })
            setOffset(offset + 10)
        }
    }


    return { localSlides, onDeleteCard, loadMore }
}