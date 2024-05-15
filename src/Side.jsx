import React from 'react';
import Visa from './Visa';
import Bag from './assets/bag.png';
import Netflix from './assets/netflix.png';
import Plus from './assets/plus.png';
import Taxi from './assets/taxi.png';
import Progress from './Progress';

const Side = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className='mt-10 md:mt-30'>
                <Progress/>
            </div>
            <div className='mt-10 md:mt-30 mb-10 md:mb-34 col-span-2 md:col-span-1 xl:col-span-4'>
                <Visa />
            </div>

            <div className="mt-10 md:mt-36">
                <div className="container">
                    <div className='flex justify-between items-center mt-7 md:mt-14 mb-3'>
                        <p><a href="#" className="font-bold ml-5 text-2xl">Transaction</a></p>
                        <div className='border border-2 rounded-lg bg-red-500 p-3 md:mr-7'><img src={Plus} alt="Icon" className="w-4" /></div>
                    </div>

                    <div className=''>
                        <div className='flex justify-between items-center mt-7'>
                            <div className='flex gap-4'>
                                <span className='border border-2 rounded-xl bg-white p-4 ml-5'><img src={Taxi} alt="Icon" className="w-4" /></span>
                                <div className="flex flex-col">
                                    <span className="font-bold mr-6">Taxi</span>
                                    <span className="text-gray-400">01:21 PM</span>
                                </div>
                            </div>
                            <span className="mr-7">-$9.20</span>
                        </div>

                        <div className='flex justify-between items-center mt-10'>
                            <div className='flex gap-4'>
                                <span className='border border-2 rounded-xl bg-white p-3 ml-5'><img src={Bag} alt="Icon" className="w-4" /></span>
                                <div className="flex flex-col">
                                    <span className="font-bold mr-6">Shopping</span>
                                    <span className="text-gray-400">11:15 AM</span>
                                </div>
                            </div>
                            <span className="mr-7">-$142.00</span>
                        </div>

                        <div className='flex justify-between items-center mt-10'>
                            <div className='flex gap-4'>
                                <span className='border border-2 rounded-xl bg-white p-3 ml-5'><img src={Netflix} alt="Icon" className="w-4" /></span>
                                <div className="flex flex-col">
                                    <span className="font-bold mr-6">Netflix</span>
                                    <span className="text-gray-400">Jan 10, 2020</span>
                                </div>
                            </div>
                            <span className="mr-7">-$24.99</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Side;
