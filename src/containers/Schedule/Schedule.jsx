import React, {useEffect, useState} from "react";
import './Schedule.css';

const Schedule = () => {

    const [data, setData] = useState({});
    

    const dates = [
        24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
    ];

    useEffect(() => {
        fetch('/data.json')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error fetching the JSON file:', error));
      }, []);

      
    const sports = Object.keys(data);
        

    const dataHandler = (key, sport) => {

        if (data[sport]['medal'].includes(key)) return 'M';
        if (data[sport]['regular'].includes(key)) return 'R';
        return '';

    }

    return (
        <div className="schedule">
            <div className="sports">
                <div className="sport-item big big-font">Sports</div>
                {
                   sports.map(d => <div className="sport-item">{d}</div>)
                }
            </div>
            <div className="calender">
                <div className="calender-item big" style={{paddingLeft: '5px', height: '60px', paddingTop: '5px'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{width: '43%'}}>July</div>
                        <div>August</div>
                    </div>

                    <div className="calender-grid" style={{marginTop: '10px'}}>
                        {
                            dates.map(d => <div className="grid-header">{d}</div>)
                        }
                    </div>
                </div>
                <div className="calender-grid">
                    {
                        sports.map((d, i) => <>
                        
                            <div className="grid-item">{dataHandler(`24Jul`, d)}</div>
                            <div className="grid-item">{dataHandler(`25Jul`, d)}</div>
                            <div className="grid-item">{dataHandler(`26Jul`, d)}</div>
                            <div className="grid-item">{dataHandler(`27Jul`, d)}</div>
                            <div className="grid-item">{dataHandler(`28Jul`, d)}</div>
                            <div className="grid-item">{dataHandler(`29Jul`, d)}</div>
                            <div className="grid-item">{dataHandler(`30Jul`, d)}</div>
                            <div className="grid-item">{dataHandler(`31Jul`, d)}</div>
                            <div className="grid-item">{dataHandler(`1Aug`, d)}</div>
                            <div className="grid-item">{dataHandler(`2Aug`, d)}</div>
                            <div className="grid-item">{dataHandler(`3Aug`, d)}</div>
                            <div className="grid-item">{dataHandler(`4Aug`, d)}</div>
                            <div className="grid-item">{dataHandler(`5Aug`, d)}</div>
                            <div className="grid-item">{dataHandler(`6Aug`, d)}</div>
                            <div className="grid-item">{dataHandler(`7Aug`, d)}</div>
                            <div className="grid-item">{dataHandler(`8Aug`, d)}</div>
                            <div className="grid-item">{dataHandler(`9Aug`, d)}</div>
                            <div className="grid-item">{dataHandler(`10Aug`, d)}</div>
                            <div className="grid-item">{dataHandler(`11Aug`, d)}</div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Schedule;
