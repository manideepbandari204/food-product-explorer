export default function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-4 cursor-pointer hover:-translate-y-2"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={product.image_front_thumb_url}
          alt=""
          className="w-full h-44 object-cover group-hover:scale-110 transition duration-300"
        />
      </div>

      <h3 className="font-semibold mt-3 text-lg line-clamp-1">
        {product.product_name || "No Name"}
      </h3>

      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
        {product.categories}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-xs text-gray-400">
          {product.brands || "Unknown"}
        </span>

        <span className="px-3 py-1 text-xs font-bold rounded-full bg-linear-to-r from-green-300 to-green-500 text-white">
          {product.nutrition_grade_fr?.toUpperCase() || "N/A"}
        </span>
      </div>
    </div>
  );
}
