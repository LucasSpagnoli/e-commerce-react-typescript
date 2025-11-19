import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components/Layout.tsx'
import { Home } from '../pages/Home.tsx'
import { Cart } from '../pages/Cart.tsx'
import { Product } from '../pages/Product.tsx'
import { Login } from '../pages/Login.tsx'
import { Register } from '../pages/Register.tsx'

import { PrivateRoute } from './privateRoutes.tsx'

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
                element: (
                    <PrivateRoute >
                        <Cart />
                    </PrivateRoute>
                )
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/product/:id',
                element: <Product />
            }
        ]
    }
])