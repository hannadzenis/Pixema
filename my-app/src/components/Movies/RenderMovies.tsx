import { Movie } from "./getMovies"
import './movies.css'

export const RenderMovies = (props:{movie: Movie}) => {
    return (
        <>
            <li className='movie' key={props.movie.id}>
                <img className='movie__image' src={props.movie.image}/>
                <p className='movie__title'>{props.movie.title}</p>
                <p className='movie__year'>{props.movie.year}</p>
                <p className='movie__genre'>{props.movie.genre}</p>
            </li>
        </>
    )
}