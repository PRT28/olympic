import React from "react";
import './NavBar.css';
import Logo from '../../static/svg/logo.svg';
import OlympicBanner from '../../static/svg/olypmic.svg'
import Timer from "../Timer/Timer";

const NavBar = ({active, setActive}) => {


    return (
        <>
            <div className="navbar">
                <img src={Logo} alt="" />

                <div className="navbar-group">
                    <div onClick={() => setActive(1)} className={active === 1 ? "navbar-item-active" : "navbar-item"}>Schedule</div>
                    <div onClick={() => setActive(2)} className={active === 2 ? "navbar-item-active" : "navbar-item"}>Our Athelete</div>
                    <div onClick={() => setActive(3)} className={active === 3 ? "navbar-item-active" : "navbar-item"}>Olympics History</div>
                    <div onClick={() => setActive(4)} className={active === 4 ? "navbar-item-active" : "navbar-item"}>About us</div>
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

