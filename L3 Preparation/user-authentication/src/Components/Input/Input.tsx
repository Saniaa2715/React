import styles from "./Input.module.scss" 
import type { InputProps } from "./Input.types.ts" 
 
const Input = ({className, ...inputProps}: InputProps) => { 
    return (
        <input className={`${styles.Input} ${className}`} {...inputProps}/>
    ); 
}; 
 
export default Input 
