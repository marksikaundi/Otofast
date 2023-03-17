import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS TRENDS</p>
          <h1 className="md:text-xl sm:text-3xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Centralizing data analytics allows organizations to achieve a number
            of benefits. One of the key benefits is the ability to streamline
            data management processes. By having all data stored in one
            location, organizations can reduce the time and effort
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto md:mx-0 font-medium my-6 py-3 text-black">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
