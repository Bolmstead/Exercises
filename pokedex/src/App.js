import PokeCard from './PokeCard'
import defaultPokemon from './defaultPokemon'
import './App.css';
import './Pokedex.css';

function App() {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-cards">
        {defaultPokemon.map(i=> (
          <PokeCard
              name={i.name}
              id={i.id}
              type={i.type}
              exp={i.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
