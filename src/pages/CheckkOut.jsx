import CartItem from '../component/CartItem'
import '../style/checkOut.css'
import { useNavigate } from 'react-router-dom'
import { calcTotalCartItemsPrice } from '../utils/calcTotalCartItemsPrice'
import { formatCurrency } from '../utils/currencyFormatter'
import { useDispatch } from 'react-redux'
import { closeCart } from '../store/cartSlice'
import BillingInfo from '../component/BillingInfo'
export default function CheckOut() {
  const navigate = useNavigate()

  const totalPrice = calcTotalCartItemsPrice()

  const dispatch = useDispatch()

  const closeCheckOutHandler = function () {
    navigate(-1)
    dispatch(closeCart())
  }

  return (
    <>
      <div className="checkout">
        <h1>Check Out</h1>
        <p>Check out your cart items here.</p>
        <button className="open-modal-btn">Open Checkout Modal</button>

        <div className="modal-overlay">
          <div className="modal">
            <div className="close-icon" onClick={closeCheckOutHandler}>
              ✖
            </div>

            <div className="modal-left">
              <h2>Billing Information</h2>
              <BillingInfo />
            </div>

            <div className="modal-right">
              <h2>Your Cart</h2>
              <div className="cart-items">
                <CartItem />
              </div>
              <div className="checkout-summary">
                <div className="total-amount">
                  <h3>Total: {formatCurrency(totalPrice)}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
