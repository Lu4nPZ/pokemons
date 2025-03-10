import { Main } from '../../styles/style-main'
import { Header } from '../../components/header/header'
import { getPokemons } from '../../services/api-pokemon'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import { Link } from 'react-router-dom'

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const { theme } = useContext(ThemeContext)

    useEffect(()=>{
        const fetchInitialPokemons = async () => {
            const data = await getPokemons(offset, 10)
            setPokemons(data)
        }

        fetchInitialPokemons()
    }, [])

    const handleLoadMore = async () => {
        const newOffset = offset + 10
        setOffset(newOffset)

        const data = await getPokemons(newOffset, 10)
        setPokemons(prevPokemons => [...prevPokemons, ...data])
    }

    return(
        <>
            <Header />

            <Main>
                <h2 className='titulo'>Aqui você encontra uma lista de Pokémon com as suas respectivas habilidades, tipos, e outros detalhes.</h2>
                <div className='cards'>
                    {pokemons.map((pokemon)=>{
                        return(
                            <Link to={`/details/${pokemon.id}`} key={pokemon.id}>
                                <div className='card' style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
                                        <img src={pokemon.sprites.other["official-artwork"].front_default} alt="image-pokemon" />
                                        <p>{pokemon.name}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>

                <button className='btn-carregar' onClick={handleLoadMore} style={{color: theme.color, backgroundColor: theme.backgroundColor}}>Carregar mais</button>
            </Main>
        </>
    )
}

export { Home }