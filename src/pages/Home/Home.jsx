import { Header } from '../../styles/style-home'
import { Main } from '../../styles/style-main'
import pokeBall from '../../images/poke-ball.png'
import logoPokemon from '../../images/logo-pokemon.png' 
import moon from '../../images/moon.png'
import { getPokemons } from '../../services/api-pokemon'
import { useEffect, useState } from 'react'

const Home = () => {
    const [pokemons, setPokemons] = useState([])

    console.log(pokemons);

    useEffect(()=>{
        const fetchPokemon = async () => {
            const data = await getPokemons()
            setPokemons(data)
        }

        fetchPokemon()
    }, [])

    return(
        <>
            <Header>
                <img className='img-pokeball' src={pokeBall} alt="pokeball" />
                <img className='logo-pokemon' src={logoPokemon} alt="pokemon" />
                <button className='btn-theme'>
                    <img className='img-moon' src={moon} alt="moon" />
                </button>
            </Header>

            <Main>
                <h2 className='titulo'>Aqui você encontra uma lista de Pokémon com as suas respectivas habilidades, tipos, e outros detalhes.</h2>
                <div className='cards'>
                    {pokemons.map((pokemon)=>{
                        return(
                            <div className='card' key={pokemon.id}>
                                <img src={pokemon} alt="image-pokemon" />
                            </div>
                        ) 
                    })}
                </div>
            </Main>
        </>
    )
}

export { Home }