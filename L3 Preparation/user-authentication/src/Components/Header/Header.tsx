import styles from "./Header.module.scss" 
import type { HeaderProps } from "./Header.types.ts" 
import userProfile from '../../assets/userProfile.png';
// import { useNavigate } from "react-router-dom";

const Header = ({title}: HeaderProps) => { 
    // const navigate=useNavigate();

    return (
        <header className={styles.Header}>
            <h1>Welcome {title}</h1>

            <img src={userProfile} alt="" />
        </header>
    ); 
}; 
 
export default Header 
