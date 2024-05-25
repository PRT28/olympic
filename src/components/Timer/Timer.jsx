import React, {useState, useEffect} from "react";
import './Timer.css';

const Timer = () => {

    const [d, setDays] = useState(null);
    const [h, setHours] = useState(null);
    const [mins, setMins] = useState(null);
    const [sec, setSec] = useState(null);


    useEffect(() => {
        if (sec !== null && mins !== null && h !== null && d !== null) {

            const daytimeout = setInterval(() => {
                setDays(d - 1);
            }, 86400000);
    
            const hourtimeout = setInterval(() => {
                setHours(h - 1);
            }, 3600000);
    
            const mintimeout = setInterval(() => {
                if (mins === 0) {
                    setMins(59) 
                 } else {
                    setMins(mins - 1)
                 }
            }, 60000);
    
            const sectimeout = setInterval(() => {
                if (sec === 0) {
                   setSec(59) 
                } else {
                    setSec(sec - 1);
                }
            }, 1000);

            return () => {
                clearInterval(daytimeout);
                clearInterval(hourtimeout);
                clearInterval(mintimeout);
                clearInterval(sectimeout);
            }
        } else {
            var dateFuture = new Date("2024-07-26");
            var dateNow = new Date();
    
            var seconds = Math.floor((dateFuture - (dateNow))/1000);
            var minutes = Math.floor(seconds/60);
            var hours = Math.floor(minutes/60);
            var days = Math.floor(hours/24);
            
            hours = hours-(days*24);
            minutes = minutes-(days*24*60)-(hours*60);
            seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
    
            setDays(days);
            setHours(hours);
            setMins(minutes);
            setSec(seconds);
        }

    }, [sec, mins, h, d])


    return (
        <div className="timer">
            <div className="box orange">
                <div className="daysec value">{d}</div>
                <div className="dayl label">Days</div>
            </div>
            <div className="box white">
                <div className="hourmin value">{h}</div>
                <div className="hourminl label">Hours</div>
            </div>
            <div className="box white">
                <div className="hourmin value">{mins}</div>
                <div className="hourminl label">Minutes</div>
            </div>
            <div className="box green">
                <div className="daysec value">{sec}</div>
                <div className="secl label">Seconds</div>
            </div>
        </div>
    );
};

export default Timer;
