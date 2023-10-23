import { Link } from "react-router-dom";
import './styles/header.css';
import { useAppSelector } from "../Store/store";


export const User = () => {
    const username = useAppSelector(state => state.movies.userName)

    if (username) {
        const nameSurnameArr = username.split(' ');
        const userInitials = (nameSurnameArr[0][0] + nameSurnameArr[1][0]).toUpperCase();
        return (
            <div className='profile__wrapper'>
                <p className='profle__initials'>{userInitials}</p>
                <p className='profle__name'>{username}</p>
            </div>
        )
    }
    else
        return (
            <div className='profile__wrapper'>
                <Link className='profle__name' to='/auth'>Sign in</Link>
            </div>
        )

}