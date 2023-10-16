import React from "react";
import Information from "../components/inform_user";
import Sidebar from "../components/sidebar";
import { Link } from 'react-router-dom';
import "./style/Register.css"
import axios from 'axios';
import { useState } from 'react';
import { 
    handleCheckToken 
} from '../components/check_jwt'; 



const Register = () => {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const sidebarStyle = {
        fontFamily: 'Playfair Display, sans-serif',
      };


      const regSubmit = async (e) => {
        e.preventDefault();

         // Проверка паролей на совпадение
         if (password !== confirmPassword) {
            alert("Пароли не совпадают!");
            return;
        }
    
        try{
            const response = await axios.post('http://127.0.0.1:8000/users/', {
                fullname: fullname,
                email: email,
                password: password,
            });

// Проверяем, есть ли токен в ответе от сервера и сохраняем его в localStorage
            const token = response.data.token;
            if (token) {
            localStorage.setItem('token', token);
            console.log('Токен сохранен в localStorage:', localStorage.getItem('token'));
        } else {
            console.log('Токен отсутсвует')
        }

       
        

            console.log('Ответ:', response.data);
            setFullName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

            window.location.replace("/about");


        } catch (error) {
            console.error("Ошибка", error);
            if (error.response && error.response.data) {
                alert(error.response.data.detail);
            } else {
                alert("Произошла неизвестная ошибка.");
            }
        }
    };

    
    return(
        
        <div className="reg_container" style={sidebarStyle}>
    <Sidebar />
    <div className="reg_content">
        <Information />

        <div className="wrapperWelcome">
        <div className="welcomeText">
            <h3>Добро пожаловать!</h3>
            <p>Мы рады видеть вас на нашем сайте и благодарим
            за проявленный интерес и желание стать
            частью нашего увлекательного сообщества!</p>
            <p>Процесс регистрации прост и займет у вас всего несколько минут.
                 Просто заполните форму ниже.</p>
                 <p>Если у вас уже есть аккаунт, <Link to="/enter">войдите!</Link></p>     
        </div>
        </div>
        <form className="registrationForm" onSubmit={regSubmit}>


        <div className="formGroup">
                <label htmlFor="fullname"></label>
                <input className="reg-input"  type="text" id="fullname" value={fullname} onChange={e => setFullName(e.target.value)}  placeholder="Введите ваше имя" required />
            </div>
            
            <div className="formGroup">
                <label htmlFor="email"></label>
                <input className="reg-input" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)}  placeholder="Введите ваш email" required autoComplete="email"  />
            </div>

            <div className="formGroup">
            <label htmlFor="password"></label>
                <input
                    className="reg-input"
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Введите ваш пароль"
                    required
                    autoComplete="new-password"
                />
                <span 
                    className="toggle-password-icon"
                    onClick={() => setPasswordVisible(!isPasswordVisible)}
                >
                    {isPasswordVisible ? "👁️" : "🙈"}
                </span>
            </div>

            <div className="formGroup">
            <label htmlFor="confirmPassword"></label>
                <input
                    className="reg-input"
                    type={isPasswordVisible ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder="Подтвердите ваш пароль"
                    required
                    autoComplete="new-password"
                />
                <span 
                    className="toggle-password-icon"
                    onClick={() => setPasswordVisible(!isPasswordVisible)}
                >
                    {isPasswordVisible ? "👁️" : "🙈"}
                </span>
            </div>

            <button className="button-style" type="submit">Зарегистрироваться</button>

            <button  type="button" onClick={handleCheckToken}>
            Проверить токен
          </button>

          
        </form>

        <footer className="wrapper-footer">
            <div className="footer-content">
                <p>Мы уважаем вашу приватность и обеспечиваем безопасность ваших персональных данных.
                Для подробностей, пожалуйста, ознакомьтесь с нашей Политикой Конфиденциальности.</p>
            </div>

        </footer>
    </div>
    
</div>

    )
    
}

export default Register;