import React from "react";
import { Ship, Plane, Truck } from "lucide-react";
import { motion } from "framer-motion";

const LogisticsPage = () => {
  // Animation settings
  const cardVariants = {
    hover: { scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" },
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Logistics & Shipping
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We ensure timely, reliable, and safe delivery of our agro products
            worldwide through sea, air, and road transport.
          </p>
        </div>

        {/* Shipping Options */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Sea Freight */}
          <motion.div
            className="text-center bg-white p-8 rounded-2xl shadow-sm cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Ship className="h-16 w-16 mx-auto text-green-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Sea Freight
            </h3>
            <p className="text-gray-600">
              Best for bulk shipments worldwide with competitive pricing and
              reliable schedules.
            </p>
          </motion.div>

          {/* Air Freight */}
          <motion.div
            className="text-center bg-white p-8 rounded-2xl shadow-sm cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Plane className="h-16 w-16 mx-auto text-green-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Air Freight
            </h3>
            <p className="text-gray-600">
              Fast delivery for urgent and premium quality shipments ensuring
              freshness and safety.
            </p>
          </motion.div>

          {/* Road Transport */}
          <motion.div
            className="text-center bg-white p-8 rounded-2xl shadow-sm cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Truck className="h-16 w-16 mx-auto text-green-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Road Transport
            </h3>
            <p className="text-gray-600">
              Efficient regional and last-mile deliveries with a strong local
              transport network.
            </p>
          </motion.div>
        </div>

        {/* Extra Section */}
        <div className="mt-20 bg-green-700 text-white p-10 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Global Shipping Partnerships
          </h2>
          <p className="max-w-3xl mx-auto">
            We collaborate with trusted shipping partners across the globe,
            ensuring cost-effective and on-time deliveries to meet our clients’
            needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogisticsPage;
