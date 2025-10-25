import React, { useContext } from 'react';
import { Navbar, Dropdown } from 'flowbite-react';
import { ProductContext } from '../context/productContext';

export function Header(): JSX.Element {
  const { 
    searchBar, 
    setSearchBar, 
    handleSearch, 
    handleFilter 
  } = useContext(ProductContext);

  return (
    <Navbar fluid rounded className="border-gray-200 bg-gradient-to-bl bg-black">
      
      <Navbar.Brand href="https://flowbite.com/">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Store</span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
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
        
        <Navbar.Toggle className="text-white hover:bg-white hover:text-black" />
      </div>

      <Navbar.Collapse>
        
        <Navbar.Link 
          href="#" 
          onClick={() => handleFilter()} 
          className="link-navbar text-white hover:bg-white hover:text-black md:hover:bg-white md:hover:rounded-sm md:text-white md:p-0 md:hover:text-black"
        >
          Home
        </Navbar.Link>

        <Dropdown
          label="Categories"
          inline
          arrowIcon={false}
          className="link-navbar clickable block py-2 px-3 text-white hover:bg-white hover:text-black md:hover:bg-white md:hover:rounded-sm md:text-white md:p-0 md:hover:text-black transition-all ease-linear"
        >
          <Dropdown.Item 
            onClick={() => handleFilter("men's-clothing")}
            className="cat clickable transicao text-black hover:bg-black hover:text-white bg-white"
          >
            Men's Clothing
          </Dropdown.Item>
          <Dropdown.Item 
            onClick={() => handleFilter("women's-clothing")}
            className="cat clickable transicao text-black hover:bg-black hover:text-white bg-white"
          >
            Women's Clothing
          </Dropdown.Item>
          <Dropdown.Item 
            onClick={() => handleFilter("jewelery")}
            className="cat clickable transicao text-black hover:bg-black hover:text-white bg-white"
          >
            Jewelery
          </Dropdown.Item>
          <Dropdown.Item 
            onClick={() => handleFilter("electronics")}
            className="cat clickable transicao text-black hover:bg-black hover:text-white bg-white"
          >
            Electronics
          </Dropdown.Item>
        </Dropdown>

        <Navbar.Link 
          href="#" 
          className="link-navbar text-white hover:bg-white hover:text-black md:hover:bg-white md:hover:rounded-sm md:text-white md:p-0 md:hover:text-black"
        >
          Cart
        </Navbar.Link>

        <div className="relative mt-5 md:hidden">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
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
      </Navbar.Collapse>
    </Navbar>
  )
}