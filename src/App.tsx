import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.tsx'
import ProductProvider from './context/productContext.tsx'
import './styles/style.css';
import CartProvider from './context/cartContext.tsx';

function App() {
    return (
        <ProductProvider>
            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
        </ProductProvider>
    )
}

export default App
