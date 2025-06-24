import { useReducer, type FormEvent } from "react";
import styles from "./Login.module.scss"
// import type { LoginProps } from "./Login.types.ts" 
import { reducer } from "./Login.state";
import { instance } from "../../services";

const Login = () => {

    const formData = {
        username: '',
        password: ''
    }

    const [state, updateState] = useReducer(reducer, formData);

    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();

        try {
            const { data: res } = await instance.post('/auth/login', (formData),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.getItem('token'),
                        "ngrok-skip-browser-warning": "69420",
                    }
                }
            )
            
            localStorage.setItem('token',res.data.token);

            updateState({})
        }
        catch (e) {
            console.log(e);
        }
    }



    return (
        <main className={styles.main}>

            <form className={styles.form} onSubmit={handleSubmit}>

                <input type="username" placeholder="Username" value={state.username} onChange={() => updateState({})} />
                <input type="password" placeholder="Password" value={state.password} onChange={() => updateState({})} />
                <button type="submit" className={styles.btn}>Login</button>
            </form>
        </main>
    );
};

export default Login 
