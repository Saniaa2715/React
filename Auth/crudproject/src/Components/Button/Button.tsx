import styles from "./Button.module.scss" 
import type { ButtonProps } from "./Button.types.ts" 
 
const Button = ({className,primary,secondary, ...buttonProps}: ButtonProps) => { 
    const classNames= primary?styles.PrimaryBtn:secondary?styles.SecondaryBtn: styles.DefaultBtn;

    return (
        
        <button {...buttonProps} className={`${classNames} ${className}`}></button>
    ); 
}; 
 
export default Button 
