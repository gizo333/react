import React from "react";
import { Link } from 'react-router-dom';
import Information from "../components/inform_user";
import Sidebar from "../components/sidebar";
import "./AboutPage.css"

const AboutPage = () => {
  const sidebarStyle = {
    fontFamily: 'Playfair Display, sans-serif',
  };
  return (
    <div className="about-container" style={sidebarStyle}>
      <Sidebar />
     
      <div className="content">
      <Information />
        <div className="wrapper">
        <div className="hello">
        <h2>О нас</h2>
        <p className="text">
        Добро пожаловать на наш сайт, посвященный ресторанам 
        и заведениям общественного питания в Москве и других городах
         России! Мы собрали для вас обширную информацию о разнообразных местах,
         где вы можете насладиться вкусной едой и приятной атмосферой.
        </p>
        </div>
        {/* <div className="new">
          <p>еще один контейнер</p>
        </div> */}
        </div>
        <Link to="/table" className="reg">Регистрация</Link>
      </div>
    </div>
  );
}

export default AboutPage;
