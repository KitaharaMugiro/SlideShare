import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useEffect, useState, useReducer, useRef } from 'react';

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);
export default function MarkdownEditor() {
    const [value, setValue] = useState("**Hello world!!!**");
    const valueRef = useRef();

    const updateFunction = async () => {
        console.log(valueRef.current);
    }

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    useEffect(() => {
        return updateFunction
    }, []);

    return (
        <div style={{ width: "90%" }}>
            <MDEditor
                value={value}
                onChange={setValue}
                height={400}
            />
        </div>
    );
}