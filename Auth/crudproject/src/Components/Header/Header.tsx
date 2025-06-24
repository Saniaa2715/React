import styles from "./Header.module.scss" 
import type { HeaderProps } from "./Header.types.ts" 
 
const Header = ({title}: HeaderProps) => { 
    return (
        <header className={styles.Header}>
            <h1>{`Welcome ${title}`}</h1>
        </header>
    ); 
}; 
 
export default Header 
