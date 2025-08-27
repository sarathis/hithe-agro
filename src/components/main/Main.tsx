import Banner from "./Banner";
import Footer from "../Footer/Footer";
import carton from "../../images/carton.png";
import { Link } from "react-router-dom";
import CoreValues from "./CoreValues";

const Main = () => {
  return (
    <>
      <section className="pt-1 bg-green-100 w-full">
        <Banner />
      </section>
      <section>
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          {/* Wide Column */}
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Hithe Agro
            </h2>
            <p className="text-gray-600 mb-4 text-left">
              From Nilgiris farms to global tables 🌍, we bring you the freshest
              garlic, vegetables, and agro products directly from trusted
              farmers.
            </p>
            <p className="text-gray-600 mb-4 text-left">
              We ensure quality, freshness, and trust in every delivery. Our
              products are carefully sourced to maintain authenticity and
              natural goodness.
            </p>
            <p className="text-gray-600 mb-4 text-left">
              Hithe Agro Exports is a trusted name in the field of agricultural
              exports from India. We bring you fresh garlic, vegetables, and
              farm produce directly from the fertile lands of the Nilgiris. With
              a dedicated workforce of 150+ skilled people and partnerships with
              multiple sellers, we ensure high-quality products reach both
              domestic markets and international buyers.
            </p>
            <p className="text-gray-600 mb-4 text-left">
              We ensure quality, freshness, and trust in every delivery. Our
              products are carefully sourced to maintain authenticity and
              natural goodness.
            </p>
            <Link
              to="/learn"
              className="bg-green-600 text-white px-6 py-3 rounded-lg w-fit hover:bg-green-700"
            >
              Learn More
            </Link>
          </div>

          {/* Smaller Column */}
          <div className="flex items-center justify-center">
            <img
              src={carton}
              alt="Fresh Agro Products"
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <CoreValues />
      </section>

      <Footer />
    </>
  );
};

export default Main;
