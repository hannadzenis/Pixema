const DOMAIN = "https://api.themoviedb.org/3";
// const POPULAR = "/movie/popular";
const MOVIES = "/discover/movie";
const SEARCH = "/search/movie"; 
// const GENRES = "/genre/movie/list";


export type SearchMoviesThunkParams = {
    title: string,
    page: number
}

export type Movie = {
    imdbID: number,
    Poster: string,
    Title: string,
    Genre?: string,
    imdbRating?: number,
}

export type OneMovie = {
    budget: number,
    genres: string,
    id: number,
    overview: string,
    poster_path: string,
    release_date: string,
    runtime: number,
    tagline: string,
    title: string,
    vote_average: number,
    favorite: boolean, 
}

export type MovieState = {
    movies: OneMovie[],
    searchInputValue: string, 
    moviesFoundByTitle: OneMovie[],
    allPages: number, 
    page: number, 
    status: string,
}

export type Response = {
    page: number,
    results: OneMovie[],
    allPages: number, 
    allResults: number,
}


export const getMovies = async () => {
    const moviesUrl = new URL(DOMAIN);
    const response = await fetch(moviesUrl);
    const movies: Response = await response.json();
    return movies.results
}

export const getOneMovie = async (mn: string) => {
    const oneMovieUrl = new URL(DOMAIN + MOVIES + `/${mn}`);
    const response = await fetch(oneMovieUrl);
    const movie: OneMovie = await response.json();
    return movie;
};


export const searchMovies = async (title: string, page: number) => {
    const searchTitle = localStorage.getItem('searchTitle')
    localStorage.setItem('searchTitle', title)
    
    const searchMoviesUrl = new URL(DOMAIN + SEARCH + `/${title}` + `/${page}`);
    const response = await fetch(searchMoviesUrl);
    const movies: Response = await response.json();
    return movies
}

// type SearchParams = { search?: string }

// export type OneGenre = {
//     id: number,
//     name: string,
// }

// export type Genres = {
//     genres: OneGenre[],
// }

// const DOMAIN = 'https://api.themoviedb.org/3/discover/movie';
// const GENRES = 'https://api.themoviedb.org/3/genre/movie/list';
// const IdSearch = 'httpss://api.themoviedb.org/3/movie';
// const FINDBYSEARCH = 'https://api.themoviedb.org/3/search/movie';
// const POPULARMOVIES = 'https://api.themoviedb.org/3/movie/popular';


// export const getMovies = async () => {
//     const moviesUrl = new URL(DOMAIN);
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzc1ZDIyMDYyMDY2NGFkZjM5MGZjYTU1NjIwMDA0ZiIsInN1YiI6IjY0N2M3NjVlMGUyOWEyMDExNmFkNDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihZhctfHnZABpjMVWFHZMMvNEZG6rMdJ5plj0SAbsag'
//         }
//     }
//     const response = await fetch(moviesUrl, options);
//     const movies: Response = await response.json();
//     return movies;
// }

// export const getMovie = async (movieId: string) => {
//     const moviesUrl = new URL(IdSearch + '/' + movieId);
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzc1ZDIyMDYyMDY2NGFkZjM5MGZjYTU1NjIwMDA0ZiIsInN1YiI6IjY0N2M3NjVlMGUyOWEyMDExNmFkNDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihZhctfHnZABpjMVWFHZMMvNEZG6rMdJ5plj0SAbsag'
//         }
//     };
//     const response = await fetch(moviesUrl, options);
//     const result: OneMovie = await response.json();
//     return result
// }

// export const getMoviesBySearch = async ({search}: SearchParams) => {
//     const moviesUrl = new URL(FINDBYSEARCH);
//     if (search) moviesUrl.searchParams.set("query", String(search));
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzc1ZDIyMDYyMDY2NGFkZjM5MGZjYTU1NjIwMDA0ZiIsInN1YiI6IjY0N2M3NjVlMGUyOWEyMDExNmFkNDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihZhctfHnZABpjMVWFHZMMvNEZG6rMdJ5plj0SAbsag'
//         }
//     };
//     const response = await fetch(moviesUrl, options);
//     const result: Response = await response.json();
//     return result.results
// }

// export const getPopularMovies = async () => {
//     const moviesUrl = new URL(POPULARMOVIES);
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzc1ZDIyMDYyMDY2NGFkZjM5MGZjYTU1NjIwMDA0ZiIsInN1YiI6IjY0N2M3NjVlMGUyOWEyMDExNmFkNDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihZhctfHnZABpjMVWFHZMMvNEZG6rMdJ5plj0SAbsag'
//         }
//     };
//     const response = await fetch(moviesUrl, options);
//     const result: Response = await response.json();
//     return result.results
// }

// export const getGenres = async () => {
//     const genresUrl = new URL(GENRES)
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzc1ZDIyMDYyMDY2NGFkZjM5MGZjYTU1NjIwMDA0ZiIsInN1YiI6IjY0N2M3NjVlMGUyOWEyMDExNmFkNDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihZhctfHnZABpjMVWFHZMMvNEZG6rMdJ5plj0SAbsag'
//         }
//     };
//     const response = await fetch(genresUrl, options);
//     const result: Genres = await response.json();
//     return result.genres
// }