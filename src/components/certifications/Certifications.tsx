import logo from "../../images/logo.png";

export default function Certifications() {
  const certifications = [
    {
      name: "ISO 22000: Food Safety Management",
      logo: logo, // replace with your logo file
      description:
        "Ensures food safety throughout the supply chain, guaranteeing quality in our export products.",
    },
    {
      name: "APEDA Registration",
      logo: logo,
      description:
        "Registered with Agricultural & Processed Food Products Export Development Authority, India.",
    },
    {
      name: "Global GAP",
      logo: logo,
      description:
        "Certified for good agricultural practices, ensuring sustainable farming methods.",
    },
    {
      name: "Organic Certification",
      logo: logo,
      description:
        "Recognized organic certification proving our commitment to chemical-free and natural produce.",
    },
      {
      name: "Organic Certification",
      logo: logo,
      description:
        "Recognized organic certification proving our commitment to chemical-free and natural produce.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
        Our Certifications
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
          >
            <img
              src={cert.logo}
              alt={cert.name}
              className="h-20 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {cert.name}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
