import { useState } from "react";


const Counter = () => {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0);
    }

    return (
        <>
            <h1>{count}</h1>

            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </>

    )

}

export default Counter;