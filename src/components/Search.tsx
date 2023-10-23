import { useState } from 'react';
import { getMoviesThunk } from '../Store/movieSlice';
import { useAppDispatch } from '../Store/store';
import './styles/header.css'

export const Search = () => {
    const [searchResult, setSearchResult] = useState('')
    const dispatch = useAppDispatch()

    return (
        <div className='search'>
            <input type='search' placeholder="Search..." value={searchResult} onChange={(e) => {
                setSearchResult(e.currentTarget.value)
                dispatch(getMoviesThunk({ search: e.currentTarget.value }))
            }}></input>
        </div>
    )
}