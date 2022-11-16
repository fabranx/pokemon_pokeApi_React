import { useMutation } from "@tanstack/react-query"
import {getPokemon} from '../api/pokeapi'
import { useState, useEffect, useMemo } from 'react'
import {statusEnum} from '../enums'

function SearchBar({title,setStatus, setPokemonData, setError}) {

  const [searchName, setSearchName] = useState('')

  const mutation = useMutation(() => getPokemon(searchName.toLocaleLowerCase()))

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if(searchName){
      mutation.mutate()
    }
  }

  const emptyobj = useMemo(() => {return {}}, [])

  useEffect(()=>{
    if(mutation.isLoading){
      setStatus(statusEnum.isLoading)
    }
    else if(mutation.isError){
      console.log(mutation.error)
      setStatus(statusEnum.isError)
      setError(mutation.error.message)
      setPokemonData(emptyobj)
      mutation.reset()
    }
    else if (mutation.isSuccess) {
      setStatus(statusEnum.isSuccess)
      setPokemonData(mutation.data)
      mutation.reset()
    }
  }, [mutation, setStatus, setPokemonData, setError, emptyobj])

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