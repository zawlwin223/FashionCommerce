import { useMutation } from '@tanstack/react-query'
import { sendOrder } from '../utils/http'
import MessageModal from './MessageModal'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { formatCurrency } from '../utils/currencyFormatter'
import { calcTotalCartItemsPrice } from '../utils/calcTotalCartItemsPrice'
import ErrorModal from './ErrorModal'

export default function BillingInfo() {
  const [errors, setErrors] = useState({})
  console.log(errors)
  const [messageModal, setMessageModal] = useState(false)
  const cartItems = useSelector((state) => state.cart.items)
  const totalPrice = calcTotalCartItemsPrice()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: sendOrder,
    onSuccess: (data) => {
      console.log('Order is success')
      setMessageModal(true)
    },
  })

  const validateForm = (customer) => {
    const newErrors = {}

    if (!customer.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!customer.email || !/\S+@\S+\.\S+/.test(customer.email))
      newErrors.email = 'Valid email is required'
    if (!customer.address.trim()) newErrors.address = 'Address is required'
    if (!customer.city.trim()) newErrors.city = 'City is required'
    if (!customer.state.trim()) newErrors.state = 'State is required'
    if (!customer.zipCode.trim()) newErrors.zipCode = 'Zip code is required'
    if (!customer.country.trim()) newErrors.country = 'Country is required'

    return newErrors
  }
  const submitOrderHandler = function (e) {
    e.preventDefault()

    const form = e.target.closest('form') // get the form element
    const formData = new FormData(form)
    console.log(formData)

    const customer = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      address: formData.get('address'),
      city: formData.get('city'),
      state: formData.get('state'),
      zipCode: formData.get('zipCode'),
      country: formData.get('country'),
    }

    const validationErrors = validateForm(customer)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({}) // clear errors if valid

    const order = {
      customer,
      items: cartItems,
      totalPrice: formatCurrency(totalPrice),
      date: new Date().toISOString().split('T')[0],
    }

    mutate({ order })
  }
  if (isError) {
    return <ErrorModal title="Error" message={error?.message}></ErrorModal>
  }
  return (
    <>
      {messageModal && (
        <MessageModal
          title="Success!"
          message="Your order is successfully submitted."
        />
      )}
      <form className="billing-form">
        <input name="fullName" type="text" placeholder="Full Name" required />
        {errors.fullName && <p className="error-text">{errors.fullName}</p>}

        <input name="email" type="email" placeholder="Email" required />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <input name="address" type="text" placeholder="Address" required />
        {errors.address && <p className="error-text">{errors.address}</p>}

        <div className="grid-row">
          <input name="city" type="text" placeholder="City" required />
          {errors.city && <p className="error-text">{errors.city}</p>}
          <input name="state" type="text" placeholder="State" required />
          {errors.state && <p className="error-text">{errors.state}</p>}
        </div>

        <div className="grid-row">
          <input name="zipCode" type="text" placeholder="Zip Code" required />
          {errors.zipCode && <p className="error-text">{errors.zipCode}</p>}
          <input name="country" type="text" placeholder="Country" required />
          {errors.country && <p className="error-text">{errors.country}</p>}
        </div>

        <button
          type="submit"
          onClick={(e) => submitOrderHandler(e)}
          className={
            cartItems.length <= 0 || isPending ? 'disabled' : 'primary-btn'
          }
          disabled={cartItems.length <= 0}>
          {isPending ? 'Order is submitting' : 'Order Now'}
        </button>
      </form>
    </>
  )
}
