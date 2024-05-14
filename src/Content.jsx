import React from 'react';
import Card from './Card';
import Side from './Side';
import Biro from './assets/pen.png'



const Content = () => {
  return (
    <div className="grid grid-cols-4 m-7 gap-2 max-w-100  ">
    <div className="col-span-3  max-w-70 ">

      <Card />
     
    
  
    </div>

    <div className="col-span-1 bg-gray-100 rounded-md   ">
    
    <div className='absolute right-14 top-26 z-30 '> <img src={Biro} alt="Icon" className="w-10 h-10 mt-2 "/></div>
      <Side/>
    </div>
    

    <div className=' absolute top-36 right-1 z-30 rounded-lg mt-4'>    <button className='bg-indigo-800 p-2 rounded-md mt-5
    '>$10,600</button></div>
  </div>
 
  );
};

export default Content;
