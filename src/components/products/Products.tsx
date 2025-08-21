import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { productsData } from "../../data/products";
import { Product } from "../../types/DataTypes";
import Footer from "../Footer/Footer";

// src/data/products.ts


const Products=()=>{
    return (<><main>
      <section className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Our Products</h1>
          <p className="text-gray-700 mb-8">
            Browse our export-quality vegetables. Click any card to see detailed product information and handling guidelines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((p:Product) => (
              <ProductCard id={p.id} title={p.title} shortDesc={p.shortDesc} longDescBullets={p.longDescBullets} image={p.image} />
            ))}
          </div>
        </div>
      </section>
       <Footer/>
    </main>
  </>)
}
export default Products;