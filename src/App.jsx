import './App.css'
import { createGlobalStyle } from 'styled-components'
import { Home } from './pages/Home/Home'

function App() {

  const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }
  `

  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  )
}

export default App
