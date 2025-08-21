import { Link } from "react-router-dom";
import { Product } from "../../types/DataTypes";

const ProductCard=(product:Product)=>{
    
    return (<>
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <Link to={`/product/${product.id}`} className="block">
        <div className="w-full h-64 md:h-72 lg:h-80 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="p-6">
          <h3 className=" flex items-start gap-2 text-2xl font-semibold text-green-800 mb-2">
            {product.title}
          </h3>
          <p className="leading-relaxed text-left block text-gray-600 mb-4">{product.shortDesc}</p>

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

export default ProductCard;
