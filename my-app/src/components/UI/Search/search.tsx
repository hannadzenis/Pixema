import React, { useState } from 'react';
import { Filters } from '../../elements/Header/filters';

export const Search = () => {
    const [search, setSearch] = useState('');

    return (
        <div className='search'>
            <input type="text" placeholder='Search'/>
            {/* <Filters/> */}
        </div>
    )
}