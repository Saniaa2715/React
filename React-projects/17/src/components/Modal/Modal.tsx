import { ModalProps } from "./Modal.types"
import styles from './Modal.module.scss';

export const Modal =({children}:ModalProps)=>{
    return(
        <div className={styles.modalContainer}>
            {children}
        </div>
    )
}