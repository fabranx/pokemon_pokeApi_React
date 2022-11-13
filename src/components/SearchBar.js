import { useQuery,  useQueryClient, useMutation } from "@tanstack/react-query"
import {getPokemon} from '../api/pokeapi'
import { useState, useEffect, useMemo, useCallback } from 'react'


function SearchBar({title,setStatus, statusEnum, setPokemonData, setError, pokemonData}) {

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
      mutation.reset()
      mutation.mutate()
    }
  }

  const emptyobj = useMemo(() => {return {}}, [])

  useEffect(()=>{
    if(mutation.isLoading){
      // console.log("IS LOADING")
      setStatus(statusEnum.isLoading)
    }
    else if(mutation.isError){
      // console.log("IS ERROR")
      setStatus(statusEnum.isError)
      setError(mutation.error.message)
      // console.log(mutation.data)
      setPokemonData(emptyobj)
    }
    else if (mutation.isSuccess) {
      // console.log("IS SUCCESS")
      setStatus(statusEnum.isSuccess)
      // let pokemonObj = {
      //   id: mutation.data.id,
      //   name: mutation.data.name,
      //   weight: mutation.data.weight,
      //   height: mutation.data.height,
      //   sprites: mutation.data.sprites,
      //   stats: mutation.data.stats
      // }
      setPokemonData(mutation.data)
    }
  }, [mutation, statusEnum, setStatus, setPokemonData, setError, emptyobj])



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