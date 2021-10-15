import { useAtom } from "jotai"
import { useRouter } from "next/dist/client/router"
import React from "react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { usePageList } from "../../model/hooks/usePageList"
import { focusedPageIdAtom } from "../../model/jotai/FocusedPageId"
import { Page } from "../../model/Page"
import ImageFrame from "./frame/ImageFrame"
import PlusFrame from "./frame/PlusFrame"
import SimpleFrame from "./frame/SimpleFrame"

export default () => {
    const router = useRouter()
    const { slideId } = router.query
    const [focusId, setFocusId] = useAtom(focusedPageIdAtom)
    const { pageList, createPage, changeOrderPage } = usePageList()

    const onClickPlus = () => {
        createPage(Number(slideId))
    }

    const onDragEnd = (result: any) => {
        const sourceIndex = result.source.index
        const destinationIndex = result.destination.index
        changeOrderPage(sourceIndex, destinationIndex)
    }

    const frameByType = (page: Page) => {
        const isFocus = page.id === focusId
        if (page.type === "temp") {
            return <SimpleFrame text="" isFocus={isFocus} />
        } else if (page.type === "image" && page.imageUrl) {
            return <ImageFrame imageUrl={page.imageUrl} isFocus={isFocus} />
        } else {
            return <SimpleFrame text="" isFocus={isFocus} />
        }
    }

    const onClickPage = (pageId: string | number) => {
        setFocusId(pageId)
    }

    const renderDraggable = () => {
        return pageList.map((page, index) => {
            return (
                <Draggable key={page.id} draggableId={String(page.id)} index={index}>
                    {(provided) => (
                        <div onClick={() => onClickPage(page.id)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            {frameByType(page)}
                        </div>
                    )}
                </Draggable>
            )

        })
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="test" direction="horizontal">
                {(provided) => (
                    <div style={{
                        display: "flex",
                        padding: 20,
                        overflowX: "scroll"
                    }}  {...provided.droppableProps} ref={provided.innerRef}>
                        {renderDraggable()}
                        {provided.placeholder}
                        <PlusFrame onClick={onClickPlus} />
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}