import React from 'react';
import Look from './assets/search.png';

const Search = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl gap-4 h-10 rounded-lg focus-within:shadow-lg bg-gray-100 overflow-hidden">
        <div className="flex-shrink-0">
          <img src={Look} alt="Icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ml-3"/>
        </div>
        <input
          className="flex-grow text-sm sm:text-md md:text-lg text-gray-700 bg-gray-100 py-2 sm:py-3 md:py-4"
          type="text"
          id="search"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
