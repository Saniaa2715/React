// export interface FacilitiesProps {} 


export interface FacilitiesData{
    id?:number,
    name?:string,
    address?:string,
    facilityManagerEmail?:string
}

export interface FacilitiesState{
    facilitiesData:FacilitiesData[],
    totalPages:number,
    addModal:boolean;
    editModal:boolean;
    delModal:boolean;
}

export type FacilitiesAction={
    type:'DISPLAY FACILITIES', 
    payload: 
    {
        content:FacilitiesData[],
    totalPages:number
    }
}|
{ type:'ADD FACILITIES', payload:FacilitiesData} |
{type :'EDIT FACILITIES', payload:FacilitiesData} |
{type:'DELETE FACILITIES' ,payload:number}|
{type:'ADD MODAL'} |
{type:'EDIT MODAL'} |
{type:'DELETE MODAL'}


export type FacilitiesMethods={
    displayFacilities:(params:URLSearchParams)=>void;
    newFacilities:(data:FacilitiesData)=>void;
    updateFacilities:(id:number,data:FacilitiesData)=>void;
    removeFacilities:(id:number)=>void;
    handleAddModal:()=>void;
    handleEditModal:()=>void;
    handleDelModal:()=>void;
}

