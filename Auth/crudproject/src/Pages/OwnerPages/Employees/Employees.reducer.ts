import type { EmployeesAction, EmployeesState } from "./Employees.types";


export const EmployeeReducer=(state:EmployeesState, action:EmployeesAction)=>{
    switch(action.type){
        case 'DISPLAY EMPLOYEES':
            return {...state, employeesData:action.payload,totalPages: action.payload}

        case 'SET PAGE':
            return { ...state, currentPage: action.payload };

        case 'SET PAGE SIZE':
            return { ...state, pageSize: action.payload };
    }
}