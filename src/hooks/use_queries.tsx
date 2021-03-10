import { useState, useEffect } from 'react'
import { get } from '../services/services'
import { IPokemon } from '../types/types'

export const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const results = await get<IPokemon[]>('http://localhost:5000/data')
      setPokemons(results)
    }
    fetchData()
  }, [])

  return pokemons
}
