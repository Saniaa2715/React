import styles from './Header.module.scss';
import { useState } from 'react';
import { Add } from '../AddMember/Add';

export const Header =()=>{
    const [addMember, setMember]=useState(false);

    function handleAddMember(e:any){
        e.preventDefault();
        // console.log("Heyyyy");
        setMember(!addMember);
    }

    return(
        <header className={styles.Header}>
            <h1>Inviter</h1>

            <button className={styles.btn} onClick={handleAddMember}>Add</button>
            {addMember && <Add/>}
        </header>
    )
}