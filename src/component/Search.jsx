export default function ({ search }) {
  return (
    <>
      <input
        type="text"
        onChange={(e) => search(e.target.value)}
        className="search_input"
        placeholder="Search for products"
      />
    </>
  )
}
