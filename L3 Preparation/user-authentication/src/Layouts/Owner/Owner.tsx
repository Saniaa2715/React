import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header.tsx";
import Logout from "../../Components/Logout/Logout.tsx";
import Sidenav from "../../Components/Sidenav/Sidenav.tsx";
// import Logout from "../../Components/Logout/Logout.tsx";
import styles from "./Owner.module.scss" 
// import type { OwnerProps } from "./Owner.types.ts" 
 
const Owner = () => { 

    const ownerLinks=[
        { label:'Facilities', path:'facilities'},
        {label:'Tools', path:'tools'},
        { label:'Facility Managers' , path:'facilitymanagers'}
    ]
    return (

        <div className={styles.OwnerPage}>

            <Header title="Owner"/>

            <div className={styles.Main}>

                <div className={styles.LeftSide}>
                    <Sidenav Links={ownerLinks}/>



                    <Logout/>
                </div>
                <div className={styles.RightSide}>
                    <Outlet/>
                </div>
            </div>

            {/* <Logout/> */}
        </div>
    ); 
}; 
 
export default Owner 
