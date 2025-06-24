import styles from './Footer.module.scss';

export const Footer =()=>{
    return(
        <footer className={styles.footer}>
            <div className="leftSide">
                <p> Copyright c.Made With Love </p>
            </div>

            <div className="rightSide">
                <button className={styles.btn}>Btn1</button>
                <button className={styles.btn}>Btn2</button>
                <button className={styles.btn}>Btn3</button>
                <button className={styles.btn}>Btn4</button>
                <button className={styles.btn}>Btn5</button>
            </div>
        </footer>
    )
}