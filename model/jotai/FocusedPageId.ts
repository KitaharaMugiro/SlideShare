import { atom, useAtom } from 'jotai'
import { Page } from '../Page'
import { pageListAtom } from './PageList'

export const focusedPageIdAtom = atom<string>("")

export const usePageList = () => {

    const [pageList, setPageList] = useAtom(pageListAtom)
    const [focusId, setFocusedId] = useAtom(focusedPageIdAtom)
    const focusedPage = pageList.find(p => p.pageId === focusId)

    const updatePage = (targetPage: Page) => {
        const index = pageList.findIndex((page) => targetPage.pageId === page.pageId);
        //Not found, return same reference.
        if (-1 === index) {
            return pageList;
        }
        //Return clone of items before and clone of items after.
        const newPageList = [...pageList.slice(0, index), targetPage, ...pageList.slice(index + 1)];
        setPageList(newPageList)
    }

    const removePage = (pageId: string) => {
        const index = pageList.findIndex((page) => pageId === page.pageId);
        //Not found, return same reference.
        if (-1 === index) {
            return pageList;
        }
        //Return clone of items before and clone of items after.
        const newPageList = [...pageList.slice(0, index), ...pageList.slice(index + 1)];
        setPageList(newPageList)
    }

    return { pageList, focusedPage, updatePage, removePage }
}

