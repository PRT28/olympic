import React from "react";
import './Home.css';
import Banner from '../../static/svg/banner.svg'

const Home = ({setActive}) => {
    return (
        <div className="home">
            <div>
            <div className="orange">
                <div className="orange-slanted" />
            </div>
            <div className="white">
                <div className="white-slanted">
                </div>
                <div className="table-container">
                    <table>
                        <tr>
                            <td>Neeraj Choppra</td>
                            <td>Athletics</td>
                            <td>Men's Javelin Throw</td>
                        </tr>
                        <tr>
                            <td>PV Sindhu</td>
                            <td>Badminton</td>
                            <td>Women's Single</td>
                        </tr>
                        <tr>
                            <td>Nisha Dahiya</td>
                            <td>Wrestling</td>
                            <td>Women's 68Kg</td>
                        </tr>
                    </table>
                    <div className="anchor" onClick={() => window.location.pathname="/athletes"}>View all Athlete &#8594;</div>
                </div>
                
                <img src={Banner} alt="" />
            </div>
            <div className="green">
                <div className="green-slanted" />
            </div>

            </div>

            <div className="news">
                <div className="news-title">News & Headlines</div>

            </div>
        </div>
    );
};

export default Home;
