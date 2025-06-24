import styles from "./One.module.scss" 
import type { OneProps } from "./One.types.ts" 
 
const One = ({onClick}: OneProps) => { 
    return (
        <button onClick={onClick}>Heyy</button>
    ); 
}; 
 
export default One 
