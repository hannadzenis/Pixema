import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux/es/exports'
import { authReducer } from './auth'
import { moviesReducer } from './movies'
// import { genresReducer } from './genres'
import { filtersReducer } from './filter'

export const store = configureStore({
    reducer: {
        // auth: authReducer,
        movies: moviesReducer,
        // genres: genresReducer,
        // filter: filtersReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector