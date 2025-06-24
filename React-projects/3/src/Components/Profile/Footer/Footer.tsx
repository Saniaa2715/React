import { Component } from 'react';
import styles from './Footer.module.scss'

const Footer=()=>{
    return (
        <footer className={styles.footer}>
            <p>Footer</p>
        </footer>
    )
}

export default Footer;

export class FooterComponent extends Component{
    render(){
        return (
            <footer className={styles.footer}>
                <p>Footer</p>
            </footer>
        )
    }
}