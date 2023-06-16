const DOMAIN =  'http://www.omdbapi.com/?i=tt3896198&apikey=da2c0b84';

export type Movie = {
    id: number,
    title: string,
    year: string,
    genre: string,
    image: string,
};

type MoviesResponse = {
    count: number;
    next: string;
    previous?:string,
    results: Movie[];
};

export const getMovies = async () => {
    const response = await fetch(DOMAIN);
    const movies: MoviesResponse  = await response.json();
    return movies.results;
};