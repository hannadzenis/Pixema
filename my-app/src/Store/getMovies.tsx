const DOMAIN = "https://api.themoviedb.org/3";
const MOVIES = "/discover/movie";
const SEARCH = "/search/movie"; 


export type SearchMoviesThunkParams = {
    original_title: string,
    page: number
}

export type OneMovieShort  = {
    original_title: string,
    genres: string,
    poster_path: string,
    mn: string,
}

export type OneMovie = {
    error: string,
    original_title: string,
    genres: string,
    overview: string,
    poster_path: string,
    release_date: string,
    mn: string,
    vote_average: string,
}

export type MovieState = {
    movies: OneMovieShort[],
    description: OneMovie,
    searchInputValue: string, 
    moviesFoundByTitle: OneMovieShort[],
    allMovies: number, 
    page: number, 
    pageNum: number;
    status: string,
}

export type Response = {
    error: string,
    results: OneMovieShort[],
    total: string,
    page?: string,
}


export const getMovies = async () => {
    const moviesUrl = new URL(DOMAIN+MOVIES);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2RmMTlkN2I4OGJkNTFlMzVjNmY2MzAyZjg2MzA0OCIsInN1YiI6IjY1MGVkOGE5M2E0YTEyMDBmZjRlMmY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VwMo2KDieYVg290GgPyuKep9xzTvnYf2E1eUUb_ylmw'
        }
    };
    const response = await fetch(moviesUrl, options);
    const movies: Response = await response.json();
    return movies.results
}

export const getOneMovie = async (mn: string) => {
    const oneMovieUrl = new URL(DOMAIN+MOVIES+`/${mn}`);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2RmMTlkN2I4OGJkNTFlMzVjNmY2MzAyZjg2MzA0OCIsInN1YiI6IjY1MGVkOGE5M2E0YTEyMDBmZjRlMmY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VwMo2KDieYVg290GgPyuKep9xzTvnYf2E1eUUb_ylmw'
        }
    };
    const response = await fetch(oneMovieUrl, options);
    const movie: OneMovie = await response.json();
    return movie;
};


export const searchMovies = async (title: string, page: number) => {
    localStorage.getItem('searchTitle')
    localStorage.setItem('searchTitle', title)
    
    const searchMoviesUrl = new URL(DOMAIN+SEARCH + `/${title}`+ `/${page}`);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2RmMTlkN2I4OGJkNTFlMzVjNmY2MzAyZjg2MzA0OCIsInN1YiI6IjY1MGVkOGE5M2E0YTEyMDBmZjRlMmY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VwMo2KDieYVg290GgPyuKep9xzTvnYf2E1eUUb_ylmw'
        }
    };
    const response = await fetch(searchMoviesUrl, options);
    const movies: Response = await response.json();
    return movies.results;
}
