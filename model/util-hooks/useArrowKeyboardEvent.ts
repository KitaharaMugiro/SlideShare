import { useCallback, useEffect } from "react";

export default (onClickLeft: Function, onClickRight: Function) => {
    // const escFunction = useCallback((event) => {
    //     if (event.keyCode === 37) {
    //         console.log("Left Key is pressed!");
    //         onClickLeft()
    //     } else if (event.keyCode === 39) {
    //         console.log("Right Key is pressed!");
    //         onClickRight()
    //     }
    // }, []);

    const escFunction = (event) => {
        if (event.keyCode === 37) {
            console.log("Left Key is pressed!");
            onClickLeft()
        } else if (event.keyCode === 39) {
            console.log("Right Key is pressed!");
            onClickRight()
        }
    }


    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        }
    }, [escFunction]);
}