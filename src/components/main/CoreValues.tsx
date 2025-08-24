import { CheckCircle, ClipboardCheck, Leaf, Recycle, Scale, Search, ShieldCheck, Snowflake, Sparkles, Sprout, Truck, Users } from "lucide-react";
import { IcoreValue } from "../../types/DataTypes";
"use client";
import { motion } from "framer-motion";
const CoreValues = () => {
  const coreValues: IcoreValue[] = [
    {
      id: 1,
      title: "100% Fresh",
      content: "Direct from farms, keeping the freshness and nutrition intact.",
      icon: <Sparkles className="mx-auto mb-4 w-16 h-16 text-green-700" />,
    },
    {
      id: 2,
      title: "Organic & Natural",
      content: "Our products are grown sustainably without harmful chemicals.",
      icon: <Leaf className="mx-auto mb-4 w-16 h-16 text-green-700" />,
    },
    {
      id: 3,
      title: "Fast Delivery",
      content: "Quick, reliable, and safe delivery right at your doorstep.",
      icon: <Truck  className="mx-auto mb-4 w-16 h-16 text-green-700" />,
    },
     {
      id: 4,
      title: "Eco-Friendly Cultivation",
      content: "We promote natural and organic farming practices wherever possible, reducing chemical dependency",
      icon: <Sprout className="mx-auto mb-4 w-16 h-16 text-green-700" />,
    },
     {
      id: 5,
      title: "Resource Efficiency",
      content: "Our processes focus on water conservation, renewable energy adoption, and minimizing wastage in the supply chain.",
      icon: <Recycle  className="mx-auto mb-4 w-16 h-16 text-green-700" />,
    },
    {
      id: 6,
      title: "Cold Chain & Packaging",
      content: "By using reefer trucks, cold rooms, and recyclable packaging, we reduce spoilage and environmental impact",
      icon: <Snowflake className="mx-auto mb-4 w-16 h-16 text-green-700" />,
    },
     {
      id: 7,
      title: "Community Support",
      content: "We work closely with farmers in Ooty and surrounding regions, ensuring fair trade, skill development, and long-term partnerships.",
      icon: <Users className="mx-auto mb-4 w-16 h-16 text-green-700" />,
    },
     {
      id: 8,
      title: "Verified Sourcing",
      content: "Direct partnerships with farmers to guarantee product origin and quality.",
      icon: <CheckCircle className="mx-auto mb-4 w-16 h-16 text-green-700" />,
    },
    {
      id: 9,
      title: "Strict Quality Control",
      content: "Compliance with international food safety and export standards.",
      icon: <ClipboardCheck className="mx-auto mb-4 w-16 h-16 text-green-700" />,
    },
    {
      id: 10,
      title: "Ethical Operations",
      content: "Fair trade practices, farmer empowerment, and eco-friendly methods.",
      icon: <Scale className="mx-auto mb-4 w-16 h-16 text-green-700" />,
    },
    {
      id: 11,
      title: "Traceability",
      content: "Each consignment is trackable from farm to destination, ensuring accountability.",
      icon: <Search className="mx-auto mb-4 w-16 h-16 text-green-700" />,
    },
  ];
  return (
    <>
     <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Hithe Agro?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((item: IcoreValue, index: number) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 12px 30px rgba(0,0,0,0.15)" }}
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CoreValues;
