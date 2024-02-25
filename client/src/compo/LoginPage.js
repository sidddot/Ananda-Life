import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data === '0') {
                    console.log('Login successful');
                    // Redirect to '/' page and pass the username as a prop
                    navigate('/', { state: { username } });
                } else {
                    console.log('Invalid credentials');
                }
            } else {
                console.log('Error during login:', response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="text-center m-5-auto" style={{ maxWidth: '400px' }}>
            <h2>Sign in to us</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username or email address</label><br />
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <label className="right-label">Forget password?</label><br />
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <button type="submit" id="sub_btn">
                        Login
                    </button>
                </div>
            </form>

            <footer>
                <p>
                    First time? <a href="/register">Create an account</a>.
                </p>
                <p>
                    <a href="/">Back to Homepage</a>.
                </p>
            </footer>
        </div>
    );
};

export default LoginPage;
    