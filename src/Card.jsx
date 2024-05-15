import React from 'react';
import One from './assets/one.png';
import Two from './assets/two.png';
import Three from './assets/three.png';

const SimpleCard = () => {
  return (
    <div className="p-4">
      <section className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center gap-3 bg-white shadow rounded-lg p-4 h-28">
          <img src={One} alt="Icon" className="w-20" />
          <div className="flex flex-col">
            <span className="text-gray-500">VISITORS</span>
            <span className="font-bold">10,320</span>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white shadow rounded-lg p-4 h-28">
          <img src={Two} alt="Icon" className="w-20" />
          <div className="flex flex-col">
            <span className="text-gray-500">CUSTOMERS</span>
            <span className="font-bold">4,628</span>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-red-500 text-white shadow rounded-lg p-4 h-28">
          <img src={Three} alt="Icon" className="w-20" />
          <div className="flex flex-col">
            <span className="text-gray-300">ORDERS</span>
            <span className="font-bold">2,980</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleCard;
