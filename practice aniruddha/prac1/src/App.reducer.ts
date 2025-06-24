import type { CounterAction, CounterState } from "./App.types";


export const CounterReducer =(state:CounterState,action:CounterAction)=>{
    switch(action.type){

        case 'INCREMENT':
            return{...state, count:state.count  + 1}

        case 'DECREMENT':
            return {...state, count:state.count - 1}

        case 'RESET':
            return {...state, count:0}
    }
}