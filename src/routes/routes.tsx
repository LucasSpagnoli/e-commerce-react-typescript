import { createBrowserRouter } from 'react-router-dom'

import {Layout} from '../components/Layout.tsx'
import {Home} from '../pages/Home.tsx'

export const router = createBrowserRouter ([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            // {
            //     path: '/cart',
            //     element: <Cart />
            // },
            // {
            //     path: '/login',
            //     element: <Login />
            // },
            // {
            //     path: '/product/:id',
            //     element: <Product />
            // },
            // {
            //     path: '*',
            //     element: <NotFound />
            // }
        ]
    }
])