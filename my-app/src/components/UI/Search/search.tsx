import { ChangeEvent, useState } from 'react';
import { DOMAIN } from '../../Movies/getMovies';

const API_KEY = "da2c0b84"

type Props = {
    searchString: string,
    // event: ChangeEvent, 
}

export const Search = ({ searchString}: Props) => {
    const [search, setSearch] = useState('');
    const [timeoutId, setTimeoutId] = useState();
    // console.log(search)
    const fetchData = async() => {
        const response = await fetch(DOMAIN+`/?s=${searchString}&apikey=${API_KEY}`)
        console.log(response)
    }
    const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timeoutId);
        setSearch(event.currentTarget.value);
        const timeout = setTimeout(()=> fetchData(event.currentTarget.value), 500);
        setTimeoutId(timeout)
    }

    // const handleSearch = () => {
    //     // console.log('Component Search: ', search);
    //     clickSearch(search);
    // }

    return (
        <div className='search'>
            <input type="text" placeholder='Search' value={search} onChange={onTextChange}/>
            {/* <button onClick={handleSearch}>Search</button> */}
        </div>
    )
}

function updateTimeout(timeout: NodeJS.Timeout) {
    throw new Error('Function not implemented.');
}
function updateSearch(value: any) {
    throw new Error('Function not implemented.');
}

