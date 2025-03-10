import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Home/Home"
import { Details } from "./Details/Details"

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/details/:pokemonName" element={<Details />}/>
            </Routes>
        </BrowserRouter>
    )
}