import { useState } from "react";


const Toggle = () => {

    const [visible, setVisible] = useState(false);

    function openMore(){
        setVisible(!visible);
    }

    return (
        <>
            <h1>Hey there</h1>
            <button onClick={openMore}>See More!</button>
            {visible && <p>HIIIIIIIIIIII</p>}
        </>

    )
}

export default Toggle;