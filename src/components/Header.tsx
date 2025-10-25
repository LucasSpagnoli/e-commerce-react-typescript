import React, { useContext } from 'react';
import { ProductContext } from '../context/productContext';

export function Header(): JSX.Element {
    const {
        searchBar,
        setSearchBar,
        handleSearch,
        handleFilter
    } = useContext(ProductContext);

    // Função wrapper para os filtros para evitar o reload da página
    const onFilterClick = (e: React.MouseEvent<HTMLAnchorElement>, filter?: string) => {
        e.preventDefault(); // Impede o 'href' de pular para o topo
        handleFilter(filter);
    };

    return (
        <nav className="border-gray-200 bg-gradient-to-bl bg-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Store</span>
                </a>
                <div className="flex md:order-2">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                        aria-expanded="false"
                        className="md:hidden text-white hover:bg-white hover:text-black focus:outline-none rounded-lg text-sm p-2.5 me-1">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        {/* --- O INPUT DE DESKTOP (JÁ ESTAVA CORRETO) --- */}
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border rounded-lg bg-white"
                            placeholder="Search..."
                            value={searchBar}
                            onChange={(e) => setSearchBar(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
                        />
                    </div>
                    <button data-collapse-toggle="navbar-search" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white focus:outline-none hover:text-black"
                        aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div className="relative mt-5 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        {/* --- O INPUT MOBILE (CORRIGIDO) --- */}
                        <input
                            type="text"
                            id="search-navbar-mobile"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border rounded-lg bg-white"
                            placeholder="Search..."
                            value={searchBar}
                            onChange={(e) => setSearchBar(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
                        />
                    </div>
                    <ul
                        className="flex flex-col p-4 md:p-0 mt-4 font-medium border bg-black space-y-4 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black">
                        <li>
                            <a href="#" id="home"
                                className="link-navbar clickable block py-2 px-3 text-white hover:bg-white hover:text-black md:hover:bg-white md:hover:rounded-sm md:text-white md:p-0 md:hover:text-black transition-all ease-linear"
                                aria-current="page"
                                // --- FUNCIONALIDADE ADICIONADA ---
                                onClick={(e) => onFilterClick(e)}
                            >Home</a>
                        </li>
                        <li>
                            <a href="#"
                                className="link-navbar block py-2 px-3 text-white hover:bg-white hover:text-black md:hover:bg-white md:hover:rounded-sm md:text-white md:p-0 md:hover:text-black transition-all ease-linear"
                                id="categories-button" aria-expanded="false" data-dropdown-toggle="category-dropdown"
                                data-dropdown-placement="bottom">Categories</a>

                            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm"
                                id="category-dropdown">
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <a href="#" data-id="men's-clothing"
                                            className="cat clickable transicao block px-4 py-2 text-sm text-black hover:bg-black hover:text-white bg-white"
                                            // --- FUNCIONALIDADE ADICIONADA ---
                                            onClick={(e) => onFilterClick(e, "men's clothing")}
                                        >
                                            Men's Clothing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-id="women's-clothing"
                                            className="cat clickable transicao block px-4 py-2 text-sm text-black hover:bg-black hover:text-white bg-white"
                                            // --- FUNCIONALIDADE ADICIONADA ---
                                            onClick={(e) => onFilterClick(e, "women's clothing")}
                                        >
                                            Women's Clothing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-id="jewelery"
                                            className="cat clickable transicao block px-4 py-2 text-sm text-black hover:bg-black hover:text-white bg-white"
                                            // --- FUNCIONALIDADE ADICIONADA ---
                                            onClick={(e) => onFilterClick(e, "jewelery")}
                                        >
                                            Jewelery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-id="electronics"
                                            className="cat clickable transicao block px-4 py-2 text-sm text-black hover:bg-black hover:text-white bg-white"
                                            // --- FUNCIONALIDADE ADICIONADA ---
                                            onClick={(e) => onFilterClick(e, "electronics")}
                                        >
                                            Electronics
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#"
                                className="link-navbar block py-2 px-3 text-white hover:bg-white hover:text-black md:hover:bg-white md:hover:rounded-sm md:text-white md:p-0 md:hover:text-black transition-all ease-linear">Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}