/* eslint-disable no-unused-vars */

import React, {useState, useEffect} from 'react';
import '../css/signup.css';
import { SignUp} from '../api/Authapi';
import { onAuthStateChanged } from 'firebase/auth';
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { auth } from '../firebaseConfig';
export default function Signup() {
const [credentials, setCredentials] = useState({});
let navigate = useNavigate();
// SIGNUP / REGISTER
const register = async() => {
    try {
        let userdata = await SignUp(credentials.email, credentials.password);
        toast.success("signing up");
        localStorage.setItem('userID', userdata.userID);
        localStorage.setItem('userEmail', userdata.email);
        navigate('/home');
    } catch (error) {
        toast.error(error.message);
    }
}

useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if(user){
            navigate('/home');
        }
        
    })
}, [navigate]);
// REGISTER FORM
    return (
        <div className='signupdiv'>
            <h1 className='heading'>Signup</h1>

            <div className="signupform">

                <label className='form-label'>User Email</label>

                <input 
                type="email" 
                name="email" 
                className='signupemail' 
                placeholder='enter your email id'
                onChange={(event) => setCredentials({...credentials, email: event.target.value})}
                />

                <label className='form-label'>Password</label>

                <input 
                type="password" 
                name="password" 
                className='signuppassword' 
                placeholder='enter your password'
                onChange={(event) => setCredentials({...credentials, password: event.target.value})}
                />


                <input 
                type="submit" 
                name="submit" 
                className='signupsubmit' 
                onClick={register}
                />
               
               {/* <button onClick={() => navigate('/login')} className='redirectingto'>SignUp</button> */}
               <p>Already have an account? <button onClick={() => navigate('/login')} className='redirectingto'>Log In</button></p>


            </div>

        </div>
    )
}