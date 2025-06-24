import type { FacilitiesAction, FacilitiesState } from "./Facilities.types"


export const facilitiesReducer=(state:FacilitiesState,action:FacilitiesAction):FacilitiesState=>{

    switch(action.type){

        case 'DISPLAY FACILITIES':
            return{...state, facilitiesData:action.payload.content, totalPages:action.payload.totalPages}

        case 'ADD FACILITIES':
            return {...state, facilitiesData:[...state.facilitiesData, action.payload]}

        case 'EDIT FACILITIES':
            return {...state,facilitiesData:state.facilitiesData.map((f)=> f.id===action.payload.id? action.payload: f)}

        case 'DELETE FACILITIES':
            return {...state, facilitiesData: state.facilitiesData.filter(f=>f.id!==action.payload)}

        case 'ADD MODAL':
            return {...state, addModal:!state.addModal}

        case 'EDIT MODAL':
            return {...state, editModal:!state.editModal}

        case 'DELETE MODAL':
            return {...state, delModal:!state.delModal}
    }
}