
import { useReducer } from "react";

import { reducer } from "./App.state";

function App(){

   const[state,updateState]=useReducer(reducer,{count:0});

   const increment1=()=>updateState({intent:'INCREMENT',data:1});
   const increment5=()=>updateState({intent:'INCREMENT',data:5});
   const decrement=()=>updateState({intent:'DECREMENT',data:1});
   const decrement5=()=>updateState({intent:'DECREMENT',data:5});


   return(
       <>
       <div className="counterApp">
          <button>{state.count}</button>

          <button onClick={increment1}>Increment By 1</button>
          <button onClick={increment5}>Increment By 5</button>
          <button onClick={decrement}>Decrement By 1</button>
          <button onClick={decrement5}>Decrement By 5</button>
       </div>
       </>
   )
}

export default App;


//Use reducer takes in two params reducer (a callback) and initial value.

   //Using the use reducer 
   //Manipulates the state(Primary Function)
   //Returns the state



   // const incOne=()=>{
   //    setCounter(counter+1);
   // }

   //  const incFive=()=>{
   //    setCounter(counter+5);
   // }

   //  const decOne=()=>{
   //    setCounter(counter-1);
   // }

   //  const decFive=()=>{
   //    setCounter(counter-5);
   // }

   // const changeCounter=(offset:number)=>{
   //    updateState( )
   // }
