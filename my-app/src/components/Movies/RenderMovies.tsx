import { Movie } from "./getMovies"
import './movies.css'

export const RenderMovies = (props:{movie: Movie}) => {
    return (
        <>
            <li className='movie'>
                <img className='movie__image' src={props.movie.background_image}/>
                <p className='movie__title'>{props.movie.title}</p>
                <p className='movie__ranking'>{props.movie.rating}</p>
                <p className='movie__genre'>{props.movie.genres}</p>
            </li>
        </>
    )
}