"use client";
import { motion } from "framer-motion";

export default function ProcessSteps({ step }: { step: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex items-start gap-6 w-full"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full shadow-md">
        {step.icon}
      </div>

      {/* Card */}
      <div className="flex-1 p-6 rounded-xl shadow-lg bg-white border">
        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
        <p className="text-green-600 font-medium mb-2">{step.short}</p>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </motion.div>
  );
}
