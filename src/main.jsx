import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cart from './components/Cart/Cart.jsx'
import Layout from './Layout.jsx'
import Shopping from './components/Shopping/Shopping.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartContextProvider from './context/CartContextProvider.jsx'
import SearchContextProvider from './context/SeachContextProvider.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,

  children: [
    {
      path: "",
      element: <Shopping/>
    },
    {
      path: 'cart',
      element: <Cart/>,
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchContextProvider>
      <CartContextProvider>
        <RouterProvider router={router}/>
      </CartContextProvider>
    </SearchContextProvider>
  </StrictMode>,
)
