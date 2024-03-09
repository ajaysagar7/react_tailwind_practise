import Navbar from "./Components/Navbar";
import SubNavbar from "./Components/SubNavbar";
import Footer from "./Components/Footer";
<<<<<<< HEAD
import Hero from './Components/Hero';
=======
import Hero from "./Components/Hero/Hero";
import Product from "./Components/Products/Product";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TopRatedProducts from "./Components/TopProducts/TopProducts";
import Banner from "./Components/Banner/Banner";
>>>>>>> 427d8f7aee422da59ed62cec4ca39f26bec33902
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
<<<<<<< HEAD
=======
      <Product />
      <TopRatedProducts />
      <Banner />
>>>>>>> 427d8f7aee422da59ed62cec4ca39f26bec33902
      <Footer />

    </>
  );
}

export default App;
