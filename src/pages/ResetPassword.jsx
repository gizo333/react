import React, { useState } from 'react';
import axios from 'axios';
import "./style/ResetPassword.css"
import Information from "../components/inform_user";
import Sidebar from "../components/sidebar";
import { Spin } from 'antd';


const PasswordRecovery = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // Добавляем состояние для отслеживания состояния загрузки

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Устанавливаем состояние загрузки в true перед отправкой запроса

        try {
            const response = await axios.post('http://127.0.0.1:8000/send/', {
                email: email,
                subject: 'Восстановление пароля',
                body: ''
            });

            if (response.data.message) {
                setMessage(response.data.message);
            }
        } catch (error) {
            if (error.response && error.response.status === 444) {
                setMessage('Такого email не существует.');
            } else {
                setMessage('Произошла ошибка. Попробуйте позже.');
            }
        } finally {
            setLoading(false); // Устанавливаем состояние загрузки в false после завершения запроса
        }
    }

    const sidebarStyle = {
        fontFamily: 'Playfair Display, sans-serif',
    };

    return (
        <div className="enter-container" style={sidebarStyle}>
            <Sidebar />
            <div className="enter-content" >
                <Information />
                <form className="enterForm" onSubmit={handleSubmit}>
                {message && <p>{message}</p>}
                    <div className="formGroup">
                        <input className="reg-input"
                            type="email"
                            placeholder="Введите ваш email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <button className="button-style" type="submit">Восстановить пароль</button>
                    {loading && <Spin size="large" />}
                </form>
                
                
            </div>
        </div>
    );
}

export default PasswordRecovery;