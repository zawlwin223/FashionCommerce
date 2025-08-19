import { Link, useParams } from 'react-router-dom'
import '../style/productDetail.css'
import { formatCurrency } from '../utils/currencyFormatter'
import { useDispatch } from 'react-redux'
import { addToCart, openCart } from '../store/cartSlice'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../utils/http'
import Loader from '../component/Loader'
import ErrorModal from '../component/ErrorModal'
import { fetchProductsFromFB } from '../utils/http'
export default function ProductDetail() {
  const id = useParams().id
  console.log(id)
  //search product by id
  let {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: ({ signal }) => fetchProductsFromFB({ signal, id }),
    staleTime: 5000, // Keeps data always fresh (never stale)
    cacheTime: Infinity, // Keeps data in cache until page reload
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  const [size, setSize] = useState('M')
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decreaseQuantity = () => {
    setQuantity((prev) => prev - 1)
  }

  const changeSize = (size) => {
    setSize(size)
  }
  const handleSubmit = () => {
    const order = { ...product, size, quantity }

    dispatch(addToCart(order))
    dispatch(openCart())
    setSize('M')
    setQuantity(1)
  }

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <ErrorModal title="Error" message={error?.message}></ErrorModal>
  }

  if (product) {
    const productSize = product.size.split(',')
    // product = product[0]
    return (
      <>
        (
        <section className="detail_page">
          <div className="image_part">
            <img
              src={product.image.url}
              alt=""
              loading="lazy"
              className="detail_img"
            />
          </div>
          <article className="detail_info">
            <span>
              <Link className="nav_link" to="/shop">
                Back
              </Link>
              {product.category}
            </span>
            <h2>{product.title}</h2>
            <p className="price">{formatCurrency(product.price)}</p>
            {/* Size selection */}
            <select
              onChange={(event) => changeSize(event.target.value)}
              value={size}
              className="size">
              {productSize.map((size) => {
                return <option value={size}>{size}</option>
              })}
            </select>
            <div>
              {/* Quantity selecion */}
              <div className="amount-container">
                <button
                  className="amount-button amount-button-decrease"
                  onClick={decreaseQuantity}>
                  -
                </button>
                <p>{quantity < 1 ? 1 : quantity}</p>
                <button
                  className="amount-button amount-button-increase"
                  onClick={increaseQuantity}>
                  +
                </button>
              </div>
              {/* Add to cart button */}
              <button onClick={handleSubmit} className="add_to_cart">
                Add To Cart
              </button>
            </div>
            <h3>Product Description</h3>
            <p>{product.description}</p>
          </article>
        </section>
      </>
    )
  }
}
