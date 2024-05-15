import React from 'react';
import ProgressBar from 'react-customizable-progressbar'

const Circle = () => {
    const progress = 38;

    return (
        <div className='mt-20 ml-12 mb-16 transform'>
                   <ProgressBar
            radius={100}
            progress={progress}
            strokeWidth={2}
            strokeColor="indigo"
            trackStrokeWidth={2}
            pointerRadius={4}
            pointerStrokeWidth={5}
            pointerStrokeColor="indigo"
            

        >
            <div className="indicator absolute top-14  right-14 z-30 bg-white rounded-full p-10 shadow-xl">
                <div>{progress}%</div>
            </div>
        </ProgressBar>

        </div>
    );
};

export default Circle;
