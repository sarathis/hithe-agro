import { CheckCircle, Package, Ship, Globe } from "lucide-react";
import ProcessSteps from "./ProcessSteps";

export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Sourcing",
      description: "We source fresh vegetables directly from trusted Nilgiris farms.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      id: 2,
      title: "Quality Check",
      description: "Every product is carefully inspected to meet international export standards.",
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
    },
    {
      id: 3,
      title: "Packaging",
      description: "We use modern cold storage & export-grade packaging for freshness.",
      icon: <Package className="h-8 w-8 text-yellow-600" />,
    },
    {
      id: 4,
      title: "Shipping",
      description: "Fast and secure shipping from Coimbatore to Dubai and global destinations.",
      icon: <Ship className="h-8 w-8 text-indigo-600" />,
    },
    {
      id: 5,
      title: "Delivery",
      description: "On-time delivery to your warehouse or doorstep, globally.",
      icon: <Globe className="h-8 w-8 text-purple-600" />,
    },
  ];

  return (
    <div className="pt-20 px-6 lg:px-20">
      <h1 className="text-4xl font-bold text-center mb-12">Our Export Process</h1>
      <div className="max-w-5xl mx-auto space-y-8">
        {steps.map((step) => (
         <ProcessSteps id={step.id} icon={step.icon} title={step.title} description={step.description}/>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Looking to import fresh vegetables?</h2>
        <p className="text-gray-600 mb-6">Contact us today to discuss your requirements and partnerships.</p>
        <a
          href="/contact"
          className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}