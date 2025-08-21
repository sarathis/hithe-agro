
import Banner from "./Banner";
import Footer from "../Footer/Footer";
const Main = () => {
 
  return (
    <>
      <section className="pt-1 bg-green-100 w-full">
        <Banner/>
      </section>
      <section>
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          {/* Wide Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About Hithe Agro
            </h2>
            <p className="text-gray-600 mb-4">
              From Nilgiris farms to global tables 🌍, we bring you the freshest
              garlic, vegetables, and agro products directly from trusted
              farmers.
            </p>
            <p className="text-gray-600 mb-4">
              We ensure quality, freshness, and trust in every delivery. Our
              products are carefully sourced to maintain authenticity and
              natural goodness.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg w-fit hover:bg-green-700">
              Learn More
            </button>
          </div>

          {/* Smaller Column */}
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1582515073490-dc0c4c21c3b4"
              alt="Fresh Agro Products"
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Hithe Agro?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <img
                src="https://img.icons8.com/color/96/vegetarian-food.png"
                alt="Fresh Products"
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                100% Fresh
              </h3>
              <p className="text-gray-600">
                Direct from farms, keeping the freshness and nutrition intact.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <img
                src="https://img.icons8.com/color/96/organic-food.png"
                alt="Organic"
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Organic & Natural
              </h3>
              <p className="text-gray-600">
                Our products are grown sustainably without harmful chemicals.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <img
                src="https://img.icons8.com/color/96/delivery.png"
                alt="Fast Delivery"
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick, reliable, and safe delivery right at your doorstep.
              </p>
            </div>
             {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <img
                src="https://img.icons8.com/color/96/delivery.png"
                alt="Fast Delivery"
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick, reliable, and safe delivery right at your doorstep.
              </p>
            </div>
             {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <img
                src="https://img.icons8.com/color/96/delivery.png"
                alt="Fast Delivery"
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick, reliable, and safe delivery right at your doorstep.
              </p>
            </div>
             {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <img
                src="https://img.icons8.com/color/96/delivery.png"
                alt="Fast Delivery"
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick, reliable, and safe delivery right at your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

    <Footer/>
    </>
  );
};

export default Main;
