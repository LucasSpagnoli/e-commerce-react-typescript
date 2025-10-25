import React from 'react';

export function Footer(): JSX.Element {
    return (
        <footer className="shadow-sm bg-black">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Store</span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                        <li>
                            <a href="#" className="linha me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="linha me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="linha me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="linha">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-white sm:mx-auto lg:my-8" />
                <span className="block text-sm text-white sm:text-center ">© 2025 <a href="" className="linha">Lucas Spagnoli</a>.
                    All Rights Reserved.</span>
            </div>
        </footer>
    )
}