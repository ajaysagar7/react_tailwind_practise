import Navbar from "./Components/Navbar";
import SubNavbar from "./Components/SubNavbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero/Hero";
import Product from "./Components/Products/Product";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TopRatedProducts from "./Components/TopProducts/TopProducts";
import Banner from "./Components/Banner/Banner";
function App() {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Hero />
      <Product />
      <TopRatedProducts />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
