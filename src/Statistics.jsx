import React, { useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import Down from './assets/down.png';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {
    const [options, setOptions] = useState({
        theme: "light2",
        axisX: {
            title: "Months",
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM",
        },
        data: [{
            type: "boxAndWhisker",
            color: "black",
            upperBoxColor: "blue",
            lowerBoxColor: "blue",
            yValueFormatString: "###.0# years",
            dataPoints: [
                { label: "Nov", y: [67.5, 70.55, 76.705, 79.406, 73.15] },
                { label: "Dec", y: [67.41, 71.03, 78.05, 80.657, 74.36] },
                { label: "Jan", y: [64.94, 70.565, 78.17, 80.94, 75.345] },
                { label: "Feb", y: [69.18, 71.06, 76.819, 79.425, 73.4] },
                { label: "March", y: [69.62, 72.045, 78.7, 81.70, 75.8] },
                { label: "April", y: [65.86, 70.255, 78.0625, 85, 75.24] },
                { label: "May", y: [69.62, 72.045, 78.7, 81.70, 75.8] },
                { label: "June", y: [65.86, 70.255, 78.0625, 85, 75.24] },
            ]
        }]
    });

    return (
        <div className='container'>
            <div className='header'>
                <p className='font-bold'>Statistics</p>
                <button className="toggle-button">Year <img src={Down} alt="Icon" className="icon" /></button>
            </div>
            <CanvasJSChart options={options} />
            <style jsx>{`
                .container {
                    background-color: #f0f0f0;
                    padding: 20px;
                    border-radius: 20px;
                }
                .header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }
                .font-bold {
                    font-weight: bold;
                }
                .toggle-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                    border-radius: 20px;
                    background-color: #fff;
                    padding: 10px 20px;
                    color: #3f51b5;
                    font-weight: bold;
                    cursor: pointer;
                }
                .icon {
                    width: 20px;
                    height: 20px;
                }
                @media (max-width: 768px) {
                    .toggle-button {
                        font-size: 0.8rem;
                        padding: 8px 16px;
                    }
                    .icon {
                        width: 18px;
                        height: 18px;
                    }
                }
            `}</style>
        </div>
    );
}

export default App;
