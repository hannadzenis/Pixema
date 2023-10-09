import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getMovies, getMoviesBySearch, getPopularMovies, OneGenre, OneMovie } from "./getMovies";

export type MovieState = {
    movies: OneMovie[],
    genres: OneGenre[],
    userName: string,
    userEmail: string,
    userPassword: string,
    isTouched: boolean,
    favorites: boolean,
}

const initialState: MovieState = { 
    movies: [],
    genres: [],
    userName: '',
    userEmail: '',
    userPassword: '',
    isTouched: false,
    favorites: false,
}

export const getMoviesThunk = createAsyncThunk("movies/getMovies", async ({ search = '' }: { search?: string }) => {
    const movies = search ? await getMoviesBySearch({ 'search': search }) : (await getMovies()).results;
    return movies;
    }
);

export const getPopularThunk = createAsyncThunk("movies/getPopularMovie", async () => {
    const movies = await getPopularMovies();
    return movies;
    }
);

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<OneMovie[]>) => {
            state.movies = action.payload
        },
        toggleFavoritesMovie: (state, action: PayloadAction<number>) => {
            const movie = state.movies.find(movie => movie.id === action.payload)
            if (!movie) return
            movie.favorite = !movie.favorite
        },
        setGenres: (state, action: PayloadAction<OneGenre[]>) => {
            state.genres = action.payload
        },
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload
        },
        setUserEmail: (state, action: PayloadAction<string>) => {
            state.userEmail = action.payload
        },
        setUserPassword: (state, action: PayloadAction<string>) => {
            state.userPassword = action.payload
        },
        toggleFilter: (state, action: PayloadAction<boolean>) => {
            state.isTouched = action.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(getMoviesThunk.fulfilled, (state, action: PayloadAction<OneMovie[]>) => {
            state.movies = action.payload
        })
            .addCase(getPopularThunk.fulfilled, (state, action: PayloadAction<OneMovie[]>) => {
                state.movies = action.payload
            })
    },
})

export const { setGenres, setUserName, setUserEmail, setUserPassword, setMovies, toggleFavoritesMovie,toggleFilter } = moviesSlice.actions
export const moviesReducer = moviesSlice.reducer

















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