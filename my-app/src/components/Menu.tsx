import { Link } from 'react-router-dom';

export const Menu = () => {

    return (
        <div>
            <ul className='menu'>
                <Link to='/movies' className='menu-item'><p>Home</p></Link>
                <Link to='/popular' className='menu-item'><p>Trends</p></Link>
                <Link to='/favorite' className='menu-item'><p>Favorites</p></Link>
                <li className='menu-item'><p>Settings</p></li>
            </ul>
        </div>
    )
}