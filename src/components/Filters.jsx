export default function Filters({
  categories,
  category,
  setCategory,
  sort,
  setSort,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-3 justify-center mt-4">

      {/* Dynamic Categories */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded-xl"
      >
        <option value="">All Categories</option>
        {categories.slice(0, 20).map((cat, index) => (
          <option key={index} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* Sorting */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="px-4 py-2 border rounded-xl"
      >
        <option value="">Sort</option>
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
        <option value="grade-asc">Grade A-E</option>
        <option value="grade-desc">Grade E-A</option>
      </select>
    </div>
  );
}
