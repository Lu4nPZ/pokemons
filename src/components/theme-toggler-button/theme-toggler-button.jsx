import { Button } from "../button/button"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { useContext } from "react"
import moon from '../../images/moon.png';
import sun from '../../images/sun.png';

export const ThemeTogglerButton = ()=>{

    const {theme, setTheme} = useContext(ThemeContext)

    return(
        <Button onClick={()=> setTheme(theme === themes.light ? themes.dark : themes.light) }>
            <img className='img-moon' src={theme === themes.light ? moon : sun} alt="theme-button" />
        </Button>
    )
}