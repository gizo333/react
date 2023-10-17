import React, { useState } from 'react';
import axios from 'axios';
import "./style/ConfirmPass.css"

function ConfirmPass() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Пароли не совпадают');
            return;
        }
      
        try {
            const token = new URLSearchParams(window.location.search).get('token');
            const formData = new FormData();
        formData.append('token', token);
        formData.append('new_password', password);
            console.log(token);
            const response = await axios.post('http://127.0.0.1:8000/reset-password/', formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Ошибка при сбросе пароля');
        }
    };

    return (
        <div className='head1'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Новый пароль:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Подтвердите пароль:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Сбросить пароль</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default ConfirmPass;
