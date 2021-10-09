import { useAtom } from "jotai"
import React, { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { focusedPageIdAtom } from "../../model/jotai/FocusedPageId"
import { pageListAtom } from "../../model/jotai/PageList"
import { createNewPage, Page } from "../../model/Page"
import ImageFrame from "./frame/ImageFrame"
import PlusFrame from "./frame/PlusFrame"
import SimpleFrame from "./frame/SimpleFrame"

export default () => {
    const [pageList, setPageList] = useAtom(pageListAtom)
    const [focusId, setFocusId] = useAtom(focusedPageIdAtom)

    const onClickPlus = () => {
        const newPage = createNewPage()
        setFocusId(newPage.pageId)
        setPageList([...pageList, newPage])
    }

    const onDragEnd = (result: any) => {
        const sourceIndex = result.source.index
        const destinationIndex = result.destination.index

        const items = Array.from(pageList);
        const [reorderedItem] = items.splice(sourceIndex, 1);
        items.splice(destinationIndex, 0, reorderedItem);

        setPageList(items);
    }

    const frameByType = (page: Page) => {
        const isFocus = page.pageId === focusId
        if (page.type === "temp") {
            return <SimpleFrame text="" isFocus={isFocus} />
        } else if (page.type === "image" && page.imageAttribute?.url) {
            return <ImageFrame imageUrl={page.imageAttribute.url} isFocus={isFocus} />
        } else {
            return <SimpleFrame text="" isFocus={isFocus} />
        }
    }

    const onClickPage = (pageId: string) => {
        setFocusId(pageId)
    }

    const renderDraggable = () => {
        return pageList.map((page, index) => {
            return (
                <Draggable key={page.pageId} draggableId={page.pageId} index={index}>
                    {(provided) => (
                        <div onClick={() => onClickPage(page.pageId)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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