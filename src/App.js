import './App.css';
import 'milligram';
import SearchBar from './components/SearchBar';
import {useState} from 'react'



function App() {
  

  return (
    <div className='App'>
      <SearchBar title={"Cerca un pokemon"}/>

    </div>  
  );
}

export default App;
