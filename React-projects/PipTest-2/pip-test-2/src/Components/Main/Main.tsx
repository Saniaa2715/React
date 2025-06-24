import axios from 'axios';

import styles from './Main.module.scss';
import { Header } from '../Header/Header';
// import { UserProps } from '../data';
import { UserData } from '../data';
import { useState } from 'react';

export const Main = () => {



    const [userData, setUserData] = useState(UserData);

    // const axios = require('axios').default;
    // async function getUser() {
    //     try {
    //       const response = await axios.get('url to be taken by behla');
    //       console.log(response);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }

    // Moving the item from All Section to Maybe Section
    function fromAlltoMaybe() {

        // setUserData([...userData])
    }

    // Moving the item from All Section to Invited Section
    function fromAlltoInvited() {

    }

    // Moving the item from Maybe Section to All Section
    function fromMaybetoAll() {

    }

    // Moving the item from Maybe Section to Invited Section
    function fromAllMaybeToInvited() {

    }

    // Moving the item from Invited Section to All Section
    function fromInvitedToAll() {

    }

    // Moving the item from Invited Section to Maybe Section
    function fromInvitedToMaybe() {

    }

    return (
        <>
            <Header />
            <main className={styles.Main}>

                <section className={styles.all}>
                    <h2>All</h2>

                    {userData.map(user => {
                        return (
                            <div className={styles.dataItem}>
                                <h3>{user.name}</h3>
                                <div className={styles.btnList}>
                                    <button className={styles.btn} onClick={fromAlltoMaybe}>{user.Status}</button>
                                    <button className={styles.btn} onClick={fromAlltoInvited}>Invited</button>
                                </div>
                            </div>
                        )
                    })}

                </section>

                <section className={styles.maybe}>
                    <h2>Maybe</h2>

                    <div className={styles.dataItem}>
                        <h3>Name</h3>
                        <div className={styles.btnList}>
                            <button className={styles.btn} onClick={fromMaybetoAll}>All</button>
                            <button className={styles.btn} onClick={fromAllMaybeToInvited}>Invited</button>
                        </div>
                    </div>
                </section>

                <section className={styles.invited}>
                    <h2>Invited</h2>

                    <div className={styles.dataItem}>
                        <h3>Name</h3>
                        <div className={styles.btnList}>
                            <button className={styles.btn} onClick={fromInvitedToAll}>All</button>
                            <button className={styles.btn} onClick={fromInvitedToMaybe}>Maybe</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}