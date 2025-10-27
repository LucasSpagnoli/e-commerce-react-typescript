import React, { useContext, type JSX } from 'react';
import { CartContext, type ProductInCart } from '../context/cartContext';

interface ProductInCartProps {
    cartProduct: ProductInCart;
}

export function ProductInCart({ cartProduct }: ProductInCartProps): JSX.Element {
    const { removeFromCart, changeCart } = useContext(CartContext)
    return (
        <li className='bg-amber-300 flex justify-between'>
            <img src={cartProduct.image || ''} />
            <p>{cartProduct.title}</p>
            <p>{cartProduct.quant}</p>
            <p>${(cartProduct.price * cartProduct.quant)}</p>
            <button onClick={() => removeFromCart(cartProduct.id)}>🗑️</button>
            <button onClick={() => changeCart(cartProduct, 1)}>+</button>
            <button onClick={() => changeCart(cartProduct, -1)}>-</button>
        </li>
    );
}