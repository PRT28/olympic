import React from "react";
import './Home.css';
import Banner from '../../static/svg/banner.svg'

const Home = () => {
    return (
        <div className="home">
            <div className="orange">
                <div className="orange-slanted" />
            </div>
            <div className="white">
                <div className="white-slanted">
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                </table>
                </div>
                <img src={Banner} alt="" />
            </div>
            <div className="green">
                <div className="green-slanted" />
            </div>

        </div>
    );
};

export default Home;
