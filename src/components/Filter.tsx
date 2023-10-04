import { useState, SetStateAction, useEffect } from "react"
import { setMovies, toggleFilter } from "../Store/movieSlice"
import { useAppSelector, useAppDispatch } from "../Store/store"
import { getMovies } from "../Store/getMovies"

export const Filter = () => {
    const isTouched = useAppSelector(state => state.movies.isTouched)
    const dispatch = useAppDispatch()

    const movies = useAppSelector(state => state.movies.movies)

    const moviesArr = movies.slice(0)
    const sortByRating = moviesArr.sort((a, b) => b.vote_average - a.vote_average)

    const sortByYear = moviesArr.sort((a, b) => {
        const result = +(b.release_date.slice(0, 4)) - +(a.release_date.slice(0, 4))
        return result
    })

    const genres = useAppSelector(state => state.movies.genres)

    const genresList = genres.map(genre => {
        return <button value={genre.id} key={genre.id}>{genre.name}</button>
    })

    const [genre, setGenre] = useState('');
    const [page, setPage] = useState(1);

    const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
        setGenre(event.target.value);
    }

useEffect(() => {getMovies(page, genre).then((resp) => dispatch(setMovies(resp.results)))}, [genre])

    const filtredMoviesArr = movies.filter(movie => movie.genre_ids.includes(+genre))

    return (
        <>
            <div className={isTouched ? 'show-filter' : 'hide-filter'}>
                <div className="filter-title">
                    <h3>Filters</h3>
                    <button className="filter-close-button" onClick={() => { dispatch(toggleFilter(false)) }}>✖</button>
                </div>
                <div className="filter-sort-by">
                    <p>Sort by</p>
                    <div className="filter-button-wrapper">
                        <button className="filter-sort-button" onClick={() => dispatch(setMovies(sortByRating))}>Rating</button>
                        <button className="filter-sort-button" onClick={() => dispatch(setMovies(sortByYear))}>Year</button>
                    </div>
                    <p>Genres</p>
                    <div className="filter-by-genres">
                        <div>
                            <select value={genre} onChange={handleChange}>
                                <button disabled value="">
                                    <em>Select genre</em>
                                </button>
                                {genresList}
                            </select>
                        </div>
                    </div>
                </div>
                <button className="button-show-results" onClick={() => dispatch(setMovies(filtredMoviesArr))}>Show Results</button>
            </div>
        </>
    )
}