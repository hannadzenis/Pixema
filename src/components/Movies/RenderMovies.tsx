import { Link } from "react-router-dom"
import '../styles/movies.css'
import { Card, Statistic } from "antd"
import { OneMovieWithGenre } from "../../Store/getMovies"


export const IMG = "https://image.tmdb.org/t/p/w500/"

export const RenderMovie = ({ oneMovie }: { oneMovie?: OneMovieWithGenre }) => {

    const genres = oneMovie?.genre.join(' · ')

    if (!oneMovie) return null

    return (
        <Link to={'/movies/' + oneMovie.id} style={{textDecoration:'none'}}>
            <div className="movie">
                <div>
                    <div className="movie__image">
                        <img src={IMG + oneMovie.poster_path} alt={'img'}></img>
                        <div className="movie__ranking">{oneMovie.vote_average}</div>
                    </div>
                    <div className="movie__title">{oneMovie.title}</div>
                </div>
                <p className="movie__genre">{genres}</p>
            </div>
        </Link>
    )
}