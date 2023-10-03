import { useState } from 'react';
import { getMoviesThunk, toggleFilter } from '../Store/movieSlice';
import { useAppDispatch } from '../Store/store';
import './styles/header.css'

export const Search = () => {
    const [searchResult, setSearchResult] = useState('')
    const dispatch = useAppDispatch()

    return (
        <div className='search__wrapper'>
            <input className='search-input' type='search' placeholder="Search..." value={searchResult} onChange={(e) => {
                setSearchResult(e.currentTarget.value)
                dispatch(getMoviesThunk({ search: e.currentTarget.value }))
            }}></input>
            <button className='sort__button' onClick={() => {
                dispatch(toggleFilter(true))
            }}>
            </button>
        </div>
    )
}