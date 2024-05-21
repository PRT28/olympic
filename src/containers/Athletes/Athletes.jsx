import React from "react";
import './Athletes.css';
import India from '../../static/svg/india.svg';
import OlymLogo from '../../static/svg/olymlogo.svg'

const Athelets = () => {
    return (
        <div className="athletes">
            <div>A complete list of every Indian athlete and team who will compete at the Paris 2024 Olympics.<br /><br />

                Over the past few editions, the number of Indian athletes at the Summer Olympics has steadily increased. At Tokyo 2020, the Indian contingent was made up of 124 athletes, the largest that the country had sent to the Games. India also won seven medals, their biggest haul in a single Olympics - including Neeraj Chopra’s historic gold medal in the men’s javelin throw.<br /><br />

                At the Paris 2024 Olympics, India will expect more athletes to qualify and of course, increase the Tokyo Olympics medal haul.
            </div>
            <div className="athlete-info">
                <img src={OlymLogo} alt="" />
                    <table className="athlete-table">
                        <tr className="athlete-tr">
                            <th className="athlete-th">Athlete</th>
                            <th className="athlete-th">Sport</th>
                            <th className="athlete-th">Event</th>
                        </tr>
                        <tr className="athlete-tr">
                            <td className="athlete-td">Neeraj Choppra</td>
                            <td className="athlete-td">Athletics</td>
                            <td className="athlete-td">Men's Javelin Throw</td>
                        </tr>
                        <tr className="athlete-tr">
                            <td className="athlete-td">PV Sindhu</td>
                            <td className="athlete-td">Badminton</td>
                            <td className="athlete-td">Women's Single</td>
                        </tr>
                        <tr className="athlete-tr">
                            <td className="athlete-td">Nisha Dahiya</td>
                            <td className="athlete-td">Wrestling</td>
                            <td className="athlete-td">Women's 68Kg</td>
                        </tr>
                        <tr className="athlete-tr">
                            <td className="athlete-td">Team India</td>
                            <td className="athlete-td">Hockey</td>
                            <td className="athlete-td">Men's Hockey</td>
                        </tr>
                        <tr className="athlete-tr">
                            <td className="athlete-td">Lovlina Borgohain</td>
                            <td className="athlete-td">Boxing</td>
                            <td className="athlete-td">Women’s 68kg</td>
                        </tr>
                    </table>
                <img src={India} alt="" />

            </div>
        </div>
    );
};

export default Athelets;
