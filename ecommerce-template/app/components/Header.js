"use client";
import React, { useState } from 'react';
import Link from 'next/link';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header>
        <nav className='navindex bg-black/30 text-white py-4 shadow-lg backdrop-blur-md'>
            <div className='container mx-auto px-4 flex justify-between items-center'>
                
                {/* Desktop Navigation */}
                <div className='hidden md:block'>
                    <ul className='hoveffect flex justify-center items-center list-none space-x-6 lg:space-x-8 text-base lg:text-lg'>
                      <li className="font-fam">VibeKiks</li>
                      <li className="listelement">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="listelement">
                        <Link href="/">Men&apos;s</Link>
                      </li>
                      <li className="listelement">
                        <Link href="/">Women&apos;s</Link>
                      </li>
                      <li className="listelement">
                        <Link href="/">Kid&apos;s</Link>
                      </li>
                      <li className="listelement">
                        <Link href="/">New Arrivals</Link>
                      </li>
                      <li className="listelement">
                        <Link href="/">Sale</Link>
                      </li>
                      <li className="listelement">
                        <Link href="/">Brands</Link>
                      </li>
                      <li className="listelement">
                        <Link href="/">Cart</Link>
                      </li>
                      <li className="search-container">
                        <form action="/search" method="GET">
                          <input 
                            type="text" 
                            placeholder="Search shoes... 🔍" 
                            name="q"
                            className="search-input inpborder rounded-md w-66 h-10 text-center"
                          />
                          <button type="submit" className="search-btn rounded-md w-26 h-10 ml-1 bg-button">
                            Search
                          </button>
                        </form>
                      </li>
                    </ul>
                 </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='text-white focus:outline-none'
                    >
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Toggle based on state */}
            {isMenuOpen && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-4 space-y-1 bg-black border-t border-gray-700'>
                        <h2 className="font-fam text-center">VibeKiks</h2>
                        <Link href="/" className='block px-3 py-2 text-base  hover:text-gray-300 transition duration-200' onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/" className='block px-3 py-2 text-base  hover:text-gray-300 transition duration-200' onClick={() => setIsMenuOpen(false)}>Men&apos;s</Link>
                        <Link href="/" className='block px-3 py-2 text-base  hover:text-gray-300 transition duration-200' onClick={() => setIsMenuOpen(false)}>Women&apos;s</Link>
                        <Link href="/" className='block px-3 py-2 text-base  hover:text-gray-300 transition duration-200' onClick={() => setIsMenuOpen(false)}>Kid&apos;s</Link>
                        <Link href="/" className='block px-3 py-2 text-base  hover:text-gray-300 transition duration-200' onClick={() => setIsMenuOpen(false)}>New Arrivals</Link>
                        <Link href="/" className='block px-3 py-2 text-base  hover:text-gray-300 transition duration-200' onClick={() => setIsMenuOpen(false)}>Sale</Link>
                        <Link href="/" className='block px-3 py-2 text-base  hover:text-gray-300 transition duration-200' onClick={() => setIsMenuOpen(false)}>Brands</Link>
                        <Link href="/" className='block px-3 py-2 text-base  hover:text-gray-300 transition duration-200' onClick={() => setIsMenuOpen(false)}>Cart</Link>
                    </div>
                </div>
            )}
        </nav>
      </header>
    </>
  )
}

export default Header