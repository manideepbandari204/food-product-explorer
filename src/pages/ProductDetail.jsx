import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchByBarcode } from "../services/api";

export default function ProductDetail() {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, [barcode]);

  const loadProduct = async () => {
    const data = await fetchByBarcode(barcode);
    setProduct(data.product);
  };

  if (!product) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-4">
          {product.product_name}
        </h1>

        <img
          src={product.image_front_url}
          alt=""
          className="w-full h-60 object-cover rounded mb-4"
        />

        <p className="mb-2">
          <strong>Category:</strong> {product.categories}
        </p>

        <p className="mb-2">
          <strong>Ingredients:</strong>{" "}
          {product.ingredients_text || "Not available"}
        </p>

        <p className="mb-2">
          <strong>Labels:</strong> {product.labels || "N/A"}
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">
          Nutrition
        </h2>

        <ul className="space-y-1">
          <li>Energy: {product.nutriments?.energy}</li>
          <li>Fat: {product.nutriments?.fat}</li>
          <li>Carbs: {product.nutriments?.carbohydrates}</li>
          <li>Protein: {product.nutriments?.proteins}</li>
        </ul>
      </div>
    </div>
  );
}
