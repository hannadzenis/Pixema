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
        <div className='wrapper-auth'>
            <div className='container'>
            <Title />
            <form className='auth'>
                <legend className='auth-title'>Sign In</legend>
                <label className='auth-text'>Email</label>
                <input className='auth-input' type='text' placeholder="Your Email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                <label className='auth-text'>Password</label>
                <input className='auth-input' type='password' placeholder="Your Password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                <button className='auth-button' onClick={(e) =>{
                    e.preventDefault();
                    email===userEmail && password===userPassword ? navigate('/movies') : alert('Wrong email or password');
                }}>Sign In</button>
                <p className='auth-footer'>Don't have an account? <Link className='auth-link' to='/reg'>Sign Up</Link></p>
            </form>
            </div>
        </div>
    )
}