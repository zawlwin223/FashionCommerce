import '../style/shop.css'
import Products from './Products'
import Pagination from './Pagination'
import { calcPagination } from '../utils/calcPagination'
import { useState } from 'react'

import Loader from './Loader'

import { fetchProducts } from '../utils/http'

import { useQuery } from '@tanstack/react-query'
import ErrorModal from './ErrorModal'

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1)

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

  console.log(isError, error)

  if (isError) {
    const errorMessage = error?.message
    return <ErrorModal title="Error" message={errorMessage}></ErrorModal>
  }

  const nextPage = () => setCurrentPage((page) => page + 1)
  const prevPage = () => setCurrentPage((page) => page - 1)
  const switchPage = (page) => setCurrentPage(page)

  if (products) {
    const { totalPages, data } = calcPagination(products, 8, currentPage)
    console.log(data)
    return (
      <section className="shop_page">
        <div>
          <div className="items">
            <Products products={data} />
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

  if (isLoading) {
    return <Loader></Loader>
  }

  return null
}
