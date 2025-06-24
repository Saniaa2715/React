import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import styles from "./SignUp.module.scss"
// import type { SignUpProps } from "./SignUp.types.ts" 

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.SignUpPage}>
            <div className={styles.SignUpContainer}>
                <form className={`${styles.Form} ${styles.SignUpForm} `}>
                    <h1>Sign Up</h1>



                    <div className={styles.InputGroup}>
                        <label htmlFor="">Email</label>
                        <Input type="email" placeholder="Enter your Email" />
                    </div>

                    <div className={styles.InputGroup}>
                        <label htmlFor="">Password</label>
                        <Input type="password" placeholder="Enter your Password" />
                    </div>

                    <div className={styles.InputGroup}>
                        <label htmlFor="">Confirm Password</label>
                        <Input type="password" placeholder="Enter your Password again" />
                    </div>

                    <Button type="submit" primary>Sign Up</Button>

                    <div className={styles.CheckLogin}>
                        <p>Already have an account?</p>
                        <a href="" onClick={() => navigate('/')}>Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp 
