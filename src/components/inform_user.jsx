import React from 'react';
import './inform_user.css';
import search from '../img/search.svg'
import alarm from '../img/alarm.svg'
import enter from '../img/enter.svg'
import menu from '../img/menu.svg'
import exit from '../img/exit.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { isTokenPresent } from './check_jwt';
import { 
    removeTokenFromLocalStorage 
} from '../components/check_jwt'; 




const Information = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return(
        <div className='head'>
            <div className='search'>
                <img src={search} alt="search" className='logo' />
            </div>
            <div className='alarm'>
            {isTokenPresent() ? (
                    <img src={alarm} alt="alarm" className='logo' />
                ) : (
                    <Link className='enter-link' to="/enter">
                        <img src={enter} alt="enter" className='logo' />
                    </Link>
                )}
            </div>
            {isTokenPresent() && (
            <div className='setting'>
            
                    <img src={menu} alt="menu" className='logo' onClick={toggleMenu} />
               
                {isMenuOpen && (
                    <div className='menu'>
                        <ul>
                            <li>Меню пункт 1</li>
                            <li>Меню пункт 2</li>
                            <li>Меню пункт 3</li>
                         </ul>
                    </div>
                )
                }
            </div>
             )}

            {!isTokenPresent() && (
             <div className='register'>
                <Link className='enter-link' to="/Register">
                <p>Регистрация</p>
                </Link>
             </div> 
              )}

        {isTokenPresent() && (
            <div className='exit' onClick={removeTokenFromLocalStorage}>
            <img src={exit} alt="exit" className='logo' />
            </div>
        )}

        </div>
    )
}

export default Information;