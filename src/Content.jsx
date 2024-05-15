import React from 'react';
import Card from './Card';
import Side from './Side';
import Statistics from './Statistics';
import Profile from './Profile';
import Biro from './assets/pen.png';
 
const Content = () => {
  return (
    <div className="grid  lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-6 gap-2 p-4 md:p-7 max-w-full">
      <div className="md:col-span-3 lg:col-span-3 sm:col-span-2">
        <Card />
        <div className='mt-10  '>
          <Statistics />
        </div>
        <div className='mt-10'>
          <Profile />
        </div>
      </div>

      <div className="md:col-span-2 lg:col-span-1 bg-gray-100 rounded-md ">
        <div className='absolute right-2 top-26 md:top-26 z-30 ml-4'>
          <img src={Biro} alt="Icon" className="w-10 h-10 mt-2" />
          <div className='  z-30  '>    <button className='bg-indigo-800 p-2 rounded-md mt-5
    '>$10,600</button></div>
        </div>

            
    
        <Side />
        
        

  
      </div>
    </div>
  );
};

export default Content;
