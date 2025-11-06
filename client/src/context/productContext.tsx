import { useEffect, createContext, useState, type ReactNode } from 'react'
import { getData } from '../scripts/api'
import type { Product } from '../scripts/api'
import { useWindowWidth } from '../hooks/useWidth'

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
    setCardsPerPage: (value: number) => void;
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
    const [cardsPerPage, setCardsPerPage] = useState(4)
    const screenWidth = useWindowWidth()
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

    useEffect(() => {
        if (screenWidth > 1250) { 
            setCardsPerPage(4);
        } else if (screenWidth > 950) { 
            setCardsPerPage(3);
        } else if (screenWidth > 700) { 
            setCardsPerPage(2); 
        } else {
            setCardsPerPage(1)
        }
    }, [screenWidth]);

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
                setCardsPerPage,
                loaded
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider