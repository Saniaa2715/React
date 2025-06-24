

import { AppState } from "./App.types";
import { AppAction } from "./App.types";


//Mera reducer two parameters leta hai 
//currentState => meaning it takes the currentState of (jispe hum perform kr rahe)
//action to perform on the current state and update it

export const reducer =(currentState:AppState, action:AppAction)=>{

    switch(action.type){

        case 'INC':
            return {...currentState,count: currentState.count+action.offset}

        case 'DEC':
            return {...currentState, count: currentState.count - action.offset}
            
    }

}