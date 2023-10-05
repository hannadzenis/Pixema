import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAppSelector } from '../Store/store'
import { Title } from './Title'

export const Authorization = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userEmail = useAppSelector(state => state.movies.userEmail)
    const userPassword = useAppSelector(state => state.movies.userPassword)

    const navigate = useNavigate()

    return (
        <div className='auth'>
            <div className='black-filter'>
            <Title />
            <form className='auth__form'>
                <legend className='auth__form__title'>Sign In</legend>
                <label className='auth__form__text'>Email</label>
                <input className='auth__form__input' type='text' placeholder="Your Email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                <label className='auth__form__text'>Password</label>
                <input className='auth__form__input' type='password' placeholder="Your Password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                <button className='auth__form__button' onClick={(e) =>{
                    e.preventDefault();
                    email===userEmail && password===userPassword ? navigate('/movies') : alert('Wrong email or password');
                }}>Sign In</button>
                <p className='auth__form__footer'>Don't have an account? <Link className='auth__form__link' to='/reg'>Sign Up</Link></p>
            </form>
            </div>
        </div>
    )
}