import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../Store/store";
import { setSearchInput } from "../../../Store/movies";

export type SearchInputProps = {
    tablet?: boolean,
    onSideBarClick?: (event: React.MouseEvent) => void
}

export const SearchInput = ({tablet, onSideBarClick}: SearchInputProps) => {
	const searchInputValue = useAppSelector(state => state.movies.searchInputValue)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (onSideBarClick) {
			onSideBarClick(e)
		}
		if (searchInputValue) {
			navigate(`/search/${searchInputValue}`)
			dispatch(setSearchInput(''))
		}else navigate('/')
	}
	const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		dispatch(setSearchInput(e.target.value))
	}
	if (tablet) {
		return(
			<div className='search'>
				<input type='search' placeholder='Search' value={searchInputValue} onChange={handleInput}></input>
				<button onClick={handleSearch}></button>
			</div>
		)
	}
}