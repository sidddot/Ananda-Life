import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        user_name: '', email: '', password: '', age: '', gender: '', height: '', weight: '', diabetic: '', goal: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Assuming your backend sends a success message upon successful registration
            if (response.ok) {
                const data = await response.json();
                if (data === 'User signed up successfully') {
                    // Redirect to login page upon successful registration
                    navigate('/login');
                    console.log('Registration successful');
                } else {
                    console.log('Registration failed');
                }
            } else {
                console.log('Error during registration:', response.statusText);
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <br />
            <br />
            <h5>Create your personal account</h5>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="user_name">Username</label><br />
                    <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email address</label><br />
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                 <div>
                    <label htmlFor="age">Age</label><br />
                    <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label><br />
                    <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="height">Height</label><br />
                    <input type="number" id="height" name="height" value={formData.height} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="weight">Body Weight</label><br />
                    <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} />
                </div>
                
                <div>
                    <label>Diabetic?</label><br />
                    <label>
                        <input type="radio" name="diabetic" value="yes" onChange={handleChange} />Yes
                    </label><br />
                    <label>
                        <input type="radio" name="diabetic" value="no" onChange={handleChange} />No
                    </label><br />
                </div>
                <div>
                    <label>Choose Your goal</label><br />
                    <label>
                        <input type="radio" name="goal" value="maintain" onChange={handleChange} /> Maintain Weight
                    </label><br />
                    <label>
                        <input type="radio" name="goal" value="lose" onChange={handleChange} /> Lose Weight
                    </label><br />
                    <label>
                        <input type="radio" name="goal" value="build" onChange={handleChange} /> Build Muscles
                    </label><br />
                </div>
                <div>
                    <button id="sub_btn" type="submit">Register</button>
                </div>
            </form>
            <footer>
                <p><a href="/">Back to Homepage</a>.</p>
            </footer>
        </div>
    );
}
