import { useContext, type JSX } from 'react'
import { CartContext } from '../context/cartContext'
import { ProductInCart } from '../components/ProductInCart'

export function Cart(): JSX.Element {
    const { cart, totalCost, clearCart } = useContext(CartContext)
    
    return (
        <main>
            <section className='sombra rounded h-130 bg-gray-300 my-10 mx-80 flex'>
                <div className='bg-red-600 w-1/2'>
                {cart.length === 0 ? (
                    <p>No products</p>
                ) : (
                    <ul className='flex prodsCart'>
                        {cart.map(product => (
                            <ProductInCart key={product.id} cartProduct={product} />
                        ))}
                    </ul>
                )}
                </div>
                <div>

                </div>
            </section>
        </main>
    )
}