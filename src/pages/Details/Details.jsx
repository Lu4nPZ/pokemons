import { Header } from "../../components/header/header"
import { Main } from "../../styles/style-details"
import { useContext, useState, useEffect } from "react"
import { ThemeContext } from '../../contexts/theme-context'
import { useParams } from "react-router-dom"
import axios from 'axios'

export const Details = () => {
    const { theme } = useContext(ThemeContext)
    const [pokemon, setPokemon] = useState([])
    const { pokemonName } = useParams()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                setPokemon(response.data);
            } catch (err) {
                setError("Erro ao carregar os detalhes do Pokémon.", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonDetails();
    }, [pokemonName]);

    if (loading) return <p>Carregando...</p>
    if (error) return <p>{error}</p>

    return(
        <>
            <Header />

            <Main>
                <div className="container-image">
                    <img className="image-pokemon" src={pokemon.sprites.other["official-artwork"].front_default} alt="image-pokemon" />
                </div>

                <div className="card-details" style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
                    <div className="titulo-descricao">
                        <h2>Informações do {pokemon.name}</h2>
                    </div>

                    <div className="descricao">
                        <p><strong>Nome:</strong> {pokemon.name}</p>
                        <p><strong>Tipo:</strong> {pokemon.types.map(type => type.type.name).join(", ")}</p>
                        <p><strong>Habilidade:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(", ")}</p>
                        <p><strong>Altura:</strong> {pokemon.height / 10}m</p>
                        <p><strong>Peso:</strong> {pokemon.weight / 10}kg</p>
                    </div>
                </div>
            </Main>
        </>
    )
}