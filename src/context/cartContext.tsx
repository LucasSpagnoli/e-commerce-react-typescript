import { createContext, type ReactNode, useEffect, useState } from 'react'
import type { Product } from '../scripts/api';

export interface ProductInCart extends Product {
    quant: number;
}

interface CartContextType {
    cart: ProductInCart[];
    prodQuant: number;
    totalCost: number;
    changeCart: (product: Product, action: number) => void;
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
    const [cart, setCart] = useState<ProductInCart[]>(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    
    function changeCart(productToChange: Product, action: number) {
        setCart(currentCart => {
            const existingProduct = currentCart.find(p => p.id === productToChange.id);

            if (existingProduct) {
                const newQuant = existingProduct.quant + action;

                if (newQuant <= 0) {
                    return currentCart.filter(p => p.id !== productToChange.id);
                }

                return currentCart.map(p =>
                    p.id === productToChange.id
                        ? { ...p, quant: newQuant }
                        : p
                );
            }

            if (action > 0) {
                return [...currentCart, { ...productToChange, quant: action }];
            }

            return currentCart;
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
                changeCart,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;