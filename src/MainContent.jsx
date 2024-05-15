import React from 'react';
import Sidebar from './Sidebar';
import Search from './Search';
import Content from './Content';
import Bell from './assets/bell.png';
import Man from './assets/man.png';
import Home from './assets/home.png';

const MainContent = () => {
  return (
    <div className="flex">
      <div className="fixed left-0 top-0 h-full w-24 bg-indigo-900 z-40 rounded-tl-3xl rounded-bl-3xl overflow-hidden">
        <Sidebar />
      </div>
      <div className="flex-1 ml-24 bg-gray-50 rounded-3xl z-50">
        <div className="relative top-6 right-6 flex justify-end p-4">
          <img src={Home} alt="Home" className="w-10 rounded-md" />
        </div>
        <div className="flex flex-col lg:flex-row m-7 gap-2 mt-3 justify-between">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-20">
            <Search />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-14">
            <a href="" className="font-bold">Feedback</a>
            <a href="" className="font-bold">Contacts</a>
            <a href="" className="font-bold">Help</a>
          </div>
          <div className="flex gap-4 items-center">
            <img src={Bell} alt="Bell" className="w-10 h-10" />
            <img src={Man} alt="Man" className="w-10 h-10" />
          </div>
        </div>
        <div className="p-4">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
