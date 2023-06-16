const DOMAIN = "http://www.omdbapi.com";
const MOVIES = "/?i=tt3896198&apikey=da2c0b84";

///?apikey=[YOUR_KEY]&

export type Movie = {
    id: number;
    Poster: string;
    Title: string,
    Genre: string,
    imdbRating: string,
}

export const getMovies = async () => {
    const moviesUrl = new URL(DOMAIN+MOVIES);
    const response = await fetch(moviesUrl);
    const movies = await response.json();
    return [movies];
}
