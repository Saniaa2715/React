import styles from "./Modal.module.scss"
import type { ModalProps } from "./Modal.types.ts"
import crossImg from '../../assets/cross.png';

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {

    if (!isOpen) {
        return null
    }

    return (

        <div className={styles.ModalContainer}>

            <div className={styles.ModalContent}>
                <h2>{title}</h2>

                <main className={styles.Main}>
                    {children}
                </main>

                <div className={styles.CloseBtn}>
                    <img src={crossImg} onClick={onClose}/>
                </div>
            </div>

        </div>
    );
};

export default Modal 
