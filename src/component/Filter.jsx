export default function Filter({ products, filter }) {
  const categories = products.map((product) => product.category.toLowerCase())
  console.log(categories)

  const uniqueCategories = [...new Set(categories)]
  console.log(uniqueCategories)

  return (
    <>
      <select
        className="search_category"
        onChange={(e) => filter(e.target.value)}>
        <option value="">All Categories</option>
        {uniqueCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  )
}
