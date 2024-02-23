import axios from "axios"

const POKEMON_API_ADDRESS = "https://pokeapi.co/api/v2/";

const api = axios.create({
    baseURL: POKEMON_API_ADDRESS,
})

const dados = axios.create({
    baseURL:'',
})

const buscaPokemonPorNome = async (nome) => {
    const response = await api.get('pokemon?limit=1000');
    const pokemonsFiltrados = response.data.results.filter(pokemon => pokemon.name.includes(nome.toLowerCase())
    );

const pokemonData = await Promise.all(pokemonsFiltrados.map(
    async (pokemon) => {
        const respDetail = await axios.get(pokemon.url.name)
        return respDetail.data;
    }
));
return pokemonData;
}

const infoPokemon = async (data) => {
    const response = await dados.get(data);
    return pokemon.url.ability;
}

export {buscaPokemonPorNome};
export {infoPokemon};