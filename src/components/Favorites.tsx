import { useRef } from 'react';
import './styles/onemovie.css'
import useLocalStorage from 'react-use-localstorage';

export type Favorites = {
    movieId?: number,
    movie: {},
}

export const AddToFavorites = ({ movie, movieId }: Favorites) => {

    const [storageItem, setStorageItem] = useLocalStorage(
        'Favourites',
        JSON.stringify([]),
    )
    const storagedArray = useRef(JSON.parse(storageItem))
    const isFavourited = storagedArray.current.includes(movie)

    const handleToggleFavourite = () => {
        if (!isFavourited) {
            storagedArray.current.push(movie)
            setStorageItem(JSON.stringify(storagedArray.current))
        } else {
            const indexFavouritedId = storagedArray.current.indexOf(movie)
            storagedArray.current.splice(indexFavouritedId, 1)
            setStorageItem(JSON.stringify(storagedArray.current))
            }
    }

    return (
        <>
            <button className="addFav" style={{
                backgroundColor: isFavourited  ? 'rgb(68, 47, 100)' : '',
                fill: isFavourited  ? 'rgb(176, 163, 197)' : '',
            }} onClick={() => {
                handleToggleFavourite()
                }}>
                <svg viewBox="0 0 24 20" width="25" height="25" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z"></path> </g></svg>
            </button>
        </>
    )
}