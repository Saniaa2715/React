import { InputProps } from "./Input.types";
import { forwardRef} from "react";

export const Input=forwardRef<HTMLInputElement,InputProps> ((props, ref) => {

    return (
        <>
            <input type="text" {...props} ref={ref}/>
        </>
    )
})