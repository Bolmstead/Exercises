import pokecard from './pokecard'
import defaultPokemon from './defaultPokemon'
import './App.css';

function App() {
  return (
    <div>
      {defaultPokemon.map(i=> (
        <div>
          <h4>i.name</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
