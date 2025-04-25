import '../style/nagivation.css'
import shoppingBag from '../img/shopping-bag.png'
import { Link, NavLink } from 'react-router-dom'
import { openCart } from '../store/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
export default function Navigation() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const itemsQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const openCartHandle = function () {
    dispatch(openCart())
  }
  return (
    <>
      <nav className="nav">
        <h3>Logo</h3>
        {/* <div className="menu-toggle" id="menu-toggle">
          <div></div>
          <div></div>
          <div></div>
        </div> */}
        <ul id="nav-menu">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav_link active' : 'nav_link'
              }
              to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav_link active' : 'nav_link'
              }
              to="/shop">
              Shop
            </NavLink>
          </li>
          <li>
            {itemsQuantity > 0 && (
              <span className="badge">{itemsQuantity}</span>
            )}
            <button onClick={openCartHandle}>
              <img src={shoppingBag} alt="" />
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
