import React from 'react';
import './header.css'
import { Profile } from './profile';
import { Search } from '../../UI/Search/Search';

type Props = {
    username?: string,
    clickSearch: (inputValue: string) => void
}

export const Header = ({username, clickSearch}:Props) => {
    const getSearchValue = (inputValue: string) => {
        clickSearch(inputValue)
    }
    return (
        <div className='header'>
            <a href="#">
                <img src="./img/logo.svg"/>
            </a>
            <Search searchString={''}/>
            <Profile />
        </div>
    )
}