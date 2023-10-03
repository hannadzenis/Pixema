import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../Store/store";
import { setSearchInput } from "../../../Store/movies";

export type SearchProps = {
    tablet?: boolean,
    click?: (event: React.MouseEvent) => void
}

export const Search = ({tablet, click}: SearchProps) => {
	const searchInputValue = useAppSelector(state => state.movies.searchInputValue)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (click) {
			click(e)
		}
		if (searchInputValue) {
			navigate(`/search/${searchInputValue}`)
			dispatch(setSearchInput(''))
		}else navigate('/')
	}
	const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		dispatch(setSearchInput(e.target.value))
	}
		return(
			<div className='search'>
				<input type='search' placeholder='Search' value={searchInputValue} onChange={handleInput}></input>
				<button onClick={handleSearch}>HANDLESEARCH</button>
			</div>
		)
	}
