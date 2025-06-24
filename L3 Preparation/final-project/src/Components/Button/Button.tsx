import styles from "./Button.module.scss" 
import type { ButtonProps } from "./Button.types.ts" 
 
const Button = ({className, ...buttonProps}: ButtonProps) => { 
    return (
        <button {...buttonProps} className={`${styles.btn} ${className}`}></button>
    ); 
}; 
 
export default Button 
