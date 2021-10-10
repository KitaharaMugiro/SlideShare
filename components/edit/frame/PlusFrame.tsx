import styled from "@emotion/styled";
import React from "react";
import AddIcon from "@mui/icons-material/Add"
import FrameSize from "./FrameSize";

const Border = styled.div`
    border-radius: 25px;
    margin:${FrameSize.margin}px;
    padding:10px;
    border: 2px dotted gray;
    width: ${FrameSize.width}px;
    min-width: ${FrameSize.width}px;
    height: ${FrameSize.height}px;
    display: grid;
    place-content: center;
    cursor: pointer;
    :hover {
        filter: brightness(50%);
    }
`

interface Props {
    onClick: () => void
}

const PlusFrame = (props: Props) => {
    return (
        <Border onClick={props.onClick}>
            <AddIcon style={{ color: "gray", fontSize: 40 }} />
        </Border>
    )
};

export default PlusFrame;

