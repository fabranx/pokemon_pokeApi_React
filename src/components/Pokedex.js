import {useState, useEffect} from "react"
import {statusEnum, spriteEnum} from "../enums"

function Pokedex({pokemonData, setPokemonData, setStatus, status}){

  const [pokedex, setPokedex] = useState(JSON.parse(localStorage.getItem('pokedex')) || [])

  useEffect(() => {
    localStorage.setItem('pokedex', JSON.stringify(pokedex))
  }, [pokedex])

  function addToPokedex(e){
    e.preventDefault()
    if(pokedex.length < 10){
      setPokedex(pokedex => [...pokedex, pokemonData])
      localStorage.setItem('pokedex', JSON.stringify(pokedex))
    }
    
    else{
      alert('Limite pokedex raggiunto \nNon è possibile aggiungere altri pokemon')
    }
  }
  
  function canAddPokemonToPokedex(){
    if(Object.keys(pokemonData).length > 0 && !pokedex.some(el => el.id === pokemonData.id)){
      return true
    }
    else{
      return false
    }
  }

  function showPokemon(pokemon){
    setStatus(statusEnum.isSuccess)
    setPokemonData(pokemon)
  }

  function deletePokemon(pokemon){
    setPokedex(pokedex => pokedex.filter(item => item.id !== pokemon.id))
  }

  return (
    <>

      {status === statusEnum.isLoading ? null : (
        <>
          {canAddPokemonToPokedex() ? 
            <button onClick={addToPokedex}>AGGIUNGILO AL POKEDEX</button> :
            null
          }

          <h3>Il tuo Pokedex ({pokedex.length} pokemon)</h3>
          <div className='row center overflow'>
            {pokedex.length > 0 && pokedex.map(pokemon => (
              <div key={pokemon.id} className="column">
                <p>{pokemon.name}</p>
                <img alt={pokemon.name} src={pokemon.sprites[spriteEnum.front_default]}></img>
                <div className='row'>
                  <div className='column center'>
                    <div>
                      <button onClick={() => showPokemon(pokemon)}>MOSTRA</button>
                    </div>
                    <div>
                      <button onClick={() => deletePokemon(pokemon)} className='button-outline'>ELIMINA</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )} 
    </>
  )
}


export default Pokedex