import React from 'react';
import './sidebar.css';
import logo_sidebar2 from '../img/logo_sidebar2.png'
import home from '../img/home.svg'
import resta from '../img/resta.svg'
import { Link } from 'react-router-dom';


function Sidebar() {
    const sidebarStyle = {
        fontFamily: 'Playfair Display, sans-serif',
      };
    return (
      <div className="sidebar" style={sidebarStyle}>
        <div className="sidebar-header">
          <img src={logo_sidebar2} alt="logo_sidebar2" className='logo_sidebar' />
          {/* <img src={manu_nav} alt="menu_nav" className='menu_nav' /> */}
          <div className="text-container">
            <h3>Talentico</h3>
            <p>Jessica's Team</p>
          </div>
        </div>
        <ul className="list-group">
        <Link className='link' to="/">
          <li className="list-group-item">
            
            
            <img src={home} alt="home" className='logo_home' />
             <span> Home</span>
             
             </li>
             </Link>
          <li className="list-group-item">
          <img src={resta} alt="resta" className='logo_home' /> 
          <span> Рестораны</span>
          </li>

          <li className="list-group-item">
          <img src={home} alt="home" className='logo_home' /> 
          <span> Restaurants</span>
          </li>
        </ul>
      </div>
    );
  }
  

export default Sidebar;