import styles from './Main.module.scss';
// import { Pokemon, pokemons } from '../../../data';

export const Main = () => {


    // pokemons.forEach((pokemon,index)=>{
    //     const container=document.createElement('div') as HTMLDivElement;
    //     container.setAttribute('class', 'container');
        

    //     const item = document.createElement('div');
    //     item.setAttribute('class', 'item');
    //     item.innerText=pokemon.name;

    // })
    // const container=document.querySelector('ccontainer') as HTMLDivElement;
    // console.log(container)

    // const allToCaught=()=>{
    //     const caughtPokemon=document.createElement('div');
    //     caughtPokemon.setAttribute('class', 'item');

    //     const caughtBtn=document.createElement('button');
    //     caughtBtn.setAttribute('class', 'btn');
    //     caughtBtn.innerText="Previous";
    //     caughtPokemon.appendChild(caughtBtn);

    //     const caughtName=document.createElement('h3');
    //     caughtName.innerText="Name";
    //     caughtPokemon.appendChild(caughtName);

    //     container.appendChild(caughtPokemon)
    // }

    return (

       
        <main className={styles.main} >
            <div className={styles.acontainer}>
                <h2>All Pokemon</h2>


            
            pokemons.forEach((pokemon:Pokemon,index:number)=>{
                <div className={styles.item} key={index}>
                    <h3>{pokemon.name}</h3>
                    <button className={styles.btn} /*onClick={allToCaught}*/>Next</button>
                </div>
})

            </div>

            <div className={styles.ccontainer}>
                <h2>Caught Pokemon</h2>
                {/* <div className={styles.item}>

                </div> */}
            </div>
        </main>
    
    )
}