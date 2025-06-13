import { QueryClient } from '@tanstack/react-query'
import { db } from '../../firebase'
import { collection, getDoc, doc, getDocs } from 'firebase/firestore'

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

// import { doc, getDoc, collection, getDocs } from 'firebase/firestore'

export async function fetchProductsFromFB({ signal, id = null }) {
  if (signal.aborted) {
    throw new Error('Fetch aborted')
  }

  try {
    if (id !== null) {
      console.log('Fetching product with ID:', id)
      const docRef = doc(db, 'products', id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        // Return single product as an object (not array)
        console.log(docSnap)
        return { id: docSnap.id, ...docSnap.data() }
      } else {
        // No such document found
        console.log('No such document!')
        return null
      }
    } else {
      // Fetch all products
      const querySnapshot = await getDocs(collection(db, 'products'))
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      return products
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    throw new Error('Failed to fetch products from Firestore')
  }
}
