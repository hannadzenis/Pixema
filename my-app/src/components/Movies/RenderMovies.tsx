import { Movie } from "./getMovies"
import './movies.css'

export const RenderMovies = (props:{movie: Movie}) => {
    return (
        <>
            <li className='movie' key={Date.now()}>
                <img className='movie__image' src={props.movie.Poster}/>
                <p className='movie__title'>{props.movie.Title}</p>
                <p className='movie__ranking'>{props.movie.imdbRating}</p>
                <p className='movie__genre'>{props.movie.Genre}</p>
            </li>
        </>
    )
}