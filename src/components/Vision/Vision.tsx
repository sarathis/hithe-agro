"use client";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Driving excellence in global exports with integrity, sustainability, and innovation.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-left text-justify">
              To be a globally trusted leader in agricultural exports,
              delivering sustainable, high-quality produce that connects
              communities and markets with excellence.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-left text-justify">
              We are committed to ensuring freshness, safety, and reliability
              in every shipment. By embracing innovation, strengthening farmer
              partnerships, and maintaining strict quality standards, we strive
              to exceed customer expectations and contribute to a sustainable
              global food supply chain.
            </p>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-green-100 text-green-800 font-medium px-6 py-3 rounded-full shadow-md">
            Global Reach, Local Roots
          </span>
        </motion.div>
      </div>
    </section>
  );
}
