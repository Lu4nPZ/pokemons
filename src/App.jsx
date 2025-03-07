import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from './contexts/theme-context'
import { AppRoutes } from './pages/routes'

function App() {

  const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }

    a{
      text-decoration: none;
    }
  `

  return (
   <ThemeProvider>
      <GlobalStyles />
      <AppRoutes />
   </ThemeProvider>   
  )
}

export default App
