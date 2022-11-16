import './App.css';
import 'milligram';
import SearchBar from './components/SearchBar';
import {useState} from 'react'
import Statistics from './components/Statistics';
import Pokedex from './components/Pokedex';



function App() {
  
  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)
  const [pokemonData, setPokemonData] = useState({})

  return (
    <div className='App'>
      <SearchBar title={"Cerca un pokemon"} setStatus={setStatus} setError={setError} pokemonData={pokemonData} setPokemonData={setPokemonData}/>
      <Statistics status={status} pokemonData={pokemonData} error={error}/>
      <Pokedex pokemonData={pokemonData} setPokemonData={setPokemonData} setStatus={setStatus} status={status}/>
    </div>  
  );
}

export default App;
