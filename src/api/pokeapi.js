import axios from "axios";

const pokeapi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

export const getPokemon = async (name) => {
  const response = await pokeapi.get(`/pokemon/${name}`)
  return response.data
}

export default pokeapi