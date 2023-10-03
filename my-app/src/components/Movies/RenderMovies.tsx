import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../Store/store"
import { getMoviesThunk } from "../../Store/movies"
import { Loading } from "../elements/Loading"
import { NotFoundError } from "../elements/NorFoundError"
import { ErrorMessage } from "../elements/ErrorMessage"
import { OneMovieShort } from "../../Store/getMovies"
import { MovieShort } from "./MovieShort"

export const RenderMovies = () =>{
    const movies = useAppSelector(state => state.movies.movies)
    const status = useAppSelector(state => state.movies.status)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getMoviesThunk())
    }, [])


    if(status === 'loading'){
        return <Loading/>
    }
    if(movies.length === 0 && status === 'fulfilled'){
        return <NotFoundError/>
    }
    if(status === 'rejected'){
        return <ErrorMessage/>
    }

    return(
        <div className='movies__wrapper'>
        {movies.map((movie: OneMovieShort) => <MovieShort movie={movie}></MovieShort>)}
        </div>
    )
}