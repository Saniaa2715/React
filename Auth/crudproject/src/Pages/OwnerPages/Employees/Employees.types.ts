

export interface EmployeesData {
    email:string,
    name:string,
    role:string,
    facilityName:string,
    workplaceName:string,
    toolCribName:string,
    workstationCode:string,
    workplaces:string[]
} 

export interface EmployeesState{
    employeesData:EmployeesData[];
    currentPage: number;
    totalPages: number;
    pageSize: number;
}

export type EmployeesAction={
    type:'DISPLAY EMPLOYEES',
    payload:EmployeesData[],
    totalPages:number;
}|{
    type:'SET PAGE',
    payload:number
} | {
    type:'SET PAGE SIZE',
    payload:number;
}

export type EmployeeMethods ={
    displayEmployees:(page: number, size: number)=>void;
    setPage: (page: number) => void;
    setPageSize: (size: number) => void;
}


