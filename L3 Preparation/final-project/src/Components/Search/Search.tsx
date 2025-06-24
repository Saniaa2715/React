import Button from "../Button/Button.tsx";
import Input from "../Input/Input.tsx";
import styles from "./Search.module.scss" 
import type { SearchProps } from "./Search.types.ts" 
 
const Search = ({}: SearchProps) => { 
    return (

        <div className={styles.SearchContainer}>

            <Input type="search"/>
            <Button>Search</Button>

        </div>
    ); 
}; 
 
export default Search 
