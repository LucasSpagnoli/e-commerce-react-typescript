import React, { useContext, type JSX } from 'react'
import { CartContext, type ProductInCart } from '../context/cartContext'

interface ProductInCartProps {
  cartProduct: ProductInCart
}

export function ProductInCart({ cartProduct }: ProductInCartProps): JSX.Element {
  const { removeFromCart, changeCart } = useContext(CartContext)

  return (
    <li className="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-md transition-all hover:shadow-lg">
      <div className="flex items-center gap-5">
        <a href={`/product/${cartProduct.id}`}>
          <img
            src={cartProduct.image}
            alt={cartProduct.title}
            className="w-20 h-20 object-contain rounded-md"
          />
        </a>
        <div>
          <a href={`/product/${cartProduct.id}`}>
            <h5 className="text-md font-semibold text-gray-800 truncate max-w-56">
              {cartProduct.title}
            </h5>
          </a>
          <p className="text-sm text-gray-600 mt-1">
            ${cartProduct.price.toFixed(2)}
          </p>
          <p className="text-base font-semibold text-green-600 mt-1">
            Total: ${(cartProduct.price * cartProduct.quant).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full text-lg font-bold hover:bg-gray-300 transition-all"
          onClick={() => changeCart(cartProduct, -1)}
        >
          -
        </button>
        <span className="text-md font-semibold w-6 text-center">{cartProduct.quant}</span>
        <button
          className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full text-lg font-bold hover:bg-gray-800 transition-all"
          onClick={() => changeCart(cartProduct, 1)}
        >
          +
        </button>
        <button
          className="ml-3 w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-all"
          onClick={() => removeFromCart(cartProduct.id)}
        >
          🗑️
        </button>
      </div>
    </li>
  )
}
