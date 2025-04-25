import './App.css'
import Home from './pages/Home'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './utils/http'

import Layout from './component/Layout'
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom'
// import ProductDetail from './pages/ProductDetail'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { lazy, Suspense } from 'react'
import Loader from './component/Loader'
import CheckOut from './pages/CheckkOut'

const Shop = lazy(() => import('./component/Shop'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      { path: '/', element: <Home></Home> },
      {
        path: '/shop',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <Shop></Shop>
          </Suspense>
        ),
      },
      {
        path: '/shop/:id',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <ProductDetail key={useLocation.pathname}></ProductDetail>
          </Suspense>
        ),
      },
      {
        path: '/checkOut',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <CheckOut></CheckOut>
          </Suspense>
        ),
      },
    ],
  },
])
function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
