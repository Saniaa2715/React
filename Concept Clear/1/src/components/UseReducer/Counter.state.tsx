import { createContext, useReducer, type ComponentType } from "react"
import type{ CounterState, CounterMethods } from "./Counter.types"
import { reducer } from "./Counter.reducer"


export const initialState={
    count:0
}



export const CounterContext=createContext<(CounterState & CounterMethods)|null> (null)

export const withCounterProvider= <T extends {}>(Component:ComponentType<T>)=>{

    return(props : T)=>{
        const[state,dispatch]=useReducer(reducer, initialState)

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

            <CounterContext.Provider value={{...state,handleIncrement, handleDecrement, handleReset}}>
                <Component {...props}/>
            </CounterContext.Provider>
        )
        
    }


}