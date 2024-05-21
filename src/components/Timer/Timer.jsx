import React from "react";
import './Timer.css';

const Timer = () => {
    return (
        <div className="timer">
            <div className="box orange">
                <div className="daysec value">70</div>
                <div className="dayl label">Days</div>
            </div>
            <div className="box white">
                <div className="hourmin value">52</div>
                <div className="hourminl label">Hours</div>
            </div>
            <div className="box white">
                <div className="hourmin value">56</div>
                <div className="hourminl label">Minuts</div>
            </div>
            <div className="box green">
                <div className="daysec value">50</div>
                <div className="secl label">Seconds</div>
            </div>
        </div>
    );
};

export default Timer;
