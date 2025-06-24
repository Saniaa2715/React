export interface FacilityManagers {
    id?: number;
    name?: string;
    email?: string,
    createdAt?: string,
    facilityName?: string,
    facilityAddress?: string
}

export interface FacilityManagerFormInput{
    id: number | undefined;
    name:string,
    email:string
}

export interface FacilityManagerState {
    facilityMan: FacilityManagers[],
    addModal: boolean;
    editModal: boolean;
    delModal: boolean;
    currentManagerId:number|null;
}

export type FacilityManagerAction = {
    type: 'DISPLAY FACILITY MANAGER',
    data:FacilityManagers[]
} | {type:'ADD FACILITY MANAGER',  data:FacilityManagers} |
{type:'EDIT FACILITY MANAGER', data:FacilityManagers} |
{type:'DELETE FACILITY MANAGER' , data:number} |
{ type: 'ADD MODAL' } | 
{ type: 'EDIT MODAL' } |
{ type: 'DELETE MODAL' }


// export interface FacilityManagerMethods{
//     handleAdd:()=>void;
//     handleEdit:(id:number)=>void;
//     handleDelete:(id:number)=>void;
// }
