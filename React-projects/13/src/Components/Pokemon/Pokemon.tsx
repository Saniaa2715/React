import styles from './Pokemon.module.scss'
import { Pokemon } from '../../data';

export const PokemonCard({ pokemon, onClick }) {
    return (
      <div className="card">
        <span>{pokemon.name}</span>
        <button onClick={() => onClick(pokemon.id)}>
          {pokemon.isCaught ? 'Release' : 'Catch'}
        </button>
      </div>
    );
  }