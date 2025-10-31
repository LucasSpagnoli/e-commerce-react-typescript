import { ProductContext } from '../context/productContext'
import { useContext, useState, useEffect, type JSX } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext';
import type { Product } from '../scripts/api'

export function Product(): JSX.Element {
    const {
        products
    } = useContext(ProductContext);

    const {
        changeCart
    } = useContext(CartContext)

    const { id } = useParams<{ id: string }>()
    const product = products[Number(id) - 1]

    if (!product) {
        return (
            <main className="flex flex-col items-center justify-center h-screen">
                <p className="text-gray-600 text-lg">Produto não encontrado.</p>
            </main>
        )
    }

    const [related, setRelated] = useState<Product[]>([])

    useEffect(() => {
        const sameCategory = products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 3)
        setRelated(sameCategory)
    }, [id, products])

    

    return (
        <main className="w-4/5 mx-auto mt-15 mb-15 flex flex-col gap-16">
            {/* Produto principal */}
            <section className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1 flex justify-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="rounded-lg shadow-md w-72 md:w-96 object-contain bg-gray-100 p-6"
                    />
                </div>

                <div className="flex-1 flex flex-col gap-4 mt-10">
                    <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-500 font-semibold">{product.rating.rate}</span>
                        <svg
                            className="w-4 h-4 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span className="text-gray-500 text-sm">({product.rating.count} avaliações)</span>
                    </div>

                    <p className="text-gray-700 leading-relaxed lg:mb-20">{product.description}</p>

                    <span className="text-3xl font-bold text-gray-900 lg:mt-20">
                        ${product.price.toFixed(2)}
                    </span>

                    <div className="flex gap-3 mt-2">
                        <button
                            className="btn text-white rounded-lg px-5 py-2 text-sm font-medium"
                            onClick={() => changeCart(product, 1)}
                        >
                            Adicionar ao carrinho
                        </button>
                        <Link
                            to="/"
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg px-5 py-2 text-sm font-medium transition-all"
                        >
                            Voltar
                        </Link>
                    </div>
                </div>
            </section>

            {/* Produtos relacionados */}
            {related.length > 0 && (
                <section>
                    <h3 className="text-xl font-semibold text-gray-800 mb-6 mt-10">
                        Produtos relacionados
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                        {related.map(item => (
                            <div
                                key={item.id}
                                className="card rounded-lg shadow-md bg-gray-100 card-hover w-64"
                            >
                                <Link to={`/product/${item.id}`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded-t-lg w-full h-56 object-contain p-4"
                                    />
                                </Link>
                                <div className="p-4">
                                    <Link to={`/product/${item.id}`}>
                                        <h5 className="mb-1 text-md font-semibold text-gray-800 truncate">
                                            {item.title}
                                        </h5>
                                    </Link>
                                    <span className="text-lg font-bold text-gray-900">
                                        ${item.price.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </main>
    )
}