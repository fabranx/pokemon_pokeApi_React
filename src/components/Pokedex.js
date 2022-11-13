import {useState, useEffect} from 'react'

function Pokedex({pokemonData, error, status, spriteEnum}){

  const [pokedex, setPokedex] = useState([])

  function addToPokedex(e){
    e.preventDefault()
    setPokedex(pokedex => [...pokedex, pokemonData])
  }
  
  function showAddToPokedexButton(){
    if(Object.keys(pokemonData).length > 0 && !pokedex.some(el => el.id === pokemonData.id)){
      return true
    }
    else{
      return false
    }
  }

  return (
    <>
      {console.log(pokedex)}
      {/* {console.log(pokemonData)}   */}
      {/* {console.log(pokedex.some(el => el.id === pokemonData.id))} */}
      {showAddToPokedexButton() ? 
        <button onClick={addToPokedex}>AGGIUNGILO AL POKEDEX</button> :
         null}
        
      <h3>Il tuo Pokedex</h3>
      <div className='row'>
        {pokedex.length > 0 && pokedex.map(pokemon => (
          <div key={pokemon.id} className="column">
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites[spriteEnum.front_default]}></img>
            <div className='row'>
              <button>MOSTRA</button>
            </div>
            <div className='row'>
              <button className='button-outline'>ELIMINA</button>
            </div>
          </div>
        ))}
      </div>
      
    </>
  )
}


export default Pokedex