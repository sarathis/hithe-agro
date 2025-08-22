import farm from "../../images/farm.png";
const About = () => {
  return (
    <>
      {/* About Us Page */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            About Us
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-left">
            At <span className="font-semibold">Hithe Agro</span>, we are
            passionate about bringing fresh and organic produce from the farms
            of Nilgiris directly to your home. With years of expertise in
            sustainable farming, we ensure quality, trust, and a better
            lifestyle for our customers.
          </p>
          <p className="text-gray-700 leading-relaxed text-left">
            Our mission is to promote healthy living while supporting local
            farmers. We believe in transparency, sustainability, and delivering
            the best nature has to offer. 🌱
          </p>
          <img
            src={farm}
            alt="About us"
            className="rounded-2xl shadow-lg mt-8"
          />
        </div>

        {/* Right Column */}
        <div className="grid grid-rows-2 gap-6">
          {/* Top Row */}
          <div className="bg-green-100 rounded-2xl p-8 shadow-md flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Our Vision & Mission
            </h3>
            <p className="text-gray-700 text-left text-justify">
              To be a globally trusted leader in agricultural exports,
              delivering sustainable, high-quality produce that connects
              communities and markets with excellence.
            </p>
            <br/>
             <p className="text-gray-700 text-left text-justify">
             We are committed to ensuring freshness, safety, and reliability
              in every shipment. By embracing innovation, strengthening farmer
              partnerships, and maintaining strict quality standards, we strive
              to exceed customer expectations and contribute to a sustainable
              global food supply chain.
            </p>
          </div>

          {/* Bottom Row (Achievements Cards) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <h4 className="text-lg font-semibold text-green-700 mb-2">
                10+ Years
              </h4>
              <p className="text-gray-600">Experience in farming</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <h4 className="text-lg font-semibold text-green-700 mb-2">
                500+ Farmers
              </h4>
              <p className="text-gray-600">Empowered through partnerships</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <h4 className="text-lg font-semibold text-green-700 mb-2">
                100% Organic
              </h4>
              <p className="text-gray-600">Sustainable products</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <h4 className="text-lg font-semibold text-green-700 mb-2">
                20K+
              </h4>
              <p className="text-gray-600">Happy customers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
