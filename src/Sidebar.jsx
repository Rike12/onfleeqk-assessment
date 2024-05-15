import React from 'react';
import Chart from './assets/pie.svg';
import Credit from './assets/credit.svg';
import Wallet from './assets/wallet.svg';
import Money from './assets/envelope.svg';

const Sidebar = () => {
  return (
    <div className="bg-indigo-900 flex flex-col md:w-64 lg:w-80 xl:w-96">
      <div className="p-4">
        <img src={Money} alt="Logo" className="w-6" />
      </div>

      <div className="flex flex-grow flex-col justify-between mt-4 md:mt-8 lg:mt-12 xl:mt-16 ">
        <div className="flex flex-col mt-60 items-center md:items-start">
          <div className="p-3 mt-40">
            <img src={Chart} alt="Icon" className="w-6 hover:bg-blue-600 mb-12 " />
          </div>
          <div className="p-3">
            <img src={Credit} alt="Icon" className="w-6 hover:bg-blue-600 mb-12" />
          </div>
          <div className="p-3">
            <img src={Wallet} alt="Icon" className="w-6 hover:bg-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
