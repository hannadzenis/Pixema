import { useEffect, useState } from 'react';
import { Movie, getMovies } from './getMovies';
import { RenderMovies } from './RenderMovies';

type SearchProps = {
	searchInputValue: string,
	// favourites: DetailedMovie[]
}

export const Movies = ({ searchInputValue}: SearchProps) => {

    const [movies, setMovies] = useState<Movie[]>([])
    const [searchValue, setSearchValue] = useState<string>('')

    // useEffect(() => { getMovies().then((mov) => setMovies(mov))}, [])
    useEffect(() => {
		if (searchInputValue) {
			setSearchValue(searchInputValue)
		} else {
			setSearchValue('')
			setMovies([])
			// navigate('/')
		}
	}, [searchInputValue])

    // useEffect(() => { getMovies().then((movie) => setMovies(movie)) }, [searchValue])

    return (<>
        <div className='movies__wrapper'>
            {movies.map((item) => <RenderMovies movie={item} />)}
        </div>
    </>)
}
