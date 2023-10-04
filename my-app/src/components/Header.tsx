import { useState } from "react"
import { Search } from "./Search"
import './styles/header.css'
import { Title } from "./Title"
import { User } from "./User"

type Props = {
    touched?: boolean,
    handleClick: (isTouched: boolean) => void
}

export const Header = ({ touched, handleClick }: Props) => {
    // const [isTouched, setIsTouched] = useState(!touched)

    // const click = () => {
    //     setIsTouched(!isTouched)
    //     handleClick(!!isTouched)
    // }

    return (
        <div className='header__wrapper'>
            {/* <Title /> */}
            <Search />
            <User />
            {/* <button className='header-button' onClick={click}>
                {isTouched ? <></> :
                    <span className='header-close-span'>✖</span>}
            </button> */}
        </div>
    )
}