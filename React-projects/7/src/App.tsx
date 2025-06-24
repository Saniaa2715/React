// import { CurrentCounterCount } from "./Component/CurrentCount";

// import { Counter } from "./Component/CurrentCount";
import { useState } from "react";
const App=()=>{

  const [stateValue, updateValue]=useState(0);
  const increment=()=>{
    updateValue(stateValue+1);
  }
  console.log(increment);

  const decrement=()=>{
    updateValue(stateValue-1);
  }

  const reset=()=>{
    updateValue(0)
  };
  

  return
  (
   <div>
    <p>Count:{stateValue}</p>

    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
   </div>
  )
}
export default App;



// Class Based 
// class AppComponent extends Component{
//   render(){
//     return
//   }
// }