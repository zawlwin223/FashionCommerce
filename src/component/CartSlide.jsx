import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../style/cartSlide.css'
import { closeCart } from '../store/cartSlice'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { calcTotalCartItemsPrice } from '../utils/calcTotalCartItemsPrice'

export default function CartSlide({ isOpen }) {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const totalPrice = calcTotalCartItemsPrice()

  const closeCartHanlde = function () {
    dispatch(closeCart())
  }

  const checkOutHandler = function (e) {
    if (cartItems.length <= 0) {
      e.preventDefault()
    }
    // closeCartHanlde()
  }
  return (
    <div>
      <div className={`cartSlide ${isOpen ? 'open' : ''}`}>
        <button onClick={closeCartHanlde} className="close-cart-btn">
          ✖
        </button>
        <h2 className="cart_title">Your Cart</h2>

        <CartItem></CartItem>
        <div>
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <Link
          to="/checkout"
          onClick={(e) => checkOutHandler(e)}
          className={cartItems.length <= 0 ? 'disabled' : 'checkout-btn'}>
          Checkout
        </Link>
      </div>
    </div>
  )
}
