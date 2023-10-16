import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import Django from "../img/django.svg";
import "./Home.css"

const Home = () => {
return (
	<div className="HomePage">
	<header className="HomeHeader">
    <div className="logoContainer">
          <img src={logo} className="HomeLogo" alt="logo" />
          <img src={Django} className="HomeDjango" alt="DjangoLogo" />
        </div>

        <p className="WelcomeP">Created with react and django</p>
	
		<Link to="/about" className="welcomeHead">Войти</Link>

	
    </header>
	</div>
  
);
};

export default Home;
