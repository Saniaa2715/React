import { useContext } from "react";
import { CounterContext, withCounterProvider } from "./Counter.state";

const CounterReducer = () => {

    const { count, handleIncrement, handleDecrement, handleReset } = useContext(CounterContext)!


    return (
        <div>
            <h1>Count:{count}</h1>

            <button onClick={handleIncrement}>Plus</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Minus</button>

        </div>
    )
}


export default withCounterProvider(CounterReducer);