import { createContext, useReducer, type ComponentType } from "react";
import type { ToolsMethods, ToolsState } from "./Tools.types";
import { ToolsReducer } from "./Tools.reducer";
import ToolsService from "../../Services/OwnerServices/Tools.service";


export const initialState:ToolsState={
   toolsDataList:[],
   totalPages:1,
   addModal:false,
   editModal:false,
   delModal:false
}

export const ToolsContext = createContext<(ToolsState & ToolsMethods | null)>(null);

export const withToolsProvider = <T extends {}>(Component:ComponentType)=>{
    return (props:T)=>{

        const[state, dispatch]=useReducer(ToolsReducer, initialState);

        const getToolsData =async()=>{
            try{
                const toolsList= await ToolsService.fetchTools();
                dispatch({type:'DISPLAY TOOLS', payload:toolsList})
            }catch(e){
                throw {message:e}
            }

            // dispatch({type:'ADD MODAL'})
        }

        const handleAddModal=()=>{
             dispatch({type:'ADD MODAL'})
        }

        const handleEditModal =()=>{
            dispatch({type:'EDIT MODAL'})
        }

        const handleDelModal=()=>{
            dispatch({type:'DELETE MODAL'})
        }


        return (
           <ToolsContext.Provider value={{...state, getToolsData, handleAddModal, handleDelModal,handleEditModal}}>
                <Component {...props}/>
           </ToolsContext.Provider>
        )
    }
}