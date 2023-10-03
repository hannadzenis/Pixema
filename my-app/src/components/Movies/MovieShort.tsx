import { useNavigate } from "react-router-dom";
import { OneMovieShort } from "../../Store/getMovies";
import "./movies.css"

type MovieShortProps = {
    movie: OneMovieShort
};

export const MovieShort = ({movie}: MovieShortProps) => {
    const navigate = useNavigate()

    return (
        <div className='movie' key={movie.mn}>
            <h2 className='movie__title'>{movie.original_title}</h2>
            <button onClick={()=>{navigate(`/movies/${movie.mn}`)}}>
            </button>
            <img className='movie__image' src={movie.poster_path} alt={movie.original_title}/>
        </div>
    )
}