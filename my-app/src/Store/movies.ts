import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { OneMovie, getMovies, SearchMoviesThunkParams, searchMovies, MovieState, getOneMovie, Response, OneMovieShort} from "./getMovies";

const initialState: MovieState = {
    movies: [],
    description: {
        error: '',
        original_title: '',
        genres: '',
        overview: '',
        poster_path: '',
        release_date: '',
        mn: '',
        vote_average: '',
    },
    searchInputValue: '',
    moviesFoundByTitle: [],
    allMovies: 0, 
    page: 1, 
    pageNum: 0,
    status: '',
}

export const getMoviesThunk = createAsyncThunk('movies/getMoreMoviesThunk', async () => {
    const serverMovies = await getMovies();
    return serverMovies
})

export const getOneMovieThunk = createAsyncThunk('movies/getOneMovieThunk', async (mn: string) => {
    const serverMovie = await getOneMovie(mn);
    return serverMovie
})

export const searchMoviesThunk = createAsyncThunk<Response, SearchMoviesThunkParams, {state: RootState }>('movies/searchMoviesThunk', async ({original_title, page}: SearchMoviesThunkParams)=>{
    const serverMovies = await searchMovies(original_title, page)
    return serverMovies
})

export const MoviesSlice = createSlice({
    name: 'movies', 
    initialState, 
    reducers: {
        setSearchInput: (state, action: PayloadAction<string>) => {
            return { ...state, searchInputValue: action.payload}
        },
        setPage: (state, action: PayloadAction<number>)=>{
            return { ...state, page: action.payload}
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getMoviesThunk.pending, (state)=>{
                return {...state, status: 'loading'}
            })
            .addCase(getMoviesThunk.fulfilled, (state, action: PayloadAction<OneMovieShort[]>)=>{
                return {...state, movies: action.payload, status: 'fulfilled'}
            })
            .addCase(getMoviesThunk.rejected, (state)=>{
                return {...state, status: 'rejected'}
            })
            .addCase(getOneMovieThunk.pending, (state)=>{
                return {...state, status: 'loading'}
            })
            .addCase(getOneMovieThunk.fulfilled, (state, action: PayloadAction<OneMovie>)=>{
                return {...state, description: action.payload, status: 'fulfilled'}
            })
            .addCase(getOneMovieThunk.rejected, (state)=>{
                return {...state, status: 'rejected'}
            })
            .addCase(searchMoviesThunk.pending, (state)=>{
                return {...state, status: 'loading'}
            })
            .addCase(searchMoviesThunk.fulfilled, (state, action: PayloadAction<Response>) => {
                const { results, total } = action.payload
    
                const totalConverted = (total && Number(total) > 0) ? Number(total) : 0
                const moviesQtyAtArr = 10
    
                const pageNum = Math.ceil(totalConverted / moviesQtyAtArr)
    
                return { ...state, moviesFoundByTitle: results, pageNum: pageNum, total: totalConverted, status: 'fulfilled' }
            })
            .addCase(searchMoviesThunk.rejected, (state) => {
                return { ...state, status: 'rejected' }
            })
        }
})

export const { setSearchInput, setPage } = MoviesSlice.actions

export const moviesReducer = MoviesSlice.reducer


















// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { OneMovie, getMovies, getMoviesBySearch, getPopularMovies } from "../components/Movies/getMovies";

// const initialState: { movies: OneMovie[] } = { movies: [] }

// export const moviesSlice = createSlice({
//     name: 'movies',
//     initialState,
//     reducers: {
//         setMovies: (state, action: PayloadAction<OneMovie[]>) => {
//             state.movies = action.payload
//         },
//         setFavorites: (state, action: PayloadAction<number>) => {
//             const movie = state.movies.find(movie => movie.id === action.payload)
//             if (!movie) return
//             movie.favorite = !movie.favorite
//         },
//     },
//     extraReducers(builder) {
//         builder.addCase(getMoviesThunk.fulfilled, (state, action: PayloadAction<OneMovie[]>) => {
//             state.movies = action.payload
//         })
//         .addCase(getPopularThunk.fulfilled, (state, action: PayloadAction<OneMovie[]>) => {
//             state.movies = action.payload
//         })
//     }
// })

// export const { setMovies, setFavorites } = moviesSlice.actions
// export const moviesReducer = moviesSlice.reducer

// export const getMoviesThunk = createAsyncThunk(
//     "Movies/getMovies", 
//     async ({search = ''}: {search?: string })=>{
//         const movies: OneMovie[] = search ? await getMoviesBySearch({'search':search}) : (await getMovies()).results;
//         return movies
//     }
// );

// export const getPopularThunk = createAsyncThunk(
//     "Movies/getPopularMovies",
//     async () => {
//         const movies: OneMovie[] = await getPopularMovies();
//         return movies
//     }
// )