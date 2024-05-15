import React from 'react';
import ProgressBar from 'react-customizable-progressbar';

const Circle = () => {
    const progress = 38;

    return (
        <div className="mt-20 ml-12 mb-16 transform sm:mt-10 sm:ml-8 sm:mb-12 md:mt-8 md:ml-6 md:mb-10">
            <ProgressBar
                radius={window.innerWidth > 640 ? 100 : window.innerWidth > 480 ? 80 : 60}
                progress={progress}
                strokeWidth={2}
                strokeColor="indigo"
                trackStrokeWidth={2}
                pointerRadius={4}
                pointerStrokeWidth={5}
                pointerStrokeColor="indigo"
            >
                <div className="indicator absolute top-14 right-14 z-30 bg-white rounded-full p-2 shadow-xl sm:top-10 sm:right-10 md:top-8 md:right-8">
                    <div className="text-lg sm:text-base md:text-sm">{progress}%</div>
                </div>
            </ProgressBar>
        </div>
    );
};

export default Circle;
