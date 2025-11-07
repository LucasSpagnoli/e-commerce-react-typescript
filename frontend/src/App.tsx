import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.tsx'
import ProductProvider from './context/productContext.tsx'
import './styles/style.css';
import CartProvider from './context/cartContext.tsx';
import AuthProvider from './context/authContext.tsx';

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <ProductProvider>
                    <RouterProvider router={router} />
                </ProductProvider>
            </CartProvider>
        </AuthProvider>
    )
}

export default App
