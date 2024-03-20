import React from "react";
import './MainLanding.css'
import { HandLeft } from "react-ionicons";
import { useNavigate } from "react-router-dom";

const MainLanding = () => {
    const navigate = useNavigate()
    const handleHomeNavigation = () => {
        navigate('/home')
    }
    return (
        <div className="main-landing">
            <div className="banter-loader">
                <div className="banter-loader__box" />
                <div className="banter-loader__box" />
                <div className="banter-loader__box" />
                <div className="banter-loader__box" />
                <div className="banter-loader__box" />
                <div className="banter-loader__box" />
                <div className="banter-loader__box" />
                <div className="banter-loader__box" />
                <div className="banter-loader__box" />
            </div>
            <div className="main-wordings">
                <h1>AJA</h1>
                <p>For all your animal pose estimation needs</p>

                <button className="started-button" onClick={handleHomeNavigation} style={{backgroundColor:"#1D1B22", color:"white"}}>Get Started</button>
            </div>
        </div>
    )
}

export default MainLanding