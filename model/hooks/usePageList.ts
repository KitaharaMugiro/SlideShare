import { useAtom } from "jotai"
import { useDeletePageMutation, useInsertPageMutation, useUpdatePageMutation, useUpdatePageNumberMutation } from "../../src/generated/graphql"
import { focusedPageIdAtom } from "../jotai/FocusedPageId"
import { pageListAtom } from "../jotai/PageList"
import { createNewPage, Page, reorderPageList } from "../Page"

export const usePageList = () => {

    const [pageList, setPageList] = useAtom(pageListAtom)
    const [focusId, setFocusedId] = useAtom(focusedPageIdAtom)
    const focusedPage = pageList.find(p => p.id === focusId)
    const [createPageMutation] = useInsertPageMutation()
    const [updatePageMutation] = useUpdatePageMutation()
    const [deletePageMutation] = useDeletePageMutation()
    const [updatePageNumberMutation] = useUpdatePageNumberMutation()

    const updateAllPageNumber = async () => {
        reorderPageList(pageList)
        const requestObjects = pageList.map(o => { return { id: o.id, pageNumber: o.pageNumber, slideId: 0 } })
        updatePageNumberMutation({ variables: { objects: requestObjects } })
    }

    const createPage = async (slideId: number, index?: number) => {
        const newPage = createNewPage(slideId)
        if (!index) index = pageList.length
        const newPageList = [...pageList.slice(0, index), newPage, ...pageList.slice(index)];
        reorderPageList(newPageList)
        setPageList(newPageList)
        setFocusedId(newPage.id)
        createPageMutation({
            variables: { object: { ...newPage, slideId } }
        })
    }

    const updatePage = (targetPage: Page, onlyUpdateStore: boolean = false) => {
        const index = pageList.findIndex((page) => targetPage.id === page.id);
        //Not found, return same reference.
        if (-1 === index) {
            console.warn("updatePage: page not found in pageList")
            return pageList;
        }
        //Return clone of items before and clone of items after.
        let newPageList = [...pageList.slice(0, index), targetPage, ...pageList.slice(index + 1)];
        reorderPageList(newPageList)
        setPageList(newPageList)

        if (onlyUpdateStore) return;
        //TODO: これ手動でやるのあほくさい。。。
        updatePageMutation({
            variables: {
                id: targetPage.id, object: {
                    title: targetPage.title,
                    text: targetPage.text,
                    imageUrl: targetPage.imageUrl,
                    type: targetPage.type,
                    videoUrl: targetPage.videoUrl
                }
            }
        })
    }

    const removePage = (pageId: string) => {
        const index = pageList.findIndex((page) => pageId === page.id);
        //Not found, return same reference.
        if (-1 === index) {
            return pageList;
        }
        //Return clone of items before and clone of items after.
        const newPageList = [...pageList.slice(0, index), ...pageList.slice(index + 1)];
        reorderPageList(newPageList)
        setPageList(newPageList)
        deletePageMutation({ variables: { id: pageId } })
    }

    const changeOrderPage = (sourceIndex: number, destinationIndex: number) => {
        const array = Array.from(pageList)
        const [reorderedItem] = array.splice(sourceIndex, 1);
        array.splice(destinationIndex, 0, reorderedItem);
        reorderPageList(array)
        setPageList(array)

        //TODO: イケてなさすぎ
        const requestObjects = array.map(o => { return { id: o.id, pageNumber: o.pageNumber, slideId: 0 } })
        updatePageNumberMutation({ variables: { objects: requestObjects } })
    }

    return { pageList, focusedPage, updatePage, removePage, createPage, changeOrderPage, updateAllPageNumber }
}

