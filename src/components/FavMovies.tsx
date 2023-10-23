import { useRef } from "react";
import { OneMovieWithGenre } from "../Store/getMovies";
import { RenderMovie } from "./Movies/RenderMovies";
import useLocalStorage from "react-use-localstorage";
import './styles/movies.css';


export const FavoriteMovies = () => {

    const [storageItem, setStorageItem] = useLocalStorage(
        'Favourites',
        JSON.stringify([]),
    )
    const storagedArray = useRef(JSON.parse(storageItem));
    const favorites = storagedArray.current;
    

    return (
        <div className="movies__wrapper">
            {!favorites.length && <span>No favorite movies</span>}
            {favorites.map((movie: OneMovieWithGenre) => <RenderMovie oneMovie={movie} key={movie.id} />)}
        </div>
    )
}