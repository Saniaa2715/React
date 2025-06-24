import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.tsx";
import styles from "./Logout.module.scss" 
// import type { LogoutProps } from "./Logout.types.ts" 
 
const Logout = () => { 

    const navigate=useNavigate();

    const handleLogout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('token');
        navigate('/')
    }

    return (
        <div className={styles.Logout}>
            <Button onClick={handleLogout} secondary>Logout</Button>
        </div>
    ); 
}; 
 
export default Logout 
