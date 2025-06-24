
export interface User{
    name:string,
    email:string
}

export interface DistributorsData {
    id?:number,
    isDeleted?:boolean,
    userId?:number,
    companyName?:string,
    points?:number,
    createdAt?:string,
    updatedAt?:string,
    user?:User[]
} 

export interface DistributorsState {
    distributorsData:DistributorsData[],
}

export type DistributorsAction ={
    type:'DISPLAY_DISTRIBUTORS'
    payload:DistributorsData[]
}

export interface DistributorsMethods {
    displayDistributors:()=>void;
}
