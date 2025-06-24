import { createContext, useReducer, type ComponentType } from "react";
import type { EmployeeMethods, EmployeesState } from "./Employees.types";
import { EmployeeReducer } from "./Employees.reducer";
import EmployeesService from "../../../Services/OwnerServices/Employees.service";
import { email } from "zod/v4";



const initialState: EmployeesState = {
    employeesData: [],
    currentPage: 0,
    totalPages: 1,
    pageSize: 5,
};

export const EmployeesContext = createContext<(EmployeesState & EmployeeMethods | null)>(null)

export const withEmployeesProvider = <T extends {}>(Component: ComponentType<T>) => {
    return (props: T) => {

        const [state, dispatch] = useReducer(EmployeeReducer, initialState);

        const displayEmployees = async (page = state.currentPage, size = state.pageSize) => {
            try {
                const employeesList = await EmployeesService.getAllEmployees();
                dispatch({ type: 'DISPLAY EMPLOYEES', payload: employeesList.content, totalPages: employeesList.totalPages })
            } catch (e) {
                throw { message: e };
            }
        }

        const setPage = (page: number) => {
            dispatch({ type: 'SET PAGE', payload: page });
        };

        const setPageSize = (size: number) => {
            dispatch({ type: 'SET PAGE SIZE', payload: size });
        };


        return (
            <EmployeesContext.Provider value={{ ...state, displayEmployees,setPage,setPageSize }}>
                <Component {...props} />
            </EmployeesContext.Provider>
        )

    }
}