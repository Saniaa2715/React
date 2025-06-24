import styles from './User.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

export const User = () => {
    const [user, setUsers] = useState([])

    const navigate=useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {

            try {
                const { data: res } = await axios.get('https://jsonplaceholder.typicode.com/users');
                // res.json();
                console.log(res);
                console.log(res.data);
                // console.log(data.id);
                // console.log(res)
                // console.log(user);
                setUsers(res);
                // console.log(user);
            } catch (e) {
                console.log(e);
            }
        }
        fetchUsers();
    }, [])

    const handleInfo=()=>{
        navigate('/infopage')
    }
    return (
        <>
            <section className={styles.userContainer}>
                <ul className={styles.userList}>
                    {user.map((item: any) => (
                        <li key={item.id} className={styles.eachUser} onClick={handleInfo}>
                            <h1>{item.name}</h1>
                            {/* <p>{item.username}</p> */}
                        </li>
                    ))}
                </ul>


            </section>
        </>
    )
}