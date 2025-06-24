// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import styles from "./Login.module.scss"
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginForm } from "./Login.types";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { LoginContext, withLoginProvider } from "./Login.state";
// import type { LoginProps } from "./Login.types.ts" 

const Login = () => {

    const navigate = useNavigate();

    const{handleLogin}= useContext(LoginContext)!;

    const {register, formState, handleSubmit}= useForm<LoginForm>({
        resolver:zodResolver(LoginSchema)
    })



    return (
        <div className={styles.LoginPage}>
            <div className={styles.LoginContainer}>
                <form className={ `${styles.Form} ${styles.LoginForm} `} onSubmit={handleSubmit(handleLogin)}>
                    <h1>Login</h1>

                    <div className={styles.InputGroup}>
                        <label htmlFor="">Email</label>
                        <Input type="email" placeholder="Enter your Email" {...register("email")}/>
                        {formState.errors.email && <small className={styles.validation}>{formState.errors.email.message}</small>}
                    </div>

                    <div className={styles.InputGroup}>
                        <label htmlFor="">Password</label>
                        <Input type="password" placeholder="Enter your Password" {...register("password")}/>
                        {formState.errors.password && <small className={styles.validation}>{formState.errors.password.message}</small>}
                    </div>

                    <Button type="submit" primary>Login</Button>

                    <div className={styles.CheckSignUp}>
                        <p>Don't have an account?</p>
                        <a href="" onClick={()=>navigate('/signup')}>Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withLoginProvider(Login); 

