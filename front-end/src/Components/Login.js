import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    })
    const handleLogin = async () => {
        console.warn("email,password", email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/")
        } else {
            alert("please enter connect details")
        }
    }
    return (
        <div className='login'>
            <h1>Login</h1>
            <input type="text" className='inputbox' placeholder='enter-email'
                onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="text" className='inputbox' placeholder='enter password'
                onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={handleLogin} className='appbutton' type="button">Login</button>
        </div>
    )
}
