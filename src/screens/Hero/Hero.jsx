import React from "react";
import { motion } from "framer-motion";
import BiryaniImg1 from "../../assets/biryani3.png";
import BiryaniImg2 from "../../assets/biryani5.png";
import Chowmein from "../../assets/chowmein.png";

const ImageList = [
  {
    id: 1,
    img: BiryaniImg1,
  },
  {
    id: 2,
    img: BiryaniImg2,
  },
  {
    id: 3,
    img: Chowmein,
  },
];

const Hero = () => {
  const [imageId, setImageId] = React.useState(BiryaniImg1);

  const handlePhoneClick = () => {
    window.location.href = "tel:+923132402444";
  };

  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text content section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                Ibn E Rahat
              </span>{" "}
              Cafe
            </h1>
            <p className="text-sm mx-3">
              Enjoy our tasty Chowmein, crispy Zinger Burgers, flavorful Rice, and irresistible Zinger Pieces. At Ibn e Rahat Cafe, every dish is made with care to please your taste buds. Come and taste the flavors that make each meal special!
            </p>
            <div>
              <motion.button
                onClick={handlePhoneClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full"
              >
                Order Now
              </motion.button>
            </div>
          </motion.div>

          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-[450px] bg-yellow-400 lg:rounded-r-full sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-[300px] sm:h-[450px]  flex justify-center items-center"
            >
              <motion.img
                src={imageId}
                alt="Food image"
                className="w-[250px] sm:w-[350px]  sm:scale-125 mx-auto"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}

              />
            </motion.div>

            {/* Thumbnail list */}
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-3 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-gray-300 rounded-lg p-2">
              {ImageList.map((item) => (
                <motion.img
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  src={item.img}
                  onClick={() => setImageId(item.img)}
                  alt={`Food ${item.id}`}
                  className="max-w-[80px] h-[80px] object-contain cursor-pointer rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
