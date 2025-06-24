import { createContext, useReducer, type ComponentType } from "react";
import { CounterReducer } from "./App.reducer";
import { type CounterState, type CounterMethods } from "./App.types";

export const initialState={
    count:0
}

export const CounterContext = createContext<(CounterState & CounterMethods | null)>(null);

export const withCounterProvider=<T extends {}>(Component:ComponentType<T>)=>{

    return (props:T)=>{
        
        const[state,dispatch]=useReducer(CounterReducer, initialState);

        function handleIncrement(){
            dispatch({type:'INCREMENT'})
        }

        function handleDecrement(){
            dispatch({type:'DECREMENT'})
        }

        function handleReset(){
            dispatch({type:'RESET'})
        }


        return(
            <CounterContext.Provider value={{...state,handleIncrement,handleDecrement,handleReset }}>
                <Component {...props}/>
            </CounterContext.Provider>
        )
    }

}