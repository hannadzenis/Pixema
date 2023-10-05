import { useEffect } from "react"
import { getPopularThunk } from "../Store/movieSlice"
import { useAppDispatch, useAppSelector } from "../Store/store"
import { RenderMovie } from "./Movies/RenderMovies"
import { OneGenre } from "../Store/getMovies"

export const PopularMovies = () => {
    const dispatch = useAppDispatch()

    useEffect(() => { dispatch(getPopularThunk()) }, [])

    const movies = useAppSelector(state => {
        const genresIdsToNames = (genresIds: number[]) => genresIds.map(genreIdToName);
        const genres: OneGenre[] = state.movies.genres
        const genreIdToName = (genreId: number) => genres.find(({ id }) => id === genreId)?.name
        return state.movies.movies.map(movie => ({ ...movie, genre: genresIdsToNames(movie.genre_ids) }))
    })

    return (
        <div className="films-wrapper">
            {movies.map(movie => <RenderMovie oneMovie={movie} key={movie.id} />)}
        </div>
    )
}