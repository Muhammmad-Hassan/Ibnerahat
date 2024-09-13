import React from "react";
import Hero from "./screens/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./screens/Services/Services.jsx";
import Banner from "./screens/Banner/Banner.jsx";
import AppStore from "./screens/AppStore/AppStore.jsx";
import CoverBanner from "./screens/CoverBanner/CoverBanner.jsx";
import Testimonial from "./screens/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
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
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      {/* <CoverBanner /> */}
      <AppStore />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
