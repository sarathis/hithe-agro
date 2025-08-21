import { Link } from "react-router-dom";
import { productsData } from "../../data/products";
// src/data/products.ts

const ProductCard=(product:any)=>{
    
    return (<>
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <Link to="/product/" className="block">
        <div className="w-full h-64 md:h-72 lg:h-80 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-semibold text-green-800 mb-2">
            {product.title}
          </h3>
          <p className="text-gray-600 mb-4">{product.shortDesc}</p>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {product.packSizes ? product.packSizes.join(" / ") : "Custom packs"}
            </span>
            <span className="text-sm font-medium text-green-600">View details →</span>
          </div>
        </div>
      </Link>
    </article>
    </>);
}
export {ProductCard}
const Products=()=>{
    return (<><main className="pt-16">
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Our Products</h1>
          <p className="text-gray-700 mb-8">
            Browse our export-quality vegetables. Click any card to see detailed product information and handling guidelines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  </>)
}
export default Products;