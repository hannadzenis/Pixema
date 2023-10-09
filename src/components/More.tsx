import { useState, useEffect } from "react"
import { setMovies } from "../Store/movieSlice"
import { useAppSelector, useAppDispatch } from "../Store/store"
import { getMovies } from "../Store/getMovies"
import './styles/menu.css'

export const ShowMore = () => {
    const [page, setPage] = useState<number>(1)

    const movies = useAppSelector(state => state.movies.movies)
    const dispatch = useAppDispatch()

useEffect(() => {getMovies(page).then(resp => dispatch(setMovies([...movies, ...resp.results])))}, [page])

    return (
        <button className='show-more' onClick={() => {
            setPage(page + 1);
        }}>
            <span className="show-more-text">Show more</span>
        </button>
    )
}