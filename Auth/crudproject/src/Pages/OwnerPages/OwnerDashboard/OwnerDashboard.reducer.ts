import type { OwnerDashboardAction, OwnerDashboardState } from "./OwnerDashboard.types";


export const OwnerDashboardReducer = (state: OwnerDashboardState, action: OwnerDashboardAction) => {

    switch (action.type) {
        case 'DISPLAY DEMANDED TOOLS':
            return { ...state, demandedToolsData: action.payload }

        case 'DISPLAY BROKEN TOOLS':
            return { ...state, brokenToolsData: action.payload }

        case 'DISPLAY PRICED TOOLS':
            return { ...state, pricedToolsData: action.payload }
    }
}