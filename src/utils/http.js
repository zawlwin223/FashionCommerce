import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()
export async function fetchProducts({ signal, id = null }) {
  let urls = [
    "https://fakestoreapi.com/products/category/men's clothing",
    "https://fakestoreapi.com/products/category/women's clothing",
    'https://fakestoreapi.com/products/category/jewelery',
  ]

  if (id) {
    urls = [`https://fakestoreapi.com/products/${id}`]
  }

  try {
    // Fetch all data in parallel
    const responses = await Promise.all(
      urls.map((url) => fetch(url, { signal }))
    )

    console.log(responses)
    // Check for errors
    for (const response of responses) {
      if (!response.ok) {
        const errorText = await response.text()
        console.log(errorText)
        throw new Error('Failed to fetch data')
      }
    }

    // Parse JSON responses
    const results = await Promise.all(responses.map((res) => res.json()))
    console.log(results)
    return results.flat() // Return flattened product list
  } catch (error) {
    throw new Error('Failed to Fetch')
  }
}

export async function sendOrder({ order }) {
  console.log(order)
  try {
    const response = await fetch(
      'https://fashioncommerce-6a4f7-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    if (!response.ok) {
      throw new Error('Failed to send order')
    }
  } catch (error) {
    console.log(error)
    throw new Error('Failed to send order')
  }
}
