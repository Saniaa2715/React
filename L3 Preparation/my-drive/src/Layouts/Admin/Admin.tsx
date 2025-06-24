import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header.tsx";
import styles from "./Admin.module.scss" 
import Sidenav from "../../Components/Sidenav/Sidenav.tsx";
import Logout from "../../Components/Logout/Logout.tsx";
// import type { AdminProps } from "./Admin.types.ts" 
 
const Admin = () => { 

    const adminLinks=[
        {label:'Items', path:'items'},
        {label:'Distributors', path:'distributors'}
    ]

    return (
         <div className={styles.AdminPage}>

            <Header title="Admin"/>


            <div className={styles.Main}>

                <div className={styles.LeftSide}>
                     
                     <Sidenav Links={adminLinks}/>

                     <Logout/>
                </div>

                <div className={styles.RightSide}>
                    <Outlet/>
                </div>
            </div>
         </div>
    ); 
}; 
 
export default Admin 
