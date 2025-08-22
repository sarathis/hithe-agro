export default function Site() {
  const siteLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Learn More", path: "/learn" },
    { name: "Certifications & Quality", path: "/cert" },
    { name: "Logistics & Shipping", path: "/logi" },
    { name: "Gallery", path: "/gallery" },
    { name: "FAQs", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
       { name: "Vision & Mission", path: "/vision" },
    
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-green-700 mb-8">Site Map</h1>
      <p className="text-gray-600 mb-6">
        Quick access to all sections of our website. Click below to explore.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {siteLinks.map((link, i) => (
          <li key={i}>
            <a
              href={link.path}
              className="block px-4 py-3 bg-gray-50 hover:bg-green-50 border rounded-lg shadow-sm text-green-700 font-medium"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
