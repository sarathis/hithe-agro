import harvest from "../../images/harvest.png";
export default function LearnMore() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Learn More About <span className="text-yellow-300">Hithe Agro Exports</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed text-left">
            From the fertile Nilgiris region to homes across the globe, 
            committed to delivering freshness, quality, and trust.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed text-left">
            At <strong>Hithe Agro Exports</strong>, we pride ourselves on being a bridge 
            between <span className="font-medium">farmers and global markets</span>. 
            What began as a small group of dedicated growers has today evolved 
            into a network of <strong>150+ people</strong> and multiple trusted sellers 
            supplying premium agro products.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed text-left">
            Our mission is simple — to make sure that when you choose 
            <span className="font-semibold text-green-700"> Hithe Agro Exports</span>, 
            you’re choosing <span className="italic">freshness, sustainability, and trust</span>.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src={harvest}
            alt="Farm workers harvesting"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold text-green-700 mb-4">🌱 Farm Fresh</h3>
              <p className="text-gray-600">
                Direct from Nilgiris farms, harvested and packed with utmost care.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold text-green-700 mb-4">👨‍🌾 150+ Workers</h3>
              <p className="text-gray-600">
                A strong, dedicated workforce ensuring quality at every stage.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold text-green-700 mb-4">🌍 Global Reach</h3>
              <p className="text-gray-600">
                Exporting across the nation and worldwide with trust and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
        <p className="mb-8 text-lg">
          Looking to collaborate or source fresh agro products?  
          Let’s grow together!
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-yellow-400 text-green-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
