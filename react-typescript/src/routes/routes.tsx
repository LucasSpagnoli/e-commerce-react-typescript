import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components/Layout.tsx'
import { Home } from '../pages/Home.tsx'
import { Cart } from '../pages/Cart.tsx'
import { Product } from '../pages/Product.tsx'

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            // {
            //     path: '/login',
            //     element: <Login />
            // },
            {
                path: '/product/:id',
                element: <Product />
            }
        ]
    }
])