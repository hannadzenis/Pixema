import { Menu } from "./Menu"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Header } from "./Header"
import { OneMovie } from "./Movies/oneMovie"
import { FavoriteMovies } from "./FavMovies"
import { PopularMovies } from "./Trends"
import { Filter } from "./Filter"
import './styles/menu.css'
import './styles/main.css'
import { MovieList } from "./Movies/MovieList"

export const MainPage = () => {
    const [showMenu, setShowMenu] = useState(true)

    const onBurgerButtonClick = (isTouched: boolean) => {
        setShowMenu(isTouched)
    }
    return (
        <>
            <div className='main'>
                <div className='main__menu'>
                    {showMenu && <Menu />}
                </div>
                <div className='main__wrapper'>
                    <Header touched handleClick={onBurgerButtonClick} />
                    <div className='main__movies'>
                        <Routes>
                            <Route index element={<MovieList />} />
                            <Route path=':movieId' element={<OneMovie />} />
                            <Route path='favorite' element={<FavoriteMovies />} />
                            <Route path='popular' element={<PopularMovies />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}