
import axios from 'axios';
import styles from './Login.module.scss';
import { useState } from 'react';
export const Login = ({handleLoginClick}:any) => {

        const [data, setData] = useState([]);
      
        const getData = async () => {
          try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setData(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        // Call fetchData on component mount
        useEffect(() => {
          getData();
        }, []);

        return(
        <>
        <section className={styles.loginContainer}>
            <h1>Login</h1>

            <div className={styles.loginData}>
                <form className={styles.formData}>

                    {/* <label htmlFor="username">Username</label> */}
                    <input type="text" id='username' placeholder='Username' name='username' />

                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" id='password' placeholder='Password' name='password' />

                    <button typeof='submit' className={styles.submitBtn} id='submitBtn' onClick={handleLoginClick}>Submit</button>
                </form>
            </div>
        </section>
        </>

    )
 
}