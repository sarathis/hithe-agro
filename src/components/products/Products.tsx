import { useState } from "react";
import { productsData } from "../../data/products";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 


  const filteredProducts = productsData.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );


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

      <SearchBar searchTerm={searchTerm} setCurrentPage={setCurrentPage} setSearchTerm={setSearchTerm}/>
      {paginatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
    </section>
  );
};

export default Products;
