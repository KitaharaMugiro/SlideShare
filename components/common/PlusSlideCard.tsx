import styled from "@emotion/styled";
import React from "react";
import AddIcon from "@mui/icons-material/Add"

const Border = styled.div`
    border-radius: 25px;
    padding:10px;
    border: 2px dotted gray;
    width: 280px;
    min-width: 280px;
    height: 185px;
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

const PlusSlideCard = (props: Props) => {
    return (
        <Border onClick={props.onClick}>
            <AddIcon style={{ color: "gray", fontSize: 40 }} />
        </Border>
    )
};

export default PlusSlideCard;

