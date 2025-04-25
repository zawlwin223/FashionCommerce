// store.js
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

// Load cart state from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart')
    if (serializedCart === null) return undefined
    return JSON.parse(serializedCart)
  } catch (e) {
    console.warn('Failed to load cart from localStorage:', e)
    return undefined
  }
}

// Save cart state to localStorage
const saveCartToLocalStorage = (cartState) => {
  try {
    const serializedCart = JSON.stringify(cartState)
    localStorage.setItem('cart', serializedCart)
  } catch (e) {
    console.warn('Failed to save cart to localStorage:', e)
  }
}

const preloadedCartState = {
  cart: {
    items: loadCartFromLocalStorage(),
    isCartOpen: false,
  },
}
console.log(preloadedCartState)

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: preloadedCartState,
})

// Save to localStorage whenever cart state changes
store.subscribe(() => {
  const state = store.getState().cart.items
  saveCartToLocalStorage(state)
})
