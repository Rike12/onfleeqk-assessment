import React from 'react';
import Sidebar from './Sidebar';
import Search from './Search';
import Content from './Content';
import Bell from './assets/bell.png';
import Man from './assets/man.png';
import Home from './assets/home.png';



const MainContent = () => {
  return (
    
<div>
 
      <div className="relative flex  ">
        <div className=" absolute pb-60 pt-6 w-24  h-full bg-indigo-900 z-40 fixed left-0 top-0 rounded-tl-3xl rounded-bl-3xl overflow-hidden">
            <Sidebar/>
        </div>
       
        <div className=" w-screen ml-16  bg-gray-50 rounded-3xl z-50">
        <div className=' relative top-36 right-5 rounded-lg'><img src={Home} alt="Image" className="w-10 rounded-md"/></div>
        <div className='flex m-7 gap-2 max-w-100  mt-3 justify-between'>
  <div className='flex lg:flex-row md:flex-row sm:flex-col justify-around w-full '>
    <div className='    '><Search/></div>
  
    <div className='flex lg:flex-row lg:justify-around lg:gap-14 lg:ml-44 md:flex-row md:gap-3 md:ml-3 '>
        <div><a href="" className='font-bold'>Feedback</a></div>
        <div><a href="" className='font-bold'>Contacts</a></div>
        <div><a href="" className='font-bold'>Help</a></div>
    </div>
    

    <div className='flex gap-4 lg:ml-44 md:ml-20 lg:mr-10 '>
    <img src={Bell} alt="Icon" className="w-10 h-5 mt-1"/>
        <img src={Man} alt="Icon" className="w-10 h-5 mt-1"/>
       
    </div>
 </div>
</div>
        <div><Content/></div>
        </div>
        

      </div>
    </div>
    
 
  );
};

export default MainContent;
