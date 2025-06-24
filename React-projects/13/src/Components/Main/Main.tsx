import styles from './Main.module.scss';

export const Main=()=>{
    const caught = pokemons.filter(p => p.isCaught);
    const uncaught = pokemons.filter(p => !p.isCaught);
    return (
        <main className={styles.main}>


        </main>
    )
}