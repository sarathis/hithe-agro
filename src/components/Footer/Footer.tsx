const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-green-700 text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hithe Agro</h3>
            <p className="text-gray-200">
              Bringing farm-fresh products from Nilgiris to your home with trust
              and quality. 🌱
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@hitheagro.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Nilgiris, India</p>
          </div>
        </div>

        <div className="text-center text-gray-200 mt-10 border-t border-green-600 pt-6">
          © {new Date().getFullYear()} Hithe Agro. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
