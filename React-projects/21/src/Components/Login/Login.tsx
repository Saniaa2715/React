import styles from "./Login.module.scss"
// import type { LoginProps } from "./Login.types.ts"
import {  useNavigate } from "react-router";
// import router from '../../router';
import { useState } from "react";
import { data } from '../data';
// import { useNavigate } from "react-router";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    // console.log(data);

    const handleSubmit = (e:any) => {

        e.preventDefault();

        const user=data.find(u=>u.username===username && u.password===password)
        if(!user) return 

        navigate(user.role)
        // if (username === username && password === password) {
        //     navigate('/admin')
        // }

        // else {
        //     navigate('/user')
        // }
    }



    return (
        <main className={styles.main}>

            <section className={styles.loginContainer}>

                <form className={styles.form} onClick={handleSubmit}>
                    <h1>Login</h1>

                    <div className={styles.formGroup}>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className={styles.btn}>Login</button>
                </form>
            </section>
        </main>
    );
};

export default Login 
