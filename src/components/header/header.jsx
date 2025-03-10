import pokeBall from '../../images/poke-ball.png'
import logoPokemon from '../../images/logo-pokemon.png' 
import { ThemeTogglerButton } from '../../components/theme-toggler-button/theme-toggler-button'
import { HeaderStyle } from '../../styles/style-header'
import { Link } from 'react-router-dom'

export const Header = ()=>{
    return(
        <HeaderStyle>
            <Link to='/'>
                <img className='img-pokeball' src={pokeBall} alt="pokeball" />
            </Link>
            <img className='logo-pokemon' src={logoPokemon} alt="pokemon" />
            <ThemeTogglerButton />
        </HeaderStyle>
    )
}