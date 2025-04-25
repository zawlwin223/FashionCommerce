import { useSelector, useDispatch } from 'react-redux'
import { removeItemFromCart } from '../store/cartSlice'
import '../style/cartItems.css'
export default function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const removeItem = (item) => {
    dispatch(removeItemFromCart(item))
  }

  return (
    <div className="cartItem_box">
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart_item">
            <div className="cart_item_img">
              <img src={item.image} alt={item.title} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.size}</p>
              <p>
                {item.quantity} x ${item.price}
              </p>
              <button
                onClick={() => removeItem({ id: item.id, size: item.size })}
                className="remove-btn">
                Clear Item
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  )
}
