import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../Store/store"
import { useEffect } from "react"
import { searchMoviesThunk, setPage } from "../../Store/movies"
import { Loading } from "../elements/Loading"
import { NotFoundError } from "../elements/NorFoundError"
import { ErrorMessage } from "../elements/ErrorMessage"
import { OneMovieShort } from "../../Store/getMovies"
import { MovieShort } from "./MovieShort"

export const FoundMovies = () => {
    const movies = useAppSelector(state => state.movies.moviesFoundByTitle)
    const allMovies = useAppSelector(state => state.movies.allMovies)
    const status = useAppSelector(state => state.movies.status)
    const searchInputValue = useAppSelector(state => state.movies.searchInputValue)
    const page = useAppSelector(state => state.movies.page)
    const pagesNum = useAppSelector(state => state.movies.pageNum)
    const dispatch = useAppDispatch()
    const {original_title} = useParams()

    useEffect(()=>{
        const searchTitle = localStorage.getItem('searchTitle')
        if (searchTitle !== original_title){
            dispatch(setPage(1))
        }
        original_title && page && dispatch(searchMoviesThunk({original_title,page}))
    }, [original_title,page])

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
        <>
            {movies.map((movie: OneMovieShort) => <MovieShort movie={movie}></MovieShort>)}
        </>
    )
}