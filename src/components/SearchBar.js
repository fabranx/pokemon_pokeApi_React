import { useQuery,  useQueryClient, useMutation } from "@tanstack/react-query"
import {getPokemon} from '../api/pokeapi'
import { useState, useEffect } from 'react'


function SearchBar({title,setStatus, statusEnum, setPokemonData, setError}) {

  const [searchName, setSearchName] = useState('')


  // const {
  //   isLoading,
  //   isError,
  //   error,
  //   data: pokemon
  // } = useQuery({ queryKey: ['pokemon'], queryFn: () => getPokemon('bulbasaur'), enabled:false})

  const mutation = useMutation(() => getPokemon(searchName.toLocaleLowerCase()))


  const onSearchSubmit = (e) => {
    e.preventDefault()
    if(searchName){
      mutation.mutate()
    }
  }

  useEffect(()=>{
    if(mutation?.isLoading){
      setStatus(statusEnum.isLoading)
    }
    else if(mutation?.isError){
      setStatus(statusEnum.isError)
      setError(mutation.error.message)
    }
    else if (mutation.isSuccess) {
      setStatus(statusEnum.isSuccess)
      let pokemonObj = {
        name: mutation.data.name,
        weight: mutation.data.weight,
        height: mutation.data.height,
        sprites: mutation.data.sprites,
        stats: mutation.data.stats
      }
      setPokemonData(mutation.data)
    }
  }, [mutation, statusEnum, setStatus, setPokemonData, setError])



  return(
    <>
      <h2 htmlFor="nameField">{title}</h2>
      <form onSubmit={onSearchSubmit}>
        <input type="text" placeholder={"e.g. bulbasaur"} id="nameField" onChange={(e) => setSearchName(e.target.value)}></input>
        <button>Cerca</button>
      </form>
    </>
  )
  
}

export default SearchBar