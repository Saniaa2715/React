import { useContext, useEffect } from "react";
import Pagination from "../../../Components/Pagination/Pagination.tsx";
import Search from "../../../Components/Search/Search.tsx";
import styles from "./Employees.module.scss"
import workerIcon from '../../../assets/manager.png';

import { EmployeesContext, withEmployeesProvider } from "./Employees.state.tsx";

const Employees = () => {

    const { displayEmployees, employeesData ,setPage,setPageSize} = useContext(EmployeesContext)!;

    useEffect(() => {
        displayEmployees(currentPage, pageSize)
    },[currentPage, pageSize])

    return (
        <div className={styles.EmployeesPage}>


            <div className={styles.EmployeesOperations}>

                <Search />

            </div>

            <div className={styles.EmployeesCardContainer}>

                {employeesData.map((emp) => (
                    <div className={styles.EmployeesCardContent}>
                        <img src={workerIcon} alt="" />
                        <h2>{`Name: ${emp.name}`}</h2>
                        <h3>{`Email: ${emp.email}`}</h3>
                        <h4>{`Role: ${emp.role}`}</h4>
                        <p>{`Facility Name: ${emp.facilityName}`}</p>
                        <p>{`Tool Crib Name: ${emp.toolCribName}`}</p>
                        <p></p>
                    </div>
                ))

                }
            </div>

            <div className={styles.EmployeesFooter}>
                <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setPage}
            />
            </div>

        </div>
    );
};

export default withEmployeesProvider(Employees)
