import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { IMG } from "./RenderMovies"
import { OneMoviePage, getOneMovie } from "../../Store/getMovies"
import { AddToFavorites } from "../Favorites"
import '../styles/onemovie.css'

export const OneMovie = () => {
    const [oneMovie, setOneMovie] = useState<OneMoviePage>()
    const { movieId } = useParams()

    useEffect(() => {
        movieId && getOneMovie(movieId).then(resp => setOneMovie(resp))
    }, [movieId])

    const genres = oneMovie?.genres.map(genre => genre.name).join(' · ')

    if (!oneMovie?.release_date) return null
    const ms = Date.parse(oneMovie?.release_date);
    const newDate = (new Date(ms)).toISOString()
        .replace(/^([^T]+)T(.+)$/, '$1')
        .replace(/^(\d+)-(\d+)-(\d+)$/, '$3.$2.$1')

    const countries = oneMovie.production_countries.map(country => country.name).join(', ')

    const companies = oneMovie.production_companies.map(company => company.name).join(', ')

    if (!oneMovie) return null

    return (
        <div className="movie">
            <div className="movie__wrapper">
                <div className="movie__img">
                    <img src={IMG + oneMovie.poster_path} alt={'img'}></img>
                </div>
                <div className="movie__favorites">
                    <AddToFavorites movie={oneMovie} movieId={oneMovie.id}/>
                </div>
            </div>
            <div className="movie__descr">
                <p className="movies__genre">{genres}</p>
                <h2 className="movie__title">{oneMovie.title}</h2>
                <div className="movie__ranking">
                        <div className="movie__ranking__item">{oneMovie.vote_average}</div>
                        <div className="movie__ranking__item">IMDb {oneMovie.vote_average.toFixed(1)}</div>
                        <div className="movie__ranking__item">{oneMovie.runtime + ' min'}</div>
                    </div>
                <p className="movie__overview">{oneMovie.overview}</p>
                <table className="movie__details">
                    <tr className="details">
                        <td>Released:</td>
                        <td>{newDate}</td>
                    </tr>
                    <tr className="details">
                        <td>Budget:</td>
                        <td>{oneMovie.budget + ' $'}</td>
                    </tr>
                    <tr className="details">
                        <td>Country:</td>
                        <td>{countries}</td>
                    </tr>
                    <tr className="details">
                        <td>Production:</td>
                        <td>{companies}</td>
                    </tr>
                    <tr className="details">
                        <td>Tagline:</td>
                        <td>{oneMovie.tagline}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

