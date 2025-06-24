import styles from "./Owner.module.scss"
// import type { OwnerProps } from "./Owner.types.ts"
import Header from "../../Components/Header/Header.tsx";
import SideNav from "../../Components/SideNav/SideNav.tsx";
import { Outlet } from "react-router";

const Owner = () => {

    const OwnerLinks = [
        { label: 'Dashboard', path: '' },
        { label: 'Facilities', path: 'facilities' },
        {label:'Facility Managers', path:'facilitymanagers'},
        { label: 'Tools', path: 'tools' },
        { label: 'Work Spaces', path: 'workspaces' },
        { label: 'Employees', path: 'employees' }
    ]

    return (

        <div className={styles.OwnerContainer}>
            <Header title="Owner" />

            <main className={styles.Main}>

                <div className={styles.LeftContentSide}>
                    <SideNav Links={OwnerLinks} />
                </div>


                <div className={styles.RightContentSide}>
                        <Outlet/>         
                </div>

            </main>
        </div>

    );
};

export default Owner 
