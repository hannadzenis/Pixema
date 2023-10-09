import { setMovies, setYearSorting} from "../Store/movieSlice"
import { useAppSelector, useAppDispatch } from "../Store/store"
import './styles/filter.css'

export const Filter = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.movies.movies);

    const yearArr = Array.from(movies);
    const sortByHighYear = yearArr.sort((a, b) => {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        const result = +dateB - +dateA;
        return result
    });

    const dateArr = Array.from(movies);
    const sortByLowYear = dateArr.sort((a, b) => {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        const result = +dateA - +dateB;
        return result
    });

    const ratHighArr = Array.from(movies)
    const sortByHighRating = ratHighArr.sort((a, b) => {
        const result = +(b.vote_average) - +(a.vote_average);
        return result
    });

    const ratLowArr = Array.from(movies)
    const sortByLowRating = ratLowArr.sort((a, b) => {
        const result = +(a.vote_average) - +(b.vote_average);
        return result
    });

    return (
        <>
                <div className="filter">
                    Sort by
                    <div>
                        <button className="filter__item" onClick={() => {
                            dispatch(setYearSorting(sortByHighYear))
                        }}>Newest</button>
                    </div>
                    <div>
                        <button className="filter__item" onClick={() => {
                            dispatch(setYearSorting(sortByLowYear))
                        }}>Oldest</button>
                    </div>
                    <div>
                        <button className="filter__item" onClick={() => {
                            dispatch(setMovies(sortByHighRating))
                        }}>Rating ▼</button>
                    </div>
                    <div>
                        <button className="filter__item" onClick={() => {
                            dispatch(setMovies(sortByLowRating))
                        }}>Rating ▲</button>
                    </div>
                </div>
        </>
    )
}
