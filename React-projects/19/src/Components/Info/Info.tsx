import styles from './Info.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const Info=()=>{

    const [info,setInfo]=useState([]);

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
                setInfo(res);
                // console.log(user);
            } catch (e) {
                console.log(e);
            }
        }
        fetchUsers();
    }, [])


    return(
        <>
           <section className={styles.infoContainer}>
               {info.map(person=>(
                <div key={person.id} className={styles.infoContent}>
                         <h2>{`Username: ${person.username}`}</h2>
                         <h3>{`Person: ${person.email}`}</h3>
                         <h4>{`Website: ${person.website}`}</h4>
                         <p>{`Address: ${person.address.street}`}</p>
                         <p>{`Company: ${person.company.name}`}</p>
                </div>
                 
               ))}
           </section>
        </>
    )
}