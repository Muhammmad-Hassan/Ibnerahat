import React from "react";
import chowmein from "../../assets/chowmein.png";
import Img4 from "../../assets/biryani4.png";
import { motion } from "framer-motion"; // Importing Framer Motion

const ServicesData = [
  {
    id: 1,
    img: Img4,
    name: "Rice",
    description:
      "Perfectly seasoned rice, a delightful and versatile side dish option.",
  },
  {
    id: 2,
    img: chowmein,
    name: "Chowmein",
    description:
      "Tender noodles stir-fried with fresh vegetables in a savory sauce",
  },
  {
    id: 3,
    img: Img4,
    name: "Zinger Burger",
    description: "Crispy and juicy, our Zinger Burger packs a flavorful punch",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Explore our menu featuring crispy Zinger Burgers, savory Chowmein,
              and flavorful Rice dishes
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              
               <motion.div
                key={service.id}
                initial={{ opacity: 0 }} // Slide up effect from below
                whileInView={{ opacity: 1 }} // Animate in when in view
                transition={{delay: 0.2,duration:0.6}}
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <motion.div className="h-[100px]">
                  <motion.img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300"
                   
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
