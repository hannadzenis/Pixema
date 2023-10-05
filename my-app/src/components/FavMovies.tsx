import { useEffect } from "react";
import { OneGenre } from "../Store/getMovies";
import { useAppSelector } from "../Store/store";
import { RenderMovie } from "./Movies/RenderMovies";


export const FavoriteMovies = () => {
    const movies = useAppSelector(state => {
        const genresIdsToNames = (genresIds: number[]) => genresIds.map(genreIdToName);
        const genres: OneGenre[] = state.movies.genres
        const genreIdToName = (genreId: number) => genres.find(({ id }) => id === genreId)?.name
        return state.movies.movies.map(movie => ({ ...movie, genre: genresIdsToNames(movie.genre_ids) }))
    })

    useEffect(()=>{
        localStorage.getItem('DFX-favourites')
    }, [])

    const favMovies = movies.filter(movie => movie.favorite)
    return (
        <div className="films-wrapper">
            {!favMovies.length && <span>No favorite movies</span>}
            {favMovies.map(movie => <RenderMovie oneMovie={movie} key={movie.id} />)}
        </div>
    )
}