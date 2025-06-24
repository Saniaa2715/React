import styles from './Main.module.scss';
import Profile from '../Profile';
import { Component } from 'react';
const Main=()=>{
    return(
        <>
      <main className={styles.main}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolore!</p>
        <Profile/>
      </main>
      </>
    )
}

export default Main;


// Class Based 
export class MainComponent extends Component {
  render(){
    return(
      <>
      <main className={styles.main}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolore!</p>
        <Profile/>
      </main>
      </>
    )
  }
}