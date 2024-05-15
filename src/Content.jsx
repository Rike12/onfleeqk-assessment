import React from 'react';
import Card from './Card';
import Side from './Side';
import Statistics from './Statistics';
import Profile from './Profile';
import Biro from './assets/pen.png';

const Content = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-4 md:p-7 max-w-full">
      <div className="md:col-span-3">
        <Card />
        <div className='mt-10'>
          <Statistics />
        </div>
        <div className='mt-10'>
          <Profile />
        </div>
      </div>

      <div className="md:col-span-1 bg-gray-100 rounded-md relative">
        <div className='absolute right-14 top-6 md:top-26 z-30'>
          <img src={Biro} alt="Icon" className="w-10 h-10 mt-2" />
        </div>
        <Side />
        <div className='absolute top-24 md:top-36 right-1 z-30 rounded-lg mt-4'>
          <button className='bg-indigo-800 p-2 rounded-md mt-5'>$10,600</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
