const DOMAIN = "https://yts.mx/api/v2/list_movies.json";

export type Movie = {
    id: number,
    background_image: string,
    title: string,
    genres: string,
    rating: number,
}

export const getMovies = async () => {
    const moviesUrl = new URL(DOMAIN);
    const response = await fetch(moviesUrl);
    const movies = await response.json();
    const films = movies.data.movies;
    return films;
}