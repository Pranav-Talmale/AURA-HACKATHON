/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import '../Css/home.css';
import backgroundhome from '../assets/bghome.png'
// import backgroundhom from '../assets/hompageaura.png'
import homepagelogo from '../assets/homelogo.png'
import { useNavigate } from 'react-router';
export const HomeContent = () => {
    const navigate = useNavigate();
    function Gotonetworthform(){
        navigate('/networthform')
    }
    return (
        <div className="home-container">
            {/* <div className="image-container">
                <img src={backgroundhom} alt="Image 1" className="homepage-image" />
            </div> */}
            <div className="text-container">
            <img src={homepagelogo} height={100} width={350} className='productname'/>
                <h2 className="large-text">
                Elevate your wealth with our comprehensive financial solutions, designed to simplify the complexities of managing your finances.
                Experience the ease of tracking your financial journey today for a prosperous tomorrow.
                </h2>
                <button className="action-button" onClick={() => Gotonetworthform()}>Setup your Finances</button>
            </div>
            <div className="image-container">
                <img src={backgroundhome} alt="Image 2" className="homepage-image" />
            </div>
        </div>

    );
};
