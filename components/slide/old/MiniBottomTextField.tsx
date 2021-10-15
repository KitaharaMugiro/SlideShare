import style from "./textfield.module.css"

interface Props {
    onChange: (text: string) => void
    value: string
}

export default (props: Props) => {
    return (
        <div style={{ position: "fixed", bottom: "10px" }}>
            <input
                onChange={(e) => props.onChange(e.target.value)}
                value={props.value}
                className={style.mini_textbox} type="text" name="q" placeholder="Type what you think" autoComplete="off" maxLength={60} />
        </div>
    )
}