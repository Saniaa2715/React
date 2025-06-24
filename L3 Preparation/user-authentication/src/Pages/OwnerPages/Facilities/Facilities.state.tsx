import { createContext, useReducer, type ComponentType } from "react";
import type { FacilitiesMethods, FacilitiesState } from "./Facilities.types";
import { FacilitiesReducer } from "./Facilities.reducer";
import FacilitiesService from "../../../Services/OwnerServices/Facilities.service";


export const initialState: FacilitiesState = {
    isLoading: false,
    error: '',
    facilitiesData: [],
    page: 0,
    totalPages: 0,
    pageSize: 5,
}

export const FacilitiesContext = createContext<(FacilitiesState & FacilitiesMethods | null)>(null);

export const withFacilitiesProvider = <T extends {}>(Component: ComponentType) => {

    return (props: T) => {

        const [state, dispatch] = useReducer(FacilitiesReducer, initialState);

        const displayFacilities = async (page=state.page, size=state.pageSize) => {
            try {
                const faciltiesList = await FacilitiesService.getFacilities(page,size);
                dispatch({ type: 'DISPLAY_FACILITIES', 
                    payload:{
                        data:faciltiesList.content ,
                        page:faciltiesList.page.number, 
                        totalPages:faciltiesList.page.totalPages, 
                        pageSize:faciltiesList.page.size 
            }})
            } catch (e) {
                throw { message: e }
            }
        }


        const addFacilities = async()=>{
            try{
                const facilitiesList = await FacilitiesService.postFacilities(data=state)
            }
        }

        return (

            <FacilitiesContext.Provider value={{ ...state, displayFacilities }}>
                <Component {...props} />
            </FacilitiesContext.Provider>
        )
    }
}