import { useNavigate } from "react-router";
import Button from "../Button/Button.tsx";
import styles from "./SideNav.module.scss" 
import type { SideNavProps } from "./SideNav.types.ts" 
 
const SideNav = ({Links}: SideNavProps) => { 

    const navigate=useNavigate();

    return (
        <div className={styles.SideNavContainer}>
            {Links.map((link)=>(
                <Button onClick={()=>navigate(`${link.path}`)} secondary>{link.label}</Button>
            ))}
        </div>
    ); 
}; 
 
export default SideNav 
