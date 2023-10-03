import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { OneMovie, getMovies } from "../../Store/getMovies";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { getOneMovieThunk } from "../../Store/movies";
import { Loading } from "../elements/Loading";
import { NotFoundError } from "../elements/NorFoundError";
import { ErrorMessage } from "../elements/ErrorMessage";

export const OneMoviePage = () => {
    const {mn} = useParams()
    const [value, setValue] = useState('1');

    const movie = useAppSelector((state)=>state.movies.description);
    const status = useAppSelector((state)=>state.movies.status);
    const dispatch = useAppDispatch()

    const navigate = useNavigate();
    
    useEffect(()=>{
        mn && dispatch(getOneMovieThunk(mn))
    },[mn])

    // const handleChange = (e: React.SyntheticEvent, nv: string) => {
    //     setValue(nv)
    // }

    // const handleClick = () => {
    //     navigate(-1)
    // }

    if(status === 'loading'){
        return <Loading/>
    }
    if(!movie.original_title && status === 'fulfilled'){
        return <NotFoundError/>
    }
    if(status === 'rejected'){
        return <ErrorMessage/>
    }
    
    return (
        <div className="oneMovie__wrapper">
        <div className="oneMovie">
            <div className="oneMovie__img">
                <img src={movie.poster_path}></img>
            </div>
        </div>
        <div className="one-film__info">
            <p className="one-film__genres">{movie.genres}</p>
            <h2 className="one-film__title">{movie.original_title}</h2>
            <div className="one-film__ratings">
                {/* <div className="one-film__rating-imdb">IMDb {movie.vote_average.toFixed(1)}</div> */}
                {/* <div className="one-film__runtime">{movie.runtime + ' min'}</div> */}
            </div>
            <p className="one-film__overview">{movie.overview}</p>
            <table className="one-film__table">
                <tr className="one-film__tr">
                    <td>Released:</td>
                    <td>{movie.release_date}</td>
                </tr>
                {/* <tr className="one-film__tr">
                    <td>Budget:</td>
                    <td>{movie.budget + ' $'}</td>
                </tr>
                <tr className="one-film__tr">
                    <td>Tagline:</td>
                    <td>{movie.tagline}</td>
                </tr> */}
            </table>
        </div>
    </div>
    )
}


