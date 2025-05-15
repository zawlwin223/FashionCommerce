import '../style/shop.css'
import Products from './Products'
import Pagination from './Pagination'
import { calcPagination } from '../utils/calcPagination'
import { useState } from 'react'
import Filter from './Filter'
import Search from './Search'

import Loader from './Loader'

import { fetchProducts } from '../utils/http'

import { useQuery } from '@tanstack/react-query'
import ErrorModal from './ErrorModal'

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchProducts, setSearchProducts] = useState(null)

  //fetching data
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: ({ signal }) => fetchProducts({ signal }),
    staleTime: Infinity, // Keeps data always fresh (never stale)
    cacheTime: Infinity, // Keeps data in cache until page reload
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  //pagination button
  const nextPage = () => setCurrentPage((page) => page + 1)
  const prevPage = () => setCurrentPage((page) => page - 1)
  const switchPage = (page) => setCurrentPage(page)

  //search by title
  const handleSearch = (search) => {
    console.log(products)
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    if (filteredProducts.length === 0) {
      setSearchProducts([])
      return
    }
    setSearchProducts(filteredProducts)
  }

  //search by category
  const handleFilter = (category) => {
    const filteredProducts =
      category === ''
        ? products
        : products.filter((product) => product.category === category)

    setSearchProducts(filteredProducts)
  }

  const filteredLists = searchProducts ?? products

  if (isError) {
    const errorMessage = error?.message
    return <ErrorModal title="Error" message={errorMessage}></ErrorModal>
  }

  if (isLoading) {
    return <Loader></Loader>
  }

  if (products) {
    const { totalPages, data: paginatedProducts } = calcPagination(
      filteredLists,
      8,
      currentPage
    )

    return (
      <section className="shop_page">
        <div>
          <div className="search_container">
            <Search search={handleSearch}></Search>
            <Filter products={products} filter={handleFilter}></Filter>
          </div>
          {Array.isArray(searchProducts) && searchProducts.length === 0 && (
            <p className="search-error_message">No Products Found</p>
          )}

          <div className="items">
            <Products products={paginatedProducts} />
          </div>
          <Pagination
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
            switchPage={switchPage}
            totalPages={totalPages}
          />
        </div>
      </section>
    )
  }

  return null
}
