import axios from "axios"

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})

export const getPokemons = async (offset= 0, limit = 10) => {
    try {
        const response = await api.get(`pokemon?offset=${offset}&limit=${limit}`)
        const pokemonUrls = response.data.results

        const pokemonDetailsPromises = pokemonUrls.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url)
            return pokemonResponse.data
        })

        const pokemonsDetails = await Promise.all(pokemonDetailsPromises)
        return pokemonsDetails
    } catch (error) {
        console.log('Erro ao buscar pokemons')
        throw error;
    }
};