// @ts-nocheck

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useEffect, useState, useReducer, useRef } from 'react';
import { Page } from "../../../model/Page";
import { usePageList } from "../../../model/hooks/usePageList"

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);

interface Props {
    editable: boolean
    height: number
    page: Page
}

const sampleText = `
# テスト
\`\`\`typescript
interface User {
    name: string;
    id: number;
  }
   
  class UserAccount {
    name: string;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
   
  const user: User = new UserAccount("Murphy", 1);
\`\`\`


# Python
\`\`\`python
# -*- coding: utf-8 -*-
# Python sample 
a=10
if a > 5 :
    print( "%sは、5より大きい" % a)
\`\`\`
`;


export default function MarkdownEditor(props: Props) {

    const { updatePage } = usePageList()
    const [value, setValue] = useState(props.page.text || sampleText);
    const valueRef = useRef();

    const updateFunction = async () => {
        console.log("update page text");
        const page = Object.assign({}, props.page)
        page.text = valueRef.current
        updatePage(page)
    }

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    useEffect(() => {
        return updateFunction
    }, []);

    return (
        <>
            <MDEditor
                value={value}
                onChange={setValue}
                height={props.height}
                preview={props.editable ? "live" : "preview"}
            />
        </>
    );
}