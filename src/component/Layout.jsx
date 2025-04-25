import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Contact from '../pages/Contact'
import SignUp from '../pages/signUp'
// import CartDrawer from './Cart'
import CartSlide from './CartSlide'
import { useSelector } from 'react-redux'
import CheckOut from '../pages/CheckkOut'
import MessageModal from './MessageModal'

export default function Layout() {
  const isCartOpen = useSelector((state) => state.cart.isCartOpen)
  const isCheckOut = useSelector((state) => state.cart.isCheckOut)
  //fetching data

  return (
    <>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <SignUp></SignUp>
      <Contact></Contact>

      {/* {isCheckOut && <CheckOut></CheckOut>} */}
      <CartSlide isOpen={isCartOpen}></CartSlide>
    </>
  )
}
