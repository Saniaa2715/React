import type{  SidenavProps } from './Sidenav.types.ts';
import Button from "../Button/Button.tsx";
import styles from "./Sidenav.module.scss" 
import { useNavigate } from 'react-router-dom';
// import { Links } from 'react-router-dom';
// import type {SidenavProps } from "./Sidenav.types.ts" 
 
const Sidenav = ({Links}:SidenavProps) => { 

    const navigate=useNavigate();

    return (

        <div className={styles.SidenavContainer}>
            {Links.map((lnk)=>(
                <div className={styles.SidenavList}>
                    <Button onClick={()=>navigate(`${lnk.path}`)} primary>{lnk.label}</Button>
                </div>
            ))}
        </div>
    ); 
}; 
 
export default Sidenav 
