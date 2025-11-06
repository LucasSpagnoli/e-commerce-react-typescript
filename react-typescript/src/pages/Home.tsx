import { ProductCard } from '../components/ProductCard'
import { useContext, type JSX } from 'react'
import { ProductContext } from '../context/productContext'

export function Home(): JSX.Element {
    const {
        shownProducts,
        screenProducts,
        currentIndex,
        setCurrentIndex,
        cardsPerPage,
        loaded
    } = useContext(ProductContext);


    function handleNext() {
        if (currentIndex + cardsPerPage < screenProducts.length) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    function handlePrev() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <main>
            {
                !loaded ? (
                    <div className='h-100 mb-50'>
                        <p className='meio'>Carregando...</p>
                    </div>
                )
                    :
                    (
                        <>
                            <div className="md:ms-16 ms-8 mt-6 md:mt-12">
                                <h2 className="text-2xl">Produtos em destaque</h2>
                                <p className="mt-2">Descubra nossa coleção de itens mais recente.</p>
                            </div>

                            <button
                                onClick={handlePrev}
                                className={`absolute top-2/3 clickable left-10 translate-y-10 p-3 rounded-full shadow-md border border-gray-300 bg-white text-gray-800 hover:bg-black hover:text-white transition-all duration-200 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
                                    }`}>
                                ‹
                            </button>

                            <button
                                onClick={handleNext}
                                className={`absolute top-2/3 clickable right-10 translate-y-10 p-3 rounded-full shadow-md border border-gray-300 bg-white text-gray-800 hover:bg-black hover:text-white transition-all duration-200 ${currentIndex + cardsPerPage >= screenProducts.length
                                        ? 'opacity-0 pointer-events-none'
                                        : 'opacity-100'
                                    }`}>
                                ›
                            </button>


                            <section className="products-container grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                {shownProducts.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </section>
                        </>
                    )}
        </main>
    );
}