import React from "react";
import Hero from "../screens/Hero/Hero";
import Services from "../screens/Services/Services.jsx";
import Banner from "../screens/Banner/Banner.jsx";
import AppStore from "../screens/AppStore/AppStore.jsx";
import Testimonial from "../screens/Testimonial/Testimonial.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      {/* <Testimonial /> */}
    </div>
  );
};

export default Home;
