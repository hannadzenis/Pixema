import React from 'react';
import './header.css'
import { Search } from '../../UI/Search/search';
import { Profile } from './profile';

export const Header = () => {
    return (
        <div className='header'>
            <a href="#">
                <img src="./img/logo.svg"/>
            </a>
            <Search />
            <Profile />
        </div>
    )
}