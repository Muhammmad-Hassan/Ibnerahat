import React, { useState } from "react";
import {
  FaLocationArrow,
  FaMobileAlt,
  FaTiktok
} from "react-icons/fa";

import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              IBN E RAHAT
            </h1>
            <p className="">
            Ibn e Rahat Cafe offers expertly crafted Zinger Burgers, Chowmein, and Rice in a cozy, welcoming atmosphere.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Canal Road Abdara Peshawar,KPK</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+923262626480</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              
              <a href="#">
                {/* <FaFacebook className="text-3xl" /> */}
              </a>
              <a href="#">

                <FaTiktok className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
           
          
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
           @IBN E RAHAT 2024 All rights reserved ❤️ 
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
