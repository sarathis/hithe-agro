import React, { useState } from "react";
import Footer from "../Footer/Footer";

  const images = [
    { url: "https://picsum.photos/600/400?random=1", category: "Farm" },
    { url: "https://picsum.photos/600/400?random=2", category: "Vegetables" },
    { url: "https://picsum.photos/600/400?random=3", category: "Garlic" },
    { url: "https://picsum.photos/600/400?random=4", category: "Spices" },
    { url: "https://picsum.photos/600/400?random=5", category: "Harvest" },
    { url: "https://picsum.photos/600/400?random=6", category: "Farm" },
  ];

// ✅ FIX for TypeScript error
const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (<>
    <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Our Gallery
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-green-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(img.url)}
          >
            <img
              src={img.url}
              alt={img.category}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-sm px-3 py-2 w-full text-center opacity-0 group-hover:opacity-100 transition">
              {img.category}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1 text-lg font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
    </div>
    <Footer/>
    </>
  );
}
