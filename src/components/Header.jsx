import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../public/assets/logo.jpg"

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <header className="fixed w-full z-40 bg-black/60 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold">
                        <img src={logo} alt="Vanya Eco Products" className='w-10 h-10 rounded-full' />
                    </div>
                    <div className="hidden sm:block">
                        <div className="font-display text-lg" style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bold' }}>Vanya Eco Products</div>
                        <div className="text-xs text-gray-400" style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bold' }}>Pure Spices, True Flavours</div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 items-center text-sm relative">
                    {/* Products Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setOpenDropdown(true)}
                        onMouseLeave={() => setOpenDropdown(false)}
                    >
                        <button className="flex items-center gap-1 hover:underline" style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bold' }}>
                            Products <span>&#x25BC;</span>
                        </button>
                        {openDropdown && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 border border-white/10 rounded shadow-lg flex flex-col">
                                <a href="#masalas" className="px-4 py-2 hover:bg-white/10" style={{ fontFamily: '"Roboto", sans-serif' }}>Masalas</a>
                                <a href="#raw-spices" className="px-4 py-2 hover:bg-white/10" style={{ fontFamily: '"Roboto", sans-serif' }}>Spices</a>
                                <a href="#beverages" className="px-4 py-2 hover:bg-white/10" style={{ fontFamily: '"Roboto", sans-serif' }}>Tea & Coffee</a>
                                <a href="#nutsHoney" className="px-4 py-2 hover:bg-white/10" style={{ fontFamily: '"Roboto", sans-serif' }}>Nuts & Honey</a>
                                <a href="#coconut-oil" className="px-4 py-2 hover:bg-white/10" style={{ fontFamily: '"Roboto", sans-serif' }}>Coconut Oil</a>
                            </div>
                        )}
                    </div>
                    <a href="#about" className="hover:underline" style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bold' }}>About Us</a>
                    <a href="#bulk" className="hover:underline" style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bold' }}>Bulk / Export</a>
                    <a href="#licenses" className="hover:underline" style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bold' }}>Our Certifications</a>

                    <a href="#contact" className="px-3 py-1 border border-white/10 rounded" style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bold' }}>Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setOpenMenu(!openMenu)} aria-label="Toggle menu" className="p-2">
                        <svg width="24" height="24" fill="none" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={openMenu ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {openMenu && (
                <div className="md:hidden bg-black/95 border-t border-white/5">
                    <div className="flex flex-col gap-2 px-6 py-6 text-lg">
                        {/* Products Dropdown Mobile */}
                        <div className='py-2'>
                            <button
                                onClick={() => setOpenDropdown(!openDropdown)}
                                className="flex items-center gap-2 w-full justify-between"
                                style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bold' }}
                            >
                                Products <span>{openDropdown ? '▲' : '▼'}</span>
                            </button>
                            {openDropdown && (
                                <div className="flex flex-col pl-4 mt-2 gap-1">
                                    <a href="#masalas" onClick={() => setOpenMenu(false)} className="py-1" style={{ fontFamily: '"Roboto", sans-serif' }}>Masalas</a>
                                    <a href="#raw-spices" onClick={() => setOpenMenu(false)} className="py-1" style={{ fontFamily: '"Roboto", sans-serif' }}>Spices</a>
                                    <a href="#beverages" onClick={() => setOpenMenu(false)} className="py-1" style={{ fontFamily: '"Roboto", sans-serif' }}>Tea & Coffee</a>
                                    <a href="#nutsHoney" onClick={() => setOpenMenu(false)} className="py-1" style={{ fontFamily: '"Roboto", sans-serif' }}>Nuts & Honey</a>
                                    <a href="#coconut-oil" onClick={() => setOpenMenu(false)} className="py-1" style={{ fontFamily: '"Roboto", sans-serif' }}>Coconut Oil</a>
                                </div>
                            )}
                        </div>
                        <hr />
                        <a href="#about" className="hover:underline py-2" style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bold' }}>About Us</a>
                        <hr />
                        <a href="#bulk" className="hover:underline py-2" onClick={() => setOpenMenu(false)} style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bold' }}>Bulk / Export</a>
                        <hr />
                        <a href="#contact" className="hover:underline py-2" style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bold' }}>Contact</a>
                        <hr />
                        <a href="#licenses" className="hover:underline py-2" style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bold' }}>Our Certifications</a>
                    </div>
                </div>
            )}
            <hr />
        </header>
    )
}
