
import styles from './Display.module.scss';

const DisplayComponent=(props:any)=>{
   return (
    <div className={styles.DisplayDesign}>
        <h1>Name: {props.name}</h1>
        <h3>Age: {props.age}</h3>
        <p>Hungry?{props.isHungry?1:0}</p>
        <p>Has Travelled? {props.travel}</p>
        <p>Salary {props.salary}</p>
        <p>Hobbies: {props.hobbies}</p>
        <p>Developer: {props.track}</p>
    </div>
   )
}

export default DisplayComponent;