import { createContext, type ReactNode, useState } from 'react'
import type { Product } from '../scripts/api';

export interface ProductInCart extends Product {
    quant: number;
}

interface CartContextType {
    cart: ProductInCart[];
    prodQuant: number;
    totalCost: number;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

interface CartProviderProps {
    children: ReactNode;
}

interface CartContext {

}

export const CartContext = createContext({} as CartContextType);

function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<ProductInCart[]>([]);

    function addToCart(productToAdd: Product) {
        setCart(currentCart => {
            const existingProduct = currentCart.find(p => p.id === productToAdd.id);

            if (existingProduct) {
                return currentCart.map(p =>
                    p.id === productToAdd.id
                        ? { ...p, quant: p.quant + 1 }
                        : p
                );
            } else {
                return [...currentCart, { ...productToAdd, quant: 1 }];
            }
        });
    }


    function removeFromCart(productId: number) {
        setCart(currentCart => {
            return currentCart.filter(p => p.id !== productId);
        });
    }

    function clearCart() {
        setCart([]);
    }

    const prodQuant = cart.reduce((total, product) => total + product.quant, 0);
    const totalCost = cart.reduce((total, product) => total + (product.price * product.quant), 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                prodQuant,
                totalCost,
                addToCart,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;