import pokeBall from '../../images/poke-ball.png'
import logoPokemon from '../../images/logo-pokemon.png' 
import { ThemeTogglerButton } from '../../components/theme-toggler-button/theme-toggler-button'

export const Header = ()=>{
    return(
        <Header>
            <img className='img-pokeball' src={pokeBall} alt="pokeball" />
            <img className='logo-pokemon' src={logoPokemon} alt="pokemon" />
            <ThemeTogglerButton />
        </Header>
    )
}