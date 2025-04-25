export function calcPagination(items, pageSize, currentPage) {
  const totalItems = items.length
  const totalPages = Math.ceil(totalItems / pageSize)

  if (currentPage < 1) currentPage = 1
  if (currentPage > totalPages) currentPage = totalPages

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  return {
    totalPages,
    data: items.slice(startIndex, endIndex),
  }
}
