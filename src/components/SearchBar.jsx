export default function SearchBar({
  search,
  setSearch,
  handleSearch,
  barcode,
  setBarcode,
  handleBarcode,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-3 justify-center">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 border rounded-xl w-full md:w-60 focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-600"
      >
        Search
      </button>

      <input
        type="text"
        placeholder="Barcode..."
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        className="px-4 py-2 border rounded-xl w-full md:w-60 focus:ring-2 focus:ring-purple-400"
      />

      <button
        onClick={handleBarcode}
        className="bg-purple-500 text-white px-5 py-2 rounded-xl hover:bg-purple-600"
      >
        Find
      </button>
    </div>
  );
}
