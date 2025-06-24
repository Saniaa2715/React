import styles from "./Header.module.scss" 
import type { HeaderProps } from "./Header.types.ts" 
 
const Header = ({}: HeaderProps) => { 
    return (
    <header className={styles.header}>
        <h1>Header</h1>
    </header> 
    )
}; 
 
export default Header 
