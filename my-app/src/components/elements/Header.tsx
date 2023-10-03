import './header.css'
import { Search } from '../UI/Search/Search'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Drawer } from 'antd';


export const Header =  ()  => {

    const navigate = useNavigate();
    const [burger, setBurger] = useState(false);
    const toggleMenu = (isOpen: boolean) => (e: React.KeyboardEvent | React.MouseEvent) => {
        if(e.type === 'keydown' && ((e as React.KeyboardEvent).key === 'Tab' || (e as React.KeyboardEvent).key === 'Shift')){
            return;
        }
        setBurger(isOpen)
    }
    const navigateToMain = () => {
        navigate('/')
    }

    const Burger = (
        <>
            {/* <div> */}
                {/* <div> */}
                <button onClick={()=>{
                navigateToMain()
                setBurger(false)
                }}>
                </button>
                <button onClick={toggleMenu(false)}>X</button>
                <Search tablet click={toggleMenu(false)}/>
                {/* </div> */}
            {/* </div> */}
        </>
    )

    return (
        <div className='header'>
            <a href="#"><img src="./img/logo.svg"/></a>
            <button onClick={()=>{
                navigateToMain()
            }}></button>
            <Search/>
            <button onClick={toggleMenu(true)}>Menu</button>
            <Drawer open={burger} onClose={toggleMenu(false)}>OAOAOA</Drawer>
        </div>
    )
}