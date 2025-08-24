// src/pages/ProductDetail.tsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { productsData } from "../../data/products";
import { Check } from "lucide-react";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.id === Number(productId));

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
    <main className="pt-6">
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-3xl font-bold text-green-800 mb-3">
            {product.title}
          </h1>
          <p className="text-gray-600 mb-4">{product.shortDesc}</p>

          <h3 className="text-lg font-semibold mb-2">Product Summary</h3>

          <ul className="space-y-3 text-gray-700 mb-6">
            {product.longDescBullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="leading-relaxed text-left block">{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mb-6">
            {product.packSizes?.map((s) => (
              <span
                key={s}
                className="text-sm px-3 py-1 border rounded-full text-gray-700 border-green-600"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-auto flex space-x-3">
            <Link
              to="/quote"
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
            >
              Request Quote
            </Link>
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
