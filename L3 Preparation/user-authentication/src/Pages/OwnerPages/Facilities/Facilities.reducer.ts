import type { FacilitiesAction, FacilitiesState } from "./Facilities.types";



export const FacilitiesReducer=(state:FacilitiesState, action:FacilitiesAction)=>{

    switch(action.type){

        case 'DISPLAY_FACILITIES':
            return {...state,
                 isLoading:false, 
                 error:'', 
                 facilitiesData:action.payload.data,
                 page:action.payload.page, 
                 pageSize:action.payload.pageSize,
                 totalPages:action.payload.totalPages
                }

        case 'ADD_FACILITIES':
            return {...state,
                isLoading:false,
                error:'',
                facilitiesData:[...state.facilitiesData, action.payload]
            }
        

        case 'UPDATE_FACILITIES':
            return {
                isLoading:false,
                error:'',
                facilitiesData:state.facilitiesData.map((f)=>f.id===action.payload.id?action.payload : f)
            }

        case 'REMOVE_FACILITIES':
            return {
                isLoading:false,
                error:'',
                facilitiesData:state.facilitiesData.filter((f)=>f.id!==action.id)
            }

    }
}