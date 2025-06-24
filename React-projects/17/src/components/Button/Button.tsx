import { ButtonProps } from "./Button.types";
import styles from './Button.module.scss';

export const Button =({props}:ButtonProps)=>{
    return(
        <button className={styles.btn} {...props}></button>
    )
}