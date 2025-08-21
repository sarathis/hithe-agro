import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

interface LinkItem {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const links: LinkItem[] = [
    { name: "Home", href: "/main" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Export Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-green-700 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 text-2xl font-bold tracking-wide">
            <img
              src={logo} // replace with your actual logo path
              alt="Hithe Agro Logo"
              className="h-8 w-8 object-contain"
            />
            <span>Hithe Agro Exports</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-yellow-300 transition"
              >
                {link.name}
              </Link>
            ))}
            {/* Get Quote Button */}
            <Link
              to="/quote"
              className="ml-4 bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Menu Toggle">
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-green-600">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block px-4 py-2 hover:bg-green-500"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* Get Quote Button in Mobile */}
          <Link
            to="/quote"
            className="block px-4 py-2 bg-yellow-400 text-green-900 font-semibold hover:bg-yellow-500"
            onClick={() => {
              alert("hi");
              setOpen(false);
            }}
          >
            Get
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
