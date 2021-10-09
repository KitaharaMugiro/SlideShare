import { PinDropSharp } from "@mui/icons-material";
import Image from "next/image"
interface Props {
    imageUrl: string
    title: string
    description: string
    onClick: () => void
}

export default (props: Props) => {
    return <>
        <div onClick={props.onClick} role="button" style={getStyleObjectFromString("user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; width: 100%; background: rgba(55, 53, 47, 0.08);")}>
            <div style={getStyleObjectFromString("display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 45px; font-size: 14px; padding-top: 4px; padding-bottom: 4px;")}>
                <div style={getStyleObjectFromString("display: flex; align-items: center; justify-content: center; margin-left: 14px; margin-top: 1px; align-self: flex-start;")}>
                    <div style={getStyleObjectFromString("width: 100%; height: 100%;")}>
                        <img src={props.imageUrl} style={getStyleObjectFromString("display: block; object-fit: cover; border-radius: 3px; background: white; width: 46px; height: 46px; flex-grow: 0; flex-shrink: 0; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px;")} />
                    </div>
                </div>
                <div style={getStyleObjectFromString("margin-left: 8px; margin-right: 14px; min-width: 0px; flex: 1 1 auto;")}>
                    <div style={getStyleObjectFromString("white-space: nowrap; overflow: hidden; text-overflow: ellipsis;")}>
                        <div style={getStyleObjectFromString("display: flex; align-items: center;")}>
                            <span style={getStyleObjectFromString("margin-right: 6px;")}>{props.title}</span>
                        </div></div>
                    <div style={getStyleObjectFromString("white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: rgba(55, 53, 47, 0.6); margin-top: 2px; font-size: 12px;")}>{props.description}</div>
                </div>
            </div>
        </div>
    </>
}

const formatStringToCamelCase = (str: string) => {
    const splitted = str.split("-");
    if (splitted.length === 1) return splitted[0];
    return (
        splitted[0] +
        splitted
            .slice(1)
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join("")
    );
};

const getStyleObjectFromString = (str: string) => {
    const style: any = {};
    str.split(";").forEach(el => {
        const [property, value] = el.split(":");
        if (!property) return;

        const formattedProperty = formatStringToCamelCase(property.trim());
        style[formattedProperty] = value.trim();
    });

    return style;
};
