import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.tsx'
import ProductProvider from './context/productContext.tsx'

function App() {
    return (
        <ProductProvider>
            <RouterProvider router={router} />
        </ProductProvider>
    )
}

export default App
