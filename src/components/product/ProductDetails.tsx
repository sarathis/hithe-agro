// src/pages/ProductDetail.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsData } from "../../data/products";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.id === "garlic");

  if (!product) {
    return (
      <div className="pt-24 max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          Back to products
        </button>
      </div>
    );
  }

  return (
    <main className="pt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Big Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[480px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Summary & Details */}
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl font-bold text-green-800 mb-3">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.shortDesc}</p>

          <h3 className="text-lg font-semibold mb-2">Product Summary</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            {product.longDescBullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mb-6">
            {product.packSizes?.map((s) => (
              <span key={s} className="text-sm px-3 py-1 border rounded-full text-gray-700">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-auto flex space-x-3">
            <a
              href="#contact"
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
            >
              Request Quote
            </a>
            <button
              onClick={() => navigate(-1)}
              className="border border-green-600 text-green-600 px-5 py-2 rounded-lg"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}