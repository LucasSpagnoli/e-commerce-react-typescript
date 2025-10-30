import { useEffect, createContext, useState, type ReactNode } from 'react'
import { getData } from '../scripts/api'
import type { Product } from '../scripts/api'

interface ProductProviderProps {
    children: ReactNode;
}

interface ProductContext {
    products: Product[];
    screenProducts: Product[];
    shownProducts: Product[]; 
    searchBar: string;
    currentIndex: number; 
    cardsPerPage: number;
    setSearchBar: (value: string) => void;
    setCurrentIndex: (value: React.SetStateAction<number>) => void;
    setScreenProducts: (value: React.SetStateAction<Product[]>) => void;
    handleFilter: (filter?: string) => void;
    handleSearch: () => void; 
    loaded: boolean;
}

export const ProductContext = createContext({} as ProductContext);

function ProductProvider({ children }: ProductProviderProps) {
    const [products, setProducts] = useState<Product[]>([])
    const [screenProducts, setScreenProducts] = useState<Product[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [searchBar, setSearchBar] = useState('')
    const [loaded, setLoaded] = useState(false)
    const url = 'https://fakestoreapi.com/products'
    const cardsPerPage = 4
    const shownProducts = screenProducts.slice(
        currentIndex,
        currentIndex + cardsPerPage
    )

    useEffect(() => {
        const loadData = async () => {
            const response = await getData(url)
            if (!('error' in response)) {
                setProducts(response)
                setScreenProducts(response)
                setLoaded(true)
            }
        }
        loadData()
    }, [])

    function handleFilter(filter: string = '') {
        let filteredProducts: Product[];
        filteredProducts = filter
            ? products.filter(product => product.category === filter)
            : products;
        setScreenProducts(filteredProducts)
        setCurrentIndex(0)
    }

    function handleSearch() {
        let searchedProducts = products.filter(product =>
            (product.title).toLowerCase().includes(searchBar.toLowerCase())
        );
        setScreenProducts(searchedProducts)
        setCurrentIndex(0)
    }

    return (
        <ProductContext.Provider
            value={{ 
                products, 
                screenProducts, 
                shownProducts, 
                currentIndex,
                searchBar, 
                setSearchBar, 
                setCurrentIndex, 
                setScreenProducts,
                handleFilter, 
                handleSearch,
                cardsPerPage,
                loaded
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider