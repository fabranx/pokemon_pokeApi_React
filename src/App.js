import './App.css';
import 'milligram';
import SearchBar from './components/SearchBar';
import {useState} from 'react'
import Statistics from './components/Statistics';



function App() {
  
  const statusEnum = Object.freeze({'isLoading': 'isLoading', 'isError': 'isError', 'isSuccess': 'isSuccess'})

  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)
  const [pokemonData, setPokemonData] = useState({})

  return (
    <div className='App'>
      <SearchBar title={"Cerca un pokemon"} setStatus={setStatus} setError={setError} statusEnum={statusEnum} setPokemonData={setPokemonData}/>
      <Statistics status={status} statusEnum={statusEnum} pokemonData={pokemonData} error={error}/>
    </div>  
  );
}

export default App;
