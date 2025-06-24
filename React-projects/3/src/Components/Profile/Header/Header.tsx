import { Component } from "react";
import styles from "./Header.module.scss";
const Header=()=>{
    return (
        <header className={styles.header}>
            <h1>Header</h1>
        </header>
    )
}

export default Header;


export class HeaderComponent extends Component{
    render(){
        return (
            <header className={styles.header}>
            <h1>Header</h1>
        </header>
        )
    }
}