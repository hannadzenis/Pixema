import { useEffect, useState } from 'react';
import { Movie, getMovies } from './getMovies';
import { RenderMovies } from './RenderMovies';

export const Movies = () => {

    const [movies, setMovie] = useState<Movie[]>([])

    useEffect(() => { getMovies().then((film) => setMovie(film)) }, [])

    return (<>
        {movies.map((item) => <RenderMovies movie={item} />)}
    </>)
}
