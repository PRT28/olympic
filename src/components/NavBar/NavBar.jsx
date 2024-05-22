import React, {useState} from "react";
import './NavBar.css';
import Logo from '../../static/svg/logo.svg';
import OlympicBanner from '../../static/svg/olypmic.svg'
import Timer from "../Timer/Timer";
import { useNavigate} from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";

const NavBar = () => {

    const nav = useNavigate();
    const [active, setActive] = useState(false);

    const navHandler = (path) => {
        return window.location.pathname === path
    }

    const sideSheetHandle = () => {
        if (active) {
            document.body.style.overflowY = "scroll"
        } else {
            document.body.style.overflowY = "hidden"
        }
        setActive(!active);
        
    }

    const sideSheetClickHandle = (url) => {
        nav(url);
        sideSheetHandle();
    }


    return (
        <>
            <div className="navbar">
                <div style={{cursor: "pointer"}} onClick={() => { nav("/"); setActive(false); }}>
                    <img src={Logo} alt="" />
                </div>
                

                <div className="navbar-group-desktop">
                    <div onClick={() => nav("/schedule")} className={navHandler('/schedule') ? "navbar-item-active" : "navbar-item"}>Schedule</div>
                    <div onClick={() => nav("/athletes")} className={navHandler('/athletes') ? "navbar-item-active" : "navbar-item"}>Our Athelete</div>
                    <div onClick={() => nav("/history")} className={navHandler('/history') ? "navbar-item-active" : "navbar-item"}>Olympics History</div>
                    <div onClick={() => nav("/aboutus")} className={navHandler('/aboutus') ? "navbar-item-active" : "navbar-item"}>About us</div>
                </div>

                <div className="navbar-group-mobile" onClick={sideSheetHandle}>
                    <MdOutlineMenu size={40} />
                </div>

            </div>

            {active && <div className="nav-sidesheet">
                <div onClick={() => sideSheetClickHandle("/schedule")} className={navHandler('/schedule') ? "navbar-item-active" : "navbar-item"}>
                    <div>Schedule</div>
                    <FaAngleRight /> 
                </div>
                <div onClick={() => sideSheetClickHandle("/athletes")} className={navHandler('/athletes') ? "navbar-item-active" : "navbar-item"}>
                    <div>Our Athelete</div>
                    <FaAngleRight /> 
                </div>
                <div onClick={() => sideSheetClickHandle("/history")} className={navHandler('/history') ? "navbar-item-active" : "navbar-item"}>
                    <div>Olympics History</div>
                    <FaAngleRight /> 
                </div>
                <div onClick={() => sideSheetClickHandle("/aboutus")} className={navHandler('/aboutus') ? "navbar-item-active" : "navbar-item"}>
                    <div>About us</div>
                    <FaAngleRight /> 
                </div>
            </div>}

            <div className="olympic-banner">
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
                    <img src={OlympicBanner} alt="" style={{marginRight: '20px'}} />
                    <div className="mobile" style={{textAlign: 'center'}}>
                        <div className="olympics-title">Olympics Games Paris 2024</div>
                        <div className="olympics-sub mobile">(26 July - 11 August 2024)</div>
                    </div>
                    <div className="olympics-title desktop">Olympics Games Paris 2024</div>
                </div>
                
                <div className="olympics-title desktop">(26 July - 11 August 2024)</div>
                <Timer />
            </div>
        </>
    );
};

export default NavBar;

