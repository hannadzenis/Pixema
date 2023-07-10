import { useState } from 'react';

type Props = {
    username?: string,
    clickSearch: (inputValue: string) => void
}

export const Search = ({ username, clickSearch }: Props) => {
    const [search, setSearch] = useState('');
    // console.log(search)

    const handleSearch = () => {
        // console.log('Component Search: ', search);
        clickSearch(search);
     }

    return (
        <div className='search'>
            <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.currentTarget.value)}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}