import React from "react";
import AppStoreImg from "../../assets/app_store.png";
import PlayStoreImg from "../../assets/play_store.png";
import Gif from "../../assets/mobile_bike.gif";
import { motion } from "framer-motion";

const AppStore = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-14">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Text Section */}
            <motion.div
              className="space-y-6 max-w-xl mx-auto"
              initial={{ x: -50, opacity: 0 }} // Slide in from left
              whileInView={{ x: 0, opacity: 1 }} // Animate to view
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400">
                Fast delivery of Zinger Burgers, Chowmein, and Rice
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                {/* Add buttons or content here */}
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }} // Image starts small and faded
              whileInView={{ scale: 1, opacity: 1 }} // Full size and visible
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full sm:max-w-[60%]"
            >
              <img
                src={Gif}
                alt="mobile bike"
                className="block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
