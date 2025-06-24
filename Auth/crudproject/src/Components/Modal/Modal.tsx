import styles from "./Modal.module.scss"
import type { ModalProps } from "./Modal.types.ts"
import Button from "../Button/Button.tsx";
import crossIcon from '../../assets/crossIcon.png';

const Modal = ({ title,isOpen, onClose, children }: ModalProps) => {

    if (!isOpen) {
        return null;
    }
    return (
        <div className={styles.ModalContainer}>
            <div className={styles.ModalContent}>



                <header className={styles.Header}>
                    <h2>{title}</h2>
                </header>

                <main className={styles.Main}>
                    {children}
                </main>


                <footer className={styles.Footer}>
                    {/* <Button onClick={onConfirm}>Confirm</Button> */}
                    <Button onClick={onClose} className={styles.btn}><img src={crossIcon} alt="" /></Button>
                </footer>

            </div>
        </div>
    );
};

export default Modal 
