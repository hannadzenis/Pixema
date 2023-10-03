import { Link } from "react-router-dom"
import '../styles/movies.css'
import { Card, Statistic } from "antd"
import { OneMovieWithGenre } from "../../Store/getMovies"


export const IMG = "https://image.tmdb.org/t/p/w500/"

export const RenderMovie = ({ oneMovie }: { oneMovie?: OneMovieWithGenre }) => {

    const genres = oneMovie?.genre.join(' · ')

    if (!oneMovie) return null

    return (
        <Card title={oneMovie.title}>
            <Link to={'/movies/' + oneMovie.id}>
                <div className="movie__image">
                    <img src={IMG + oneMovie.poster_path} alt={'img'}></img>
                </div>
                <div>
                    {/* <>{RatingMovie(oneMovie.vote_average)}</> */}
                    <Statistic value={oneMovie.vote_average} suffix="/10"/>
                    <p className="movie__genre">{genres}</p>
                </div>
            </Link>
        </Card>
    )
}