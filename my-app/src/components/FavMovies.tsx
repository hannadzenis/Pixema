import { useEffect, useState } from "react";
import { OneGenre } from "../Store/getMovies";
import { useAppSelector } from "../Store/store";
import { RenderMovie } from "./Movies/RenderMovies";


export const FavoriteMovies = () => {
    const favorites = useAppSelector(state => {
        const genresIdsToNames = (genresIds: number[]) => genresIds.map(genreIdToName);
        console.log(genresIdsToNames)
        const genres: OneGenre[] = state.movies.genres
        const genreIdToName = (genreId: number) => genres.find(({ id }) => id === genreId)?.name
        return state.movies.movies.map(movie => ({ ...movie, genre: genresIdsToNames(movie.genre_ids) }))
    })

    // const [favorites, setFavorites] = useState(() => {
    //     // getting stored value
    //     const saved = localStorage.getItem("DFX-favourites");
    //     const initialValue = JSON.stringify(saved);
    //     const favs = Object(initialValue)
    //     return favs;
    // });

    const favMovies = favorites.filter(movie => movie.favorite)
    return (
        <div>
            {!favMovies.length && <span>No favorite movies</span>}
            {favMovies.map(movie => <RenderMovie oneMovie={movie} key={movie.id} />)}
        </div>
    )
}