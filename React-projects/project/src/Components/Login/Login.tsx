import styles from './Login.module.scss';
// import { Link } from "react-router";
import { useNavigate } from "react-router";
// import { Credentials } from './Login.types';
import axios from 'axios';
import { useState } from 'react';

export const Login = () => {

    const BASE_URL = axios.create({
        baseURL: 'https://cb65-103-176-134-214.ngrok-free.app'
      });

    const navigate=useNavigate();

    const[username, setUsername]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmitLogin=async(e:any)=>{

        e.preventDefault();

        const form = e.target;

        const user=form[0];//This the value user is giving
        console.log(user);

        const pass=form[1];//This is the password user is giving
        console.log(pass);



        try{
            const res=await BASE_URL.post('/auth/login',{
                username: username,
                password: password,
            },{
                headers: {
                    'Content-Type': 'application/json'
                  }
            });
                    
        // if(user===username && pass===password){
        //     navigate('/admin');
        // }
        // else if(user==='' || pass ===''){
        //     alert('No Blankkk');
        // }
        // else{
        //     navigate('/userpage')
        // }
            
        if(res.data.role==='admin'){
            navigate('/admin')
        }
        else{
            navigate('/userpage')
        }
        
            // console.log(username);
            // console.log(password);
            console.log(res);
        }catch(error){
            console.log(error)
        }

        // console.log("heyyyyy");
        
        // if(user===username && pass===password){
        //     navigate('/admin');
        // }
        // else if(user==='' || pass ===''){
        //     alert('No Blankkk');
        // }
        // else{
        //     navigate('/userpage')
        // }
    }

    // const BASE_URL='https://cb65-103-176-134-214.ngrok-free.app/auth/login';

    return (
        <>
            <main className={styles.main}>
                <section className={styles.loginContainer}>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmitLogin} className={styles.form} >

                        <div className="formGroup">
                            <label htmlFor="username"></label>
                            <input type="text" placeholder='Username' id='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="password"></label>
                            <input type="password" placeholder='Password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>

                        {/* <div className="formGroup"> */}
                            <button type="submit" className={styles.btn} /*onClick={handleSubmitLogin}*/ >Login</button>
                        {/* </div> */}
                    </form>

                </section>
            </main>

        </>

    )
}


   
    // const[isLogin, setIsLogin]=useState(false);

    // const handleLogin=()=>{
    //     setIsLogin(!isLogin);
    // }
    
    // const [credentials, setCredentials]=useState[{username:'', password:''}]

    

    // const handleLogin=()=>{
    //     alert('Login Succesful!!')
    // }

    // const handleLogin=()=>{

    // }
        // const handleSubmit=async(e:any)=>{
    //     e.preventdefault();
    //     console.log('hey')

    //     if(username==='Aniruddha' && password==='ani@123'){
    //          console.log(username, password)
    //     }
    //     else{
    //         alert('Invalid Credentials')
    //     }

    //     try {
    //         const res=await axios.get(BASE_URL);
    //         console.log(res);
    //       } catch (e) {
    //         console.error(e);
    //       }

    // }

    

    // const handleSubmit=(e:any)=>{
    //     e.preventDefault();
    //     const {name,value}=e.target;
    //     setCredentials(prev=>({...prev, [name]:value}))
    // }
