import styles from './Admin.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Admin = () => {

    const [users, setUsers] = useState([]);

    const BASE_URL = axios.create({
        baseURL: 'https://2a5b-103-121-153-150.ngrok-free.app'
    });

    useEffect(()=>{
        const fetchUsers=async()=>{
            const response = await axios.get(`${BASE_URL}/users`);
            setUsers(response.data);
        };

        fetchUsers();
    });

    // const fetchData = async () => {
    //     try {
    //         const res = await BASE_URL.get('/user',{
    //             headers: {
    //                 // 'Authorization': localStorage.getItem("token"),
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `${localStorage.getItem("token")}`,
    //                 "ngrok-skip-browser-warning": "69420"
    //             }
    //         })
    //         // setUsers(res.data);
    //         console.log(res);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // fetchData()

    const handleEdit=(id)=>{

    }

    const handleDelete=async(id)=>{
        await axios.delete(`${BASE_URL}/users/${id}`);
        setUsers(users.filter(user=>user.id!==id));
    }



    return (
        <>

            <header className={styles.header}>
                {/* <label htmlFor="search">Search</label> */}
                <input type="search" />
                <button className={styles.btn}>Search</button>
            </header>


            <main className={styles.main}>
                <section className={styles.userData}>

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>

                        </thead>

                        <tbody>


                            {
                                users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td className={styles.action}>
                                            <button className={styles.btn} onClick={handleEdit(user.id)}>Edit</button>
                                            <button className={styles.btn} onClick={handleDelete(user.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                </section>
            </main>



        </>
    )
}