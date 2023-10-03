import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { IMG } from "./RenderMovies"
import { OneMoviePage, getOneMovie } from "../../Store/getMovies"

export const OneMovie = () => {
    const [oneMovie, setOneMovie] = useState<OneMoviePage>()
    const { movieId } = useParams()

    useEffect(() => {
        movieId && getOneMovie(movieId).then(resp => setOneMovie(resp))
    }, [movieId])

    const genres = oneMovie?.genres.map(genre => genre.name).join(' · ')

    const RatingMovie = (rating: number) => {
        let newRating = +rating.toFixed(1);
        if (newRating < 5) return <div className="one-film__rating low-rating">{newRating}</div>
        if (newRating >= 5 && newRating <= 7) return <div className="one-film__rating middle-rating">{newRating}</div>
        if (newRating > 7) return <div className="one-film__rating hight-rating">{newRating}</div>
    }

    if (!oneMovie?.release_date) return null
    const ms = Date.parse(oneMovie?.release_date);
    const newDate = (new Date(ms)).toISOString()
        .replace(/^([^T]+)T(.+)$/, '$1')
        .replace(/^(\d+)-(\d+)-(\d+)$/, '$3.$2.$1')

    const countries = oneMovie.production_countries.map(country => country.name).join(', ')

    const companies = oneMovie.production_companies.map(company => company.name).join(', ')

    if (!oneMovie) return null

    return (
        <div className="one-film__wrapper">
            <div className="one-film">
                <div className="one-film__img">
                    <img src={IMG + oneMovie.poster_path} alt={'img'}></img>
                </div>
                <div className="one-film__favorites">
                    {/* <AddToFavorites movieId={oneMovie.id} /> */}
                </div>
            </div>
            <div className="one-film__info">
                <p className="one-film__genres">{genres}</p>
                <h2 className="one-film__title">{oneMovie.title}</h2>
                <div className="one-film__ratings">
                    {RatingMovie(oneMovie.vote_average)}
                    <div className="one-film__rating-imdb">IMDb {oneMovie.vote_average.toFixed(1)}</div>
                    <div className="one-film__runtime">{oneMovie.runtime + ' min'}</div>
                </div>
                <p className="one-film__overview">{oneMovie.overview}</p>
                <table className="one-film__table">
                    <tr className="one-film__tr">
                        <td>Released:</td>
                        <td>{newDate}</td>
                    </tr>
                    <tr className="one-film__tr">
                        <td>Budget:</td>
                        <td>{oneMovie.budget + ' $'}</td>
                    </tr>
                    <tr className="one-film__tr">
                        <td>Country:</td>
                        <td>{countries}</td>
                    </tr>
                    <tr className="one-film__tr">
                        <td>Production:</td>
                        <td>{companies}</td>
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

