import { createContext,  useReducer, type ComponentType } from "react";
import type {  FacilitiesData, FacilitiesMethods, FacilitiesState } from "./Facilities.types";
import { facilitiesReducer } from "./Facilities.reducer";
import FacilitiesService from "../../../Services/OwnerServices/Facilities.service";
// import { initialState } from "../../Login/Login.state";


//For any useContext we will first need to
// 1) Create Context (that further components can use)
// 2) Context provider 
// 3) useContext to use that context

export const initialState: FacilitiesState = {
    facilitiesData: [],
    totalPages:1,
    addModal:false,
    editModal:false,
    delModal:false
}

export const FacilitiesContext = createContext<(FacilitiesState & FacilitiesMethods) | null>(null);

export const withFacilityProvider = <T extends {}>(Component: ComponentType<T>) => {

    return (props: T)=>{

        const [state, dispatch] = useReducer(facilitiesReducer, initialState);


        const displayFacilities = async() => {
            try {
                const facilitiesData = await FacilitiesService.getFacilities();
                dispatch({ type: 'DISPLAY FACILITIES', payload: facilitiesData.content })
            } catch (e) {
                throw { message: e }
            }
        }

        const newFacilities=async(data:FacilitiesData)=>{
            try{
                const newFacilitiesList= await FacilitiesService.addFacilities(data);
                dispatch({type:'ADD FACILITIES', payload:newFacilitiesList})
                handleAddModal()
                // dispatch({type:'ADD MODAL'})
            }catch(e){
                throw {message:e}
            }
        }

        const updateFacilities=async(id:number, data:FacilitiesData)=>{
            try{
                const updatedFacilitiesList=await FacilitiesService.editFacilities(id,data);
                dispatch({type:'EDIT FACILITIES', payload:updatedFacilitiesList})
                // dispatch({type:'EDIT MODAL'})
                handleEditModal()
            }catch(e){
                throw {message:e}
            }
        }

        const removeFacilities=async(id:number)=>{
            try{
                const changedFacilitiesList=await FacilitiesService.deleteFacilities(id);
                dispatch({type:'DELETE FACILITIES', payload:changedFacilitiesList})
                // dispatch({type:'DELETE MODAL'})
                handleDelModal();
            }catch(e){
                throw {message:e}
            }
        }

        const handleAddModal=()=>{
            dispatch({type:'ADD MODAL'})
        }

        const handleEditModal=()=>{
            dispatch({type:'EDIT MODAL'})
        }

        const handleDelModal=()=>{
            dispatch({type:'DELETE MODAL'})
        }

        return (
            <FacilitiesContext.Provider value={{...state, displayFacilities,newFacilities, updateFacilities,removeFacilities,handleAddModal, handleEditModal, handleDelModal }}>
                <Component {...props}/>
            </FacilitiesContext.Provider>
        )


    }
}


// when we used const {facilitiesData} = state; (works but use useContext) 
// //Reminder to a useContext here because now that the there is one components who needs this state but 
    // when many are present then it poses a problem , because for one thing entire thing re-renders
    // so we use a useContext