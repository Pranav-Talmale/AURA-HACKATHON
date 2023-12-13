/* eslint-disable no-unused-vars */
import React from 'react';
import '../Css/home.css';
import backgroundhome from '../assets/3Dmanbg.png'
import backgroundhom from '../assets/hompageaura.png'
import homepagelogo from '../assets/homelogo.png'
export const HomeContent = () => {
    return (
        <div className="home-container">
            <div className="image-container">
                <img src={backgroundhom} alt="Image 1" className="homepage-image" />
            </div>
            <div className="text-container">
            <img src={homepagelogo} height={100} width={350} className='productname'/>
                <h2 className="large-text">
                Elevate your wealth with our comprehensive financial solutions, 
                designed to simplify the complexities of managing your finances.
                <br/>
                Experience the ease of tracking your financial journey today for a prosperous tomorrow.
                </h2>
                <button className="action-button">Setup your Finances</button>
            </div>
            <div className="image-container">
                <img src={backgroundhome} alt="Image 2" className="homepage-image" />
            </div>
        </div>

    );
};