import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigations/NavBar";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Products from "./components/products/Products";
import ProductDetails from "./components/product/ProductDetails";
import Process from "./components/export-process/Process";
import Quote from "./components/quote/Quote";
import Contact from "./components/contact/Contact";
import LearnMore from "./components/learn-more/LearnMore";
import Site from "./components/site-map/Site";
import FAQ from "./components/faq/Faq";
import Certifications from "./components/certifications/Certifications";
import Logistics from "./components/logistics/Logistics";
import Gallery from "./components/gallery/Gallery";
import Vision from "./components/Vision/Vision";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16 w-full px-4 sm:px-6 lg:px-">
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/main" Component={Main} />
          <Route path="/about" Component={About} />
          <Route path="/products" Component={Products} />
          <Route path="/product/:productId" Component={ProductDetails} />
          <Route path="/process" Component={Process} />
          <Route path="/contact" Component={Contact} />
          <Route path="/quote" Component={Quote} />
          <Route path="/learn" Component={LearnMore} />
          <Route path="/site" Component={Site} />
          <Route path="/faq" Component={FAQ} />
          <Route path="/cert" Component={Certifications} />
          <Route path="/logi" Component={Logistics} />
          <Route path="/gallery" Component={Gallery} />
           <Route path="/vision" Component={Vision} />
        </Routes>
      </div>
    </>
  );
};

export default Home;
