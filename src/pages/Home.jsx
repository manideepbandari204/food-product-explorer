import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchProducts,
  searchProducts,
  fetchByBarcode,
  fetchByCategory,
  fetchCategories,
} from "../services/api";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

export default function Home() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [barcode, setBarcode] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    loadProducts();
  }, [page]);

  useEffect(() => {
    fetchCategories().then((data) =>
      setCategories(data.tags || [])
    );
  }, []);

  useEffect(() => {
    if (category) {
      setLoading(true);
      fetchByCategory(category).then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      });
    }
  }, [category]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts(page);
      setProducts((prev) => [...prev, ...(data.products || [])]);
    } catch {
      alert("API Error");
    }
    setLoading(false);
  };

  const handleSearch = async () => {
    setLoading(true);
    const data = await searchProducts(search);
    setProducts(data.products || []);
    setLoading(false);
  };

  const handleBarcode = async () => {
    setLoading(true);
    const data = await fetchByBarcode(barcode);
    setProducts(data.product ? [data.product] : []);
    setLoading(false);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "name-asc")
      return (a.product_name || "").localeCompare(b.product_name || "");
    if (sort === "name-desc")
      return (b.product_name || "").localeCompare(a.product_name || "");
    if (sort === "grade-asc")
      return (a.nutrition_grade_fr || "").localeCompare(
        b.nutrition_grade_fr || ""
      );
    if (sort === "grade-desc")
      return (b.nutrition_grade_fr || "").localeCompare(
        a.nutrition_grade_fr || ""
      );
    return 0;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-100 via-blue-50 to-white">

      {/* 🔥 Sticky Header */}
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b p-4 shadow-sm">
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          🍔 Food Explorer
        </h1>
      </div>

      <div className="p-4 max-w-7xl mx-auto">

        {/* Glass Panel */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-4 mb-6">

          <SearchBar
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            barcode={barcode}
            setBarcode={setBarcode}
            handleBarcode={handleBarcode}
          />

          <Filters
            categories={categories}
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
          />
        </div>

        {/* Products */}
        <div className="grid gap-6 mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {/* Skeleton Loading */}
          {loading &&
            Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-white rounded-2xl p-4 shadow"
              >
                <div className="h-40 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 mt-3 rounded"></div>
                <div className="h-3 bg-gray-200 mt-2 rounded"></div>
              </div>
            ))}

          {!loading &&
            sortedProducts.map((p, index) => (
              <ProductCard
                key={index}
                product={p}
                onClick={() => navigate(`/product/${p.code}`)}
              />
            ))}
        </div>

        {/* Empty */}
        {products.length === 0 && !loading && (
          <p className="text-center mt-10 text-gray-500 text-lg">
            No products found 😔
          </p>
        )}

        {/* Gradient Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setPage(page + 1)}
            className="px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-green-400 to-emerald-600 hover:scale-105 transition"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
