import { useSelector } from 'react-redux'
export function calcTotalCartItemsPrice() {
  const cartItems = useSelector((state) => state.cart.items)

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  return totalPrice
}
