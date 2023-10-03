import { Route, Routes } from "react-router-dom"
import { Header } from "./Header"
import { RenderMovies } from "../Movies/RenderMovies"
import { OneMoviePage } from "../Movies/oneMovie"

export const Navigation = () => {
    return <>
        <Header/>
        <Routes>
            <Route path="/">
                <Route index element={<RenderMovies />}/>
            </Route>
            <Route path="/movies">
                <Route path=":mn" element={<OneMoviePage/>}/>
            </Route>
            <Route path="/search">
                <Route path=":title" element={<RenderMovies/>}/>
            </Route>
        </Routes>
        {/* <Footer/> */}
        </>
}