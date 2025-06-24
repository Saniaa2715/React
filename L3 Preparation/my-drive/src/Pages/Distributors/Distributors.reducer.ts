import type { DistributorsAction, DistributorsState } from "./Distributors.types";



export const DistributorsReducer = (state: DistributorsState, action: DistributorsAction) => {

    switch (action.type) {

        case 'DISPLAY_DISTRIBUTORS':
            return { ...state, distributorsData: action.payload }

        default:
            return state
    }
}