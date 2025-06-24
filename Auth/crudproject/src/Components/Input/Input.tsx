import styles from "./Input.module.scss" 
import type { InputProps } from "./Input.types.ts" 
 
const Input = ({className, ...inputProps}: InputProps) => { 
    return (

        <div className={styles.InputContainer}>
            <input {...inputProps} className={`${styles.Input} ${className}`} />
        </div>
    ); 
}; 
 
export default Input ;
