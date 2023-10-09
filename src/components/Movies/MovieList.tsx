import { useEffect } from 'react'
import { setMovies, setGenres } from '../../Store/movieSlice'
import { useAppSelector, useAppDispatch } from '../../Store/store'
import { RenderMovie } from './RenderMovies'
import '../styles/movies.css';
import { OneGenre, getMovies, getGenres } from '../../Store/getMovies';
import { ShowMore } from '../More';

export const MovieList= () => {
    const moviesList = useAppSelector(state => {
        const genresIdsToNames = (genresIds: number[]) => genresIds.map(genreIdToName);
        const genres: OneGenre[] = state.movies.genres
        const genreIdToName = (genreId: number) => genres.find(({ id }) => id === genreId)?.name
        return state.movies.movies.map(movie => ({ ...movie, genre: genresIdsToNames(movie.genre_ids) }))
    })

    const dispatch = useAppDispatch()

    useEffect(() => { getMovies().then((response) => dispatch(setMovies(response.results))) }, [])

    useEffect(() => { getGenres().then((response) => dispatch(setGenres(response))) }, [])

    return (
        <>
            <div className="movies__wrapper">
                {!moviesList.length && <span className='not-found'>Not found</span>}
                {moviesList.map(movie =><RenderMovie oneMovie={movie} key={movie.id} />)}
            </div>
            <div className='more'> 
                <ShowMore />
            </div>
        </>
    )
}