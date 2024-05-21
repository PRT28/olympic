import React from "react";
import './NavBar.css';
import Logo from '../../static/svg/logo.svg';
import OlympicBanner from '../../static/svg/olypmic.svg'
import Timer from "../Timer/Timer";
import { useNavigate} from "react-router-dom";

const NavBar = () => {

    const nav = useNavigate();

    const navHandler = (path) => {
        return window.location.pathname === path
    }


    return (
        <>
            <div className="navbar">
                <div style={{cursor: "pointer"}} onClick={() => nav("/")}>
                    <img src={Logo} alt="" />
                </div>
                

                <div className="navbar-group">
                    <div onClick={() => nav("/schedule")} className={navHandler('/schedule') ? "navbar-item-active" : "navbar-item"}>Schedule</div>
                    <div onClick={() => nav("/athletes")} className={navHandler('/athletes') ? "navbar-item-active" : "navbar-item"}>Our Athelete</div>
                    <div onClick={() => nav("/history")} className={navHandler('/history') ? "navbar-item-active" : "navbar-item"}>Olympics History</div>
                    <div onClick={() => nav("/aboutus")} className={navHandler('/aboutus') ? "navbar-item-active" : "navbar-item"}>About us</div>
                </div>

            </div>
            <div className="olympic-banner">
                <img src={OlympicBanner} alt="" />
                <div className="olympics-title">Olympics Games Paris 2024</div>
                <div className="olympics-title">(26 July - 11 August 2024)</div>
                <Timer />
            </div>
        </>
    );
};

export default NavBar;

