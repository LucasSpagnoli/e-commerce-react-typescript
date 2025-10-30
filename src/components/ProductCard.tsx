import React, { useContext, type JSX } from 'react';
import type { Product } from '../scripts/api';
import { CartContext } from '../context/cartContext'

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps): JSX.Element {
    const { changeCart, cart } = useContext(CartContext)
    return (
        <div className="card md:w-65 w-70 rounded-lg shadow-lg bg-gray-100 card-hover mt-6 md:mt-0 position-relative">
            <a href="#">
                <img
                    className="rounded-t-lg w-75 px-6 py-2 mt-2 md:h-60 h-75"
                    src={product.image}
                    alt={product.description}
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-800 truncate">
                        {product.title}
                    </h5>
                </a>
                <p className="mb-3 text-sm text-gray-500 line-clamp-2">
                    {product.description}
                </p>
                <div className="flex items-center mt-3 mb-3">
                    <span className="text-black text-sm font-semibold me-1">
                        {product.rating.rate}
                    </span>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg
                            className="w-3 h-3 text-yellow-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 mb-1">
                        ${product.price.toFixed(2)}
                    </span>
                    <a
                        href="#"
                        className="btn text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-1.5 text-center focus:ring-gray-500"
                        onClick={(e) => {
                            e.preventDefault()
                            changeCart(product, 1)
                            console.log(cart)
                        }}
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}