// import FacilityManagersService from "../../../Services/OwnerServices/FacilityManagers.service";
// import FacilityManagers from "../FacilityManagers/FacilityManagers.types";
import type { FacilityManagerAction, FacilityManagerState } from "./FacilityManagers.types";


export const facilityManagerReducer = (state: FacilityManagerState, action: FacilityManagerAction):FacilityManagerState => {

    switch (action.type) {

        case "DISPLAY FACILITY MANAGER":
            {
                // const facilityManagersList = FacilityManagersService.getFacilityManagers();
                return { ...state, facilityMan: action.data }
            }

        case "ADD FACILITY MANAGER":
            {
                //  const newFacilityManagerList = FacilityManagersService.addFacilityManagers(data);
                return { ...state, facilityMan: [...state.facilityMan, action.data] }
            }

        case "EDIT FACILITY MANAGER":
            {
                return { ...state, facilityMan: state.facilityMan.map((fm) => fm.id === action.data.id ? action.data : fm) }
            }

        case "DELETE FACILITY MANAGER":
            {
                return { ...state, facilityMan: state.facilityMan.filter((fm) => fm.id !== action.data) }
            }

        case "ADD MODAL":
            return { ...state, addModal: !state.addModal }

        case "EDIT MODAL":
            return { ...state, editModal: !state.editModal }

        case "DELETE MODAL":
            return { ...state, delModal: !state.delModal }
    }
}