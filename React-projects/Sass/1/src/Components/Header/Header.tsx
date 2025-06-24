import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>

            <div>
                <h1>Calorie Boom</h1>
                <nav className={styles.nav}>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                </nav>
            </div>

            <div className="buttons">
                <button className={styles.loginBtn}>Login</button>
                <button className={styles.signupBtn}>Signup</button>
            </div>
        </header>
    )
}