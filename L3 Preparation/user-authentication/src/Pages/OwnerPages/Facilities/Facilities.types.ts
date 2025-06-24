
export interface FacilitiesData {
    id: number,
    name: string,
    email: string,
    createdAt: string,
    facilityName: string,
    facilityAddress: string
}

export interface FacilitiesState {
    facilitiesData: FacilitiesData[],
    isLoading: boolean,
    error: string,

    page?: number,
    totalPages?: number,
    pageSize?: number
}

export type FacilitiesAction = {
    type: 'DISPLAY_FACILITIES',
    payload:
    {
        data: FacilitiesData[],
        page: number;
        totalPages: number;
        pageSize: number;
    }
} | {
    type: 'ADD_FACILITIES',
    payload: FacilitiesData
} | {
    type: 'UPDATE_FACILITIES',
    payload:
    {
        id: number,
        data: FacilitiesData
    }
} | {
    type: 'REMOVE_FACILITIES',
    id: number
}

export interface FacilitiesMethods {
    displayFacilities: (page?: number, size?: number) => void;
    addFacilities: (data: FacilitiesData) => void;
    updateFacilities: (id: number, data: FacilitiesData) => void;
    removeFacilities: (id: number) => void;
}

