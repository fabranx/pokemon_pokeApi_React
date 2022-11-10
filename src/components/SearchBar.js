import { useQuery,  useQueryClient, useMutation } from "@tanstack/react-query"
import {getPokemon} from '../api/pokeapi'
import { useState } from 'react'


function SearchBar({title}) {

  const [searchName, setSearchName] = useState('')

  const queryClient = useQueryClient()

  // const {
  //   isLoading,
  //   isError,
  //   error,
  //   data: pokemon
  // } = useQuery({ queryKey: ['pokemon'], queryFn: () => getPokemon('bulbasaur'), enabled:false})

  const mutation = useMutation(() => getPokemon(searchName))


  const onSearchSubmit = (e) => {
    e.preventDefault()
    mutation.mutate()
  }

  return(
    <>
      {console.log(mutation?.data?.species.name)}
      <h2 htmlFor="nameField">{title}</h2>
      <form onSubmit={onSearchSubmit}>
        <input type="text" placeholder={"e.g. bulbasaur"} id="nameField" onChange={(e) => setSearchName(e.target.value)}></input>
      </form>
    </>
  )
  
}

export default SearchBar