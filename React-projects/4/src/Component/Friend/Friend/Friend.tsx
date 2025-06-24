import styles from './Friend.module.scss'

const Friend=({name,age}: any)=>{

    // console.log(obj);
    // const {name,age}=obj;
    return (
 
        <div className={styles.intro}>
        <p>{name}</p>
        <p>{age}</p>
        </div>
    
    )
    
}

export default Friend;