import { createGlobalStyle } from 'styled-components'
import { AppRoutes } from './pages/routes'
import { ThemeContext } from './contexts/theme-context'
import { useContext } from 'react'

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }

    a{
      text-decoration: none;
      color: ${({ theme }) => theme.color};
    }
  `

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <GlobalStyles theme={theme}/>
      <AppRoutes />
    </> 
  )
}

export default App