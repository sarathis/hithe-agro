import { useState } from "react";
import { productsData } from "../../data/products";
import ProductCard from "./ProductCard";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 👈 change how many products per page

  // 1. Filtering logic
  const filteredProducts = productsData.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className=" max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
          Our Products
        </h1>
        <p className="text-gray-700 mb-8">
          Browse our export-quality vegetables. Click any card to see detailed
          product information and handling guidelines.
        </p>
      </div>
      {/* Search Bar */}
      <div className="flex justify-end items-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset page on search
          }}
          className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Product Grid */}
      {paginatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          ← Prev
        </button>

        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === idx + 1
                ? "bg-green-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </section>
  );
};

export default Products;
