import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Information from "../components/inform_user";
import Sidebar from "../components/sidebar";
import "./style/EnterPage.css"



const EnterPage = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await fetch('http://127.0.0.1:8000/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (response.ok) {
                // Сохраняем токен или другие данные в localStorage или в состояние
                localStorage.setItem('token', data.token);
                window.location.replace("/about");
            } else if (response.status === 421) {
                setMessage('Неверный пароль!');
            } else {
                console.error(data.message || "Ошибка при входе");
            }
        } catch (error) {
            console.error("Ошибка при выполнении запроса:", error);
        }

        
    }


    const sidebarStyle = {
        fontFamily: 'Playfair Display, sans-serif',
      };
    return(
        <div className="enter-container" style={sidebarStyle}>
            <Sidebar />

            <div className="enter-content">
            <Information />

            <div className="wrapperWelcome">
        <div className="welcomeText">
            <h3>Добро пожаловать обратно!</h3>
            <p>Мы рады видеть вас снова! Введите свои учетные данные ниже, чтобы войти в свой аккаунт.</p>
            <p>Если у вас еще нет аккаунта, <Link to="/register">зарегистрируйтесь</Link>!</p>
        </div>
        </div>

            <form className="enterForm" onSubmit={handleSubmit}>
            {message && <p>{message}</p>} 
                <div className="formGroup">
                   
                <label htmlFor="email"></label>
                <input className="reg-input" type="email" id="email"   placeholder="Введите ваш email" required autoComplete="email"  />
                </div>

                <div className="formGroup">
                <label htmlFor="password"></label>
                <input className="reg-input" type="password" id="password"  placeholder="Введите ваш пароль" required autoComplete="new-password" />
            </div>

            
            <button className="button-style" type="submit">Войти</button>
            
            <Link to= "/reset">
            <button className="button-style" type="submit">Забыли пароль?</button>
            </Link>
            </form>
            </div>
        </div>
    )
}

export default EnterPage;