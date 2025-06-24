import { createContext, useReducer, type ComponentType } from "react"
import type { OwnerDashboardMethods, OwnerDashboardState } from "./OwnerDashboard.types"
import { OwnerDashboardReducer } from "./OwnerDashboard.reducer";
import OwnerDashboardServices from "../../../Services/OwnerServices/OwnerDashboard.services";


export const initialState={
   demandedToolsData:[],
   brokenToolsData:[],
   pricedToolsData:[]
}

//Firstly we declare the context , because only when the context is created then can the context can be used
export const OwnerDashboardContext = createContext<(OwnerDashboardState & OwnerDashboardMethods | null)>(null);

export const withOwnerDashboardProvider=<T extends {}>(Component : ComponentType<T>)=>{
    return(props:T)=>{

        const [state, dispatch]=useReducer(OwnerDashboardReducer, initialState);

        const handleDemandedTools=async()=>{
            try{
                const demandedToolsList= await OwnerDashboardServices.getDemandedTools();
                dispatch({type:'DISPLAY DEMANDED TOOLS', payload:demandedToolsList.data})
            }catch(e){
                throw {message:e}
            }
        }

        const handleBrokenTools=async()=>{
            try{
                const brokenToolsList= await OwnerDashboardServices.getBrokenTools();
                dispatch({type:'DISPLAY BROKEN TOOLS', payload:brokenToolsList.data})
            }catch(e){
                throw {message:e}
            }
        }

        const handlePricedTools=async()=>{
            try{
                const pricedToolsList = await OwnerDashboardServices.getPricedTools();
                dispatch({type:'DISPLAY PRICED TOOLS', payload:pricedToolsList.data})
            }catch(e){
                throw {message:e}
            }
        }

        return (
            <OwnerDashboardContext.Provider value={{...state, handleDemandedTools, handleBrokenTools, handlePricedTools}}>
                <Component {...props}/>
            </OwnerDashboardContext.Provider>
        )

    }
}