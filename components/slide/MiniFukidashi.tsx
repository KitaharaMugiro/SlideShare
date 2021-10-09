import style from "./fukidashi.module.css"

interface Props {
    text: string
    avator: string
    name: string
    color: string
}

export default (props: Props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 15 }}>

            <div className={style.mini_arrow_box} style={{ backgroundColor: props.color }}>
                {props.text}
                <div className={style.mini_arrow_box_after} style={{ borderTopColor: props.color }}></div>
            </div>


            <div style={{ display: "flex", alignItems: "flex-end", width: 20, marginTop: 10, fontSize: 18 }}>
                <div>{props.avator}</div>
                <div style={{ fontSize: "10px" }}>{props.name}</div>
            </div>

        </div>
    )
}