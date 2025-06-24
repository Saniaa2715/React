import styles from "./Five.module.scss" 
import Four from '../Four/Four.tsx'
import type { FiveProps } from "./Five.types.ts" 
 
const Five = ({onClick}: FiveProps) => { 
    return (
        <>
        {/* <h1>Heyy I am Five</h1> */}
        <Four onClick={onClick}/>
        </>

    ); 
}; 
 
export default Five 
