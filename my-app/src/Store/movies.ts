import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { OneMovie, getMovies, SearchMoviesThunkParams, searchMovies, MovieState, getOneMovie, Response} from "../components/Movies/getMovies";

const initialState: MovieState = {
    movies: [],
    searchInputValue: '',
    moviesFoundByTitle: [],
    allPages: 0, 
    page: 1, 
    status: '',
}

export const getMoreMoviesThunk = createAsyncThunk('books/getMoreMoviesThunk', async () => {
    const serverBooks = await getMovies();
    return serverBooks
})

export const getOneMovieThunk = createAsyncThunk('movies/getOneMovieThunk', async (mn: string) => {
    const serverMovie = await getOneMovie(mn);
    return serverMovie
})

export const searchMoviesThunk = createAsyncThunk<Response, SearchMoviesThunkParams, {state: RootState }>('movies/searchMoviesThunk', async ({title, page}: SearchMoviesThunkParams, store)=>{
    const serverMovies = await searchMovies(title, page)
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
            .addCase(getMoreMoviesThunk.pending, (state)=>{
                return {...state, status: 'loading'}
            })
            .addCase(getMoreMoviesThunk.fulfilled, (state, action: PayloadAction<OneMovie[]>)=>{
                return {...state, movies: action.payload, status: 'fulfilled'}
            })
            .addCase(getMoreMoviesThunk.rejected, (state)=>{
                return {...state, status: 'rejected'}
            })
            .addCase(getMoreMoviesThunk.pending, (state)=>{
                return {...state, status: 'loading'}
            })
            .addCase(getMoreMoviesThunk.fulfilled, (state, action: PayloadAction<OneMovie[]>)=>{
                return {...state, movies: action.payload, status: 'fulfilled'}
            })
            .addCase(getMoreMoviesThunk.rejected, (state)=>{
                return {...state, status: 'rejected'}
            })
            .addCase(getMoreMoviesThunk.pending, (state)=>{
                return {...state, status: 'loading'}
            })
            .addCase(searchMoviesThunk.fulfilled, (state, action: PayloadAction<Response>) => {
                const { results, allPages } = action.payload
    
                const totalConverted = (allPages && Number(allPages) > 0) ? Number(allPages) : 0
                const booksQtyAtArr = 10
    
                const pageQty = Math.ceil(totalConverted / booksQtyAtArr)
    
                return { ...state, booksFoundByTitle: results, pageQty: pageQty, total: totalConverted, status: 'fulfilled' }
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