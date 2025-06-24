import { useNavigate } from "react-router";
import Button from "../../Components/Button/Button.tsx";
import Input from "../../Components/Input/Input.tsx";
import styles from "./Login.module.scss";
import { LoginSchema, type LoginForm, type LoginProps } from "./Login.types.ts";
import { useEffect, useReducer } from "react";
import { LoginReducer } from "./Login.reducer.tsx";
import { initialState } from "./Login.state.tsx";
import authService from "../../Services/auth.service.ts";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

const Login = ({ }: LoginProps) => {

    //using useReducer to do manage multiple states(email and password)

    const [{ isLoading, error }, dispatch] = useReducer(LoginReducer, initialState);

    const navigate = useNavigate()

    const { register, handleSubmit, formState } = useForm<LoginForm>({
        resolver: zodResolver(LoginSchema)
    })


    const handleLogin = async (data: LoginForm) => {
        console.log(data);

        try {
            dispatch({ type: 'LOGIN' })
            const response = await authService.Login(data);
            console.log(response?.data.jwtToken);
            toast.success('Login Successful');

            if (response) {
                localStorage.setItem('token', response.data.jwtToken);
                localStorage.setItem('role', response.data.role);
                // console.log(loggedInUser);
            }

            dispatch({ type: 'LOGIN_SUCCESSFUL' })
            navigate(`/${response.data.role}`);

        } catch (e: any) {
            // console.log(e);
            dispatch({ type: 'LOGIN_FAILED', error: e.message })
        }

    }

    useEffect(() => {
        if (error) toast.error(error);
    }, [error])


    useEffect(() => {
        // if (isLoading) return showLoader();

        // hideLoader();
    }, [isLoading])


    return (

        <main className={styles.Main}>

            <form className={styles.LoginContainer} onSubmit={handleSubmit(handleLogin)}>
                <h1>Login</h1>

                <Input type='email' placeholder="Email" {...register("email")} />
                {formState.errors.email && <small className={styles.validation}>{formState.errors.email.message}</small>}

                <Input type="password" placeholder="Password" {...register("password")} />
                {formState.errors.password && <small className={styles.validation}>{formState.errors.password.message}</small>}


                <Button >Login</Button>
            </form>


        </main>
    );
};

export default Login




