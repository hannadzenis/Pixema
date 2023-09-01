import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OneMovie, getMovies } from "./getMovies";

export const OneMoviePage = () => {
    const [oneMovie, setOneMovie] = useState<OneMovie>();
    const {movieId} = useParams();

    // useEffect(()=>{
    //     movieId && getMovies().then(result => setOneMovie(result))
    // }, [movieId])

    if (!oneMovie) return null
    
    return (
        <div className="oneMovie__wrapper">
        <div className="oneMovie">
            <div className="oneMovie__img">
                <img src={oneMovie.poster_path}></img>
            </div>
        </div>
        <div className="one-film__info">
            <p className="one-film__genres">{oneMovie.genres}</p>
            <h2 className="one-film__title">{oneMovie.title}</h2>
            <div className="one-film__ratings">
                <div className="one-film__rating-imdb">IMDb {oneMovie.vote_average.toFixed(1)}</div>
                <div className="one-film__runtime">{oneMovie.runtime + ' min'}</div>
            </div>
            <p className="one-film__overview">{oneMovie.overview}</p>
            <table className="one-film__table">
                <tr className="one-film__tr">
                    <td>Released:</td>
                    <td>{oneMovie.release_date}</td>
                </tr>
                <tr className="one-film__tr">
                    <td>Budget:</td>
                    <td>{oneMovie.budget + ' $'}</td>
                </tr>
                <tr className="one-film__tr">
                    <td>Tagline:</td>
                    <td>{oneMovie.tagline}</td>
                </tr>
            </table>
        </div>
    </div>
    )
}


