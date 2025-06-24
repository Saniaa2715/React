export interface ToolsData {
    id?:number,
    name?:string,
    price?:number;
    fineAmount?:number,
    category?:'NORMAL' | 'SPECIAL',
    isPerishable?:boolean;
    returnPeriod?:number;
    toolImageUrl?:string;
} 

export interface ToolsState {
    toolsDataList:ToolsData[],
    totalPages:number,
    // size:number,
    // page:number;
    // totalElements:number,
    // totalPages:number,

    addModal:boolean,
    editModal:boolean,
    delModal:boolean
}


export type ToolsAction ={
    type:'DISPLAY TOOLS',
    payload:{
        content:ToolsData[],
        page:{
            totalPages:number
        }
    }
} | {
    type:'ADD MODAL'
} | {
    type:'EDIT MODAL'
} | {
    type:'DELETE MODAL'
}



export interface ToolsMethods{
     getToolsData:(param :URLSearchParams)=>void;
    //  postToolsData:()=>void;
    //  patchToolsData:()=>void;
    //  deleteToolsData:()=>void;

    // getToolsData:()=>void;
     handleAddModal:()=>void;
     handleEditModal:()=>void;
     handleDelModal:()=>void;
}

//One thing is to learn about writing types that I have figured is that 
//First the type of data we are working on (request)
//Second the response we get from backend
//We write for state, action , methods 
