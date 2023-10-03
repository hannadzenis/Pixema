import { useState } from 'react';
import { toggleFavoritesMovie } from '../Store/movieSlice';
import { useAppDispatch } from '../Store/store';

type Favorites = {
    movieId: number,
}

export const AddToFavorites = ({ movieId }: Favorites) => {
    const dispatch = useAppDispatch()
    const [isCopied, setIsCopied] = useState(false)
    const [isAdded, setIsAdded] = useState(false)

    setTimeout(function(){
        setIsCopied(false);
        setIsAdded(false);
    }, 3000);

    return (
        <>
            <button className="favorite-button" onClick={() => {
                dispatch(toggleFavoritesMovie(movieId))
                setIsAdded(true)
                }}></button>
            <button className="favorite-button" onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                setIsCopied(true)
            }}></button>
            {isCopied && <p className='popup'>Copied</p>}
            {isAdded && <p className='popup'>Added</p>}
        </>
    )
}