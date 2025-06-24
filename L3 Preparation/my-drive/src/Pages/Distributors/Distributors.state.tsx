import { createContext, useReducer, type ComponentType } from "react";
import type { DistributorsMethods, DistributorsState } from "./Distributors.types"
import { DistributorsReducer } from "./Distributors.reducer";
import DistributorsService from "../../Services/Distributors.service";



export const initialState:DistributorsState = {
   distributorsData:[]
}

export const DistributorsContext = createContext<(DistributorsState & DistributorsMethods | null)>(null);

export const withDistributorsProvider=<T extends {}>(Component:ComponentType)=>{

    return (props:T)=>{

        const[state,dispatch]=useReducer(DistributorsReducer, initialState);

        const displayDistributors=async()=>{
            try{
                const distList =await DistributorsService.getDistributors();
                dispatch({type:'DISPLAY_DISTRIBUTORS', payload:distList.data.rows})
            }catch(e){
                throw {message:e}
            }
        }

        return (
            <DistributorsContext.Provider value={{...state, displayDistributors}}>
                <Component {...props}/>
            </DistributorsContext.Provider>
        )
    }


}