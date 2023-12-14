/* LoginComponent.jsx */

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../css/login.css';
import { Login } from '../api/Authapi';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function LoginComponent() {
    const [credentials, setCredentials] = useState({});
    const navigate = useNavigate();

    // LOGIN WITH SOME OPERATIONS
    const login = async () => {
        try {
            let logindata = await Login(credentials.email, credentials.password);
            toast('Login successful');
            navigate('/home');
        } catch (error) {
            toast(`Error: ` + error.message);
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/home');
            }
        })
    }, []);

    // LOGIN PAGE
    return (
        <div className='login-container'>
            <h1 className='loginheading'>Login</h1>
            <div className='loginform'>
                <label className='form-labelLogin'>Email</label>
                <input
                    type='email'
                    name='email'
                    placeholder='enter your email address'
                    className='loginemail'
                    onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
                />

                <label className='form-labelLogin'>Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder='enter your password'
                    className='loginpassword'
                    onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
                />

                <input
                    type='submit'
                    name='login'
                    className='loginbutton'
                    onClick={login}
                />

                <div className='redirectingtosignup'>
                    New here ?
                    Click on the SignUp and get started!
                    <button onClick={() => navigate('/')} className='redirectingto'>SignUp</button>
                </div>
            </div>
        </div>
    );
}
