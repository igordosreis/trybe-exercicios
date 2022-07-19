import './App.css';
import PokemonList from './components/PokemonList';
import Title from './components/Title';

function App() {
  return (
    // Caso eu queira criar uma div propria para ser estilizada ao inves de manipular a div root,
    // é só usar <div className="pokemonsListContainer"> logo abaixo, ao invés de um fragment
    <div className="pokemonsListContainer">
      <Title />
      <PokemonList />
    </div>
  );
}

export default App;
