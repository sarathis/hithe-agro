"use client";
import { CheckCircle, Package, Ship, Globe } from "lucide-react";
import ProcessSteps from "./ProcessSteps";
import Footer from "../Footer/Footer";

export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Sourcing",
      short: "Fresh from Nilgiris farms.",
      description:
        "We partner directly with trusted Nilgiris farmers to handpick vegetables at the peak of freshness. This ensures maximum nutrition, natural taste, and longer shelf life before leaving the farm.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "Quality Check",
      short: "Only the best makes it through.",
      description:
        "Every batch undergoes strict quality checks for size, weight, color, and freshness. Our experts follow international export standards so you can rely on consistent quality every time.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Packaging",
      short: "Freshness sealed with care.",
      description:
        "Using cold chain storage and export-grade packaging, we preserve natural freshness during transit. Our packing protects against damage, ensures compliance, and extends shelf life.",
      icon: <Package className="h-6 w-6" />,
    },
    {
      id: 4,
      title: "Shipping",
      short: "Reliable global logistics.",
      description:
        "From Coimbatore to Dubai and beyond, we partner with trusted logistics providers for secure shipping. With customs support and real-time tracking, your order is always on schedule.",
      icon: <Ship className="h-6 w-6" />,
    },
    {
      id: 5,
      title: "Delivery",
      short: "On time, every time.",
      description:
        "We ensure timely delivery to warehouses, retail outlets, or doorsteps worldwide. Our commitment is freshness at destination, strengthening long-term trust and partnerships.",
      icon: <Globe className="h-6 w-6" />,
    },
  ];

  return (
    <div className="pt-20 px-6 lg:px-20">
      <h1 className="text-4xl font-bold text-center mb-12">Our Export Process</h1>

      {/* Steps - vertical list, icons left, cards right */}
      <div className="flex flex-col space-y-10 max-w-4xl mx-auto">
        {steps.map((step) => (
          <ProcessSteps key={step.id} step={step} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Looking to import fresh vegetables?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact us today to discuss your requirements and partnerships.
        </p>
        <a
          href="/contact"
          className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition"
        >
          Get in Touch
        </a>
      </div>

      <Footer />
    </div>
  );
}
