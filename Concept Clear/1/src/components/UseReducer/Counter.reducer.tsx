import type { CounterAction, CounterState } from "./Counter.types";


export const reducer=(state:CounterState, action:CounterAction)=>{
    switch(action.type){

        case 'INCREMENT':
            return {count:state.count+1}

        case 'DECREMENT':
            return {count:state.count-1}

        case 'RESET':
            return{count:0}
    }

}

