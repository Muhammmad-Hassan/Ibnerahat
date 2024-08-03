import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Full-width image section */}
      <section className="relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1683657860029-05a5415fa618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="w-full h-[50vh]  object-cover"
        />
        {/* Centered search bar and button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-2 rounded-md shadow-md flex">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 w-[550px] rounded-l-md border-none focus:outline-none"

            />
            <button className="bg-gradient-to-tl font-semibold from-pink-500 to-pink-700 text-white px-4 py-2  rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
