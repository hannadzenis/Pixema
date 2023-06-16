import { useEffect, useState } from 'react';
import { Movie, getMovies } from './getMovies';
import { RenderMovies } from './RenderMovies';

export const Movies = () => {

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => { getMovies().then((mov) => setMovies(mov)) }, [])

    return (<>
        <div className='movies__wrapper'>
            {movies.map((item) => <RenderMovies movie={item} />)}
        </div>
    </>)
}
