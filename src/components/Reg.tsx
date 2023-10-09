import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAppDispatch } from "../Store/store"
import { Title } from "./Title"
import { setUserEmail, setUserName, setUserPassword } from "../Store/movieSlice"
import './styles/authreg.css'
import './styles/authreg.css';


export const Registration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <div className='auth'>
            <div className='black-filter'>
                <Title />
                <form className='auth__form'>
                    <legend className='auth__form__title'>Sign Up</legend>
                    <label className='auth__form__text'>Name</label>
                    <input className='auth__form__input' type='text' placeholder="Your Name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                    <label className='auth__form__text'>Email</label>
                    <input className='auth__form__input' type='text' placeholder="Your Email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    <label className='auth__form__text'>Password</label>
                    <input className='auth__form__input' type='password' placeholder="Your Password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                    <label className='auth__form__text'>Confirm password</label>
                    <input className='auth__form__input' type='password' placeholder="Your Password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }}></input>
                    <button className='auth__form__button' onClick={(e) => {
                        e.preventDefault();
                        dispatch(setUserName(name));
                        dispatch(setUserEmail(email));
                        if (password === confirmPassword) {
                            dispatch(setUserPassword(password));
                            navigate('/auth')
                        }
                        else alert('Password mismatch')
                    }}>Sign Up</button>
                    <p className='auth__form__footer'>Already have an account? <Link className='auth__form__link' to='/auth'>Sign In</Link></p>
                </form>
            </div>
        </div>
    )
}