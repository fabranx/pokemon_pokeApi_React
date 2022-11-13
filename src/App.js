import './App.css';
import 'milligram';
import SearchBar from './components/SearchBar';
import {useState} from 'react'
import Statistics from './components/Statistics';
import Pokedex from './components/Pokedex';



function App() {
  
  const statusEnum = Object.freeze({'isLoading': 'isLoading', 'isError': 'isError', 'isSuccess': 'isSuccess'})
  const spriteEnum = Object.freeze({'front_default': 'front_default', 'front_shiny': 'front_shiny'})


  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)
  const [pokemonData, setPokemonData] = useState({})
  // const [pokedex, setPokedex] = useState([])

  return (
    <div className='App'>
      <SearchBar title={"Cerca un pokemon"} setStatus={setStatus} setError={setError} statusEnum={statusEnum} pokemonData={pokemonData} setPokemonData={setPokemonData}/>
      <Statistics status={status} statusEnum={statusEnum} pokemonData={pokemonData} error={error} spriteEnum={spriteEnum}/>
      <Pokedex pokemonData={pokemonData} error={error} status={status} spriteEnum={spriteEnum}/>
    </div>  
  );
}

export default App;
