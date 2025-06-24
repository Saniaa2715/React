import styles from './Friend.module.scss';
import { Person } from './Freind.types';
// import { friends } from '../../data';

export const Friend=({name, isFriend}:Person)=>{
    return(

            <section className={styles.instalite}>
            <div className={styles.page}>
              <div className={styles.container} >
                <h1>{name}</h1>
                <button onClick={toggleFriend} className={styles.btn}>
                  {isFriend?'Friend' : 'Not a Friend'}</button>
              </div>
              </div>
              </section>

    )
}