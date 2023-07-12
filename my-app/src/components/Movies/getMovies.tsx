export const DOMAIN = " http://www.omdbapi.com/?i=tt3896198&apikey=da2c0b84";

export type Movie = {
    imdbID: number,
    Poster: string,
    Title: string,
    Genre?: string,
    imdbRating?: number,
}

export const getMovies = async () => {
    const moviesUrl = new URL(DOMAIN);
    const response = await fetch(moviesUrl);
    const movies = await response.json();
    // console.log([movies.data.movies])
    // const films = movies.Search;
    // console.log(films)
    return [movies];
}