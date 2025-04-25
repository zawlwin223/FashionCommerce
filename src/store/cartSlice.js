import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isCartOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, size, quantity, title, price, image } = action.payload
      const existingItem = state.items.find(
        (item) => item.id === id && item.size === size
      )

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({ id, size, quantity, title, price, image })
      }
    },
    openCart: (state) => {
      state.isCartOpen = true
    },
    closeCart: (state) => {
      state.isCartOpen = false
    },

    removeItemFromCart: (state, action) => {
      console.log(action.payload)
      state.items = state.items
        .map((item) => {
          if (
            item.id === action.payload.id &&
            item.size === action.payload.size
          ) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 } // Reduce quantity by 1
            } else {
              return null // Remove item if quantity is 1
            }
          }
          return item // Keep all other items unchanged
        })
        .filter(Boolean) // Remove null values (items with quantity === 1)
    },
    resetCart: (state) => {
      state.items = []
    },
  },
})

export const { addToCart, resetCart, closeCart, openCart, removeItemFromCart } =
  cartSlice.actions
export default cartSlice.reducer
