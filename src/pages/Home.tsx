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

                            <button className={currentIndex === 0 ? 'carousel-btn left bg-gray-200 hidden' : 'carousel-btn left bg-gray-200'} onClick={handlePrev}>
                                {'<'}
                            </button>
                            <button className={currentIndex + cardsPerPage >= screenProducts.length ? 'carousel-btn right bg-gray-200 hidden' : 'carousel-btn right bg-gray-200'} onClick={handleNext}>
                                {'>'}
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