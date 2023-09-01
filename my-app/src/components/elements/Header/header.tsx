import { SearchInput } from '../../UI/Search/Search'
import './header.css'
// import { Search } from '../../UI/Search/Search';

type HeaderProps = {
	handleSearch: (searchInputValue: string) => void,
}

export const Header =  ({handleSearch,}: HeaderProps)  => {

    return (
        <div className='header'>
            <a href="#">
                <img src="./img/logo.svg"/>
            </a>
            <SearchInput/>
        </div>
    )
}