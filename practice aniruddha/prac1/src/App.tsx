import { useContext } from "react";
import { CounterContext, withCounterProvider } from "./App.state";


const App = () => {

  const { count, handleIncrement,handleDecrement,handleReset}= useContext(CounterContext)!;

  return (
    <div className="Container">
        <h1>{count}</h1>
       <button onClick={handleIncrement}>Increment</button>
       <button onClick={handleDecrement}>Decrement</button>
       <button onClick={handleReset}>Reset</button>

       
    </div>
  )
}

export default withCounterProvider(App);