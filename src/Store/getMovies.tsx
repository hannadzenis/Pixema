const MOVIES = 'https://api.themoviedb.org/3/discover/movie';
const GENRES = 'https://api.themoviedb.org/3/genre/movie/list';
const FINDBYID = 'https://api.themoviedb.org/3/movie';
const FINDBYSEARCH = 'https://api.themoviedb.org/3/search/movie';
const POPULARMOVIES = 'https://api.themoviedb.org/3/movie/top_rated';

export type OneMovie = {
    genre_ids: number[],
    id: number,
    title: string,
    poster_path: string,
    vote_average: number,
    release_date: string,
    favorite: boolean,
};

export type Response = {
    page: number,
    results: OneMovie[],
    total_pages: number,
    total_results: number,
};

export type OneMoviePage = {
    budget: number,
    genres: OneGenre[],
    id: number,
    overview: string,
    poster_path: string,
    production_companies: ProductionCompanies[],
    production_countries: ProductionCountries[],
    release_date: string,
    runtime: number,
    tagline: string,
    title: string,
    vote_average: number,
}

export type ProductionCompanies = { name: string }

export type ProductionCountries = { name: string }

export type OneGenre = {
    id: number,
    name: string
}

export type Genres = {
    genres: OneGenre[],
}

export type OneMovieWithGenre = OneMovie & { genre: (string | undefined)[] };

type SearchParams = { search?: string }


export const getMovies = async (page?: number, genre?: string, vote_average?:number) => {
    const moviesUrl = new URL(MOVIES);
    if (page) moviesUrl.searchParams.set("page", String(page));
    if (genre) moviesUrl.searchParams.set("with_genres", String(genre));
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2RmMTlkN2I4OGJkNTFlMzVjNmY2MzAyZjg2MzA0OCIsInN1YiI6IjY1MGVkOGE5M2E0YTEyMDBmZjRlMmY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VwMo2KDieYVg290GgPyuKep9xzTvnYf2E1eUUb_ylmw'
        }
    };
    const response = await fetch(moviesUrl, options);
    const result: Response = await response.json();
    return result
};


export const getOneMovie = async (movieId: string) => {
    const moviesUrl = new URL(FINDBYID + '/' + movieId);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2RmMTlkN2I4OGJkNTFlMzVjNmY2MzAyZjg2MzA0OCIsInN1YiI6IjY1MGVkOGE5M2E0YTEyMDBmZjRlMmY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VwMo2KDieYVg290GgPyuKep9xzTvnYf2E1eUUb_ylmw'
        }
    };
    const response = await fetch(moviesUrl, options);
    const result: OneMoviePage = await response.json();
    return result
}

export const getGenres = async () => {
    const genresUrl = new URL(GENRES)
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2RmMTlkN2I4OGJkNTFlMzVjNmY2MzAyZjg2MzA0OCIsInN1YiI6IjY1MGVkOGE5M2E0YTEyMDBmZjRlMmY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VwMo2KDieYVg290GgPyuKep9xzTvnYf2E1eUUb_ylmw'
        }
    };

    const response = await fetch(genresUrl, options);
    const result: Genres = await response.json();
    return result.genres
}

export const getMoviesBySearch = async ({ search }: SearchParams) => {
    const moviesUrl = new URL(FINDBYSEARCH);
    if (search) moviesUrl.searchParams.set("query", String(search));
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2RmMTlkN2I4OGJkNTFlMzVjNmY2MzAyZjg2MzA0OCIsInN1YiI6IjY1MGVkOGE5M2E0YTEyMDBmZjRlMmY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VwMo2KDieYVg290GgPyuKep9xzTvnYf2E1eUUb_ylmw'
        }
    };

    const response = await fetch(moviesUrl, options);
    const result: Response = await response.json();
    return result.results
}

export const getPopularMovies = async () => {
    const moviesUrl = new URL(POPULARMOVIES);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2RmMTlkN2I4OGJkNTFlMzVjNmY2MzAyZjg2MzA0OCIsInN1YiI6IjY1MGVkOGE5M2E0YTEyMDBmZjRlMmY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VwMo2KDieYVg290GgPyuKep9xzTvnYf2E1eUUb_ylmw'
        }
    };

    const response = await fetch(moviesUrl, options);
    const result: Response = await response.json();
    return result.results
}
