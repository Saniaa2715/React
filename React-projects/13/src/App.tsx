import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { pokemonData} from "./data";
import { useState } from "react";

const App=()=>{
     
  //Using the usestate

  const [pokemons, setPokemons] = useState(pokemonData);

  const onClick = (id:number) => {
    const updatedList = pokemons.map(p =>
      p.id === id ? { ...p, isCaught: !p.isCaught } : p
    );
    setPokemons(updatedList);
  };

  return (
    <>
    <Header/>
    <Main pokemons={pokemons} onClick={onClick}/>
    </>
  )
}

export default App;