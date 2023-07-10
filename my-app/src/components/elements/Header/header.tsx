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
        console.log('ao')
    }
    return (
        <div className='header'>
            <a href="#">
                <img src="./img/logo.svg"/>
            </a>
            <Search username={username} clickSearch={getSearchValue} />
            <Profile />
        </div>
    )
}