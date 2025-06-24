import type { ToolsAction, ToolsState } from "./Tools.types";



export const ToolsReducer =(state:ToolsState, action:ToolsAction)=>{
    switch(action.type){
        case 'DISPLAY TOOLS':
            return {...state, toolsDataList:action.payload.content, totalPage:action.payload.page.totalPages}

        case 'ADD MODAL':
            return {...state, addModal:!state.addModal}

        case 'EDIT MODAL':
            return {...state, editModal:!state.editModal}

        case 'DELETE MODAL':
            return {...state, delModal:!state.delModal}

        default:
            return state
    }

}