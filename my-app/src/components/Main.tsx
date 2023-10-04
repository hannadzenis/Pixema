import { Menu } from "antd"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Header } from "./Header"
import { AllMovies } from "./Movies/MovieList"
import { OneMovie } from "./Movies/oneMovie"
import { FavoriteMovies } from "./FilterMovies"
import { PopularMovies } from "./Popuar"
import { Filter } from "./Filter"

export const MainPage = () => {
    const [showMenu, setShowMenu] = useState(true)

    const onBurgerButtonClick = (isTouched: boolean) => {
        setShowMenu(isTouched)
    }
    return (
        <>
            <Header touched handleClick={onBurgerButtonClick} />
            <div className='container main-wrapper'>
                <div className='main-menu'>
                    {showMenu && <Menu />}
                </div>
                <div className='main-films'>
                    <Routes>
                        <Route index element={<AllMovies />} />
                        <Route path=':movieId' element={<OneMovie />} />
                        <Route path='favorite' element={<FavoriteMovies />} />
                        <Route path='popular' element={<PopularMovies />} />
                    </Routes>
                </div>
            </div>
            <Filter />
        </>
    )
}