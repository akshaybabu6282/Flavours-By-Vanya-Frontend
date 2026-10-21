import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../public/assets/logo.png";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const productsDropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                productsDropdownRef.current &&
                !productsDropdownRef.current.contains(event.target)
            ) {
                setOpenDropdown(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setOpenDropdown(false);
                setOpenMenu(false);
            }
        };

        document.addEventListener('pointerdown', handleOutsideClick);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('pointerdown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const closeNavigation = () => {
        setOpenDropdown(false);
        setOpenMenu(false);
    };

    return (
        <header className="fixed w-full z-40 bg-black/60 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="flex items-center justify-center">
                        <img
                            src={logo}
                            alt="Vanya Eco Products"
                            className="h-14 md:h-16 w-auto object-contain rounded-2xl"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-5 items-center text-sm relative">

                    {/* Products Dropdown */}
                    <div
                        className="relative"
                        ref={productsDropdownRef}
                    >
                        <button
                            type="button"
                            onClick={() =>
                                setOpenDropdown((current) => !current)
                            }
                            aria-expanded={openDropdown}
                            aria-haspopup="menu"
                            className="flex items-center gap-1 hover:underline"
                            style={{
                                fontFamily: '"Raleway", sans-serif',
                                fontWeight: 'bold',
                            }}
                        >
                            Products

                            <span
                                aria-hidden="true"
                                className={`text-[10px] transition-transform duration-200 ${
                                    openDropdown ? 'rotate-180' : ''
                                }`}
                            >
                                ▼
                            </span>
                        </button>

                        {openDropdown && (
                            <div
                                role="menu"
                                className="absolute top-full left-0 mt-3 w-52 overflow-hidden rounded-lg border border-white/10 bg-black/95 py-2 shadow-2xl backdrop-blur-md"
                            >
                                <a
                                    role="menuitem"
                                    href="#masalas"
                                    onClick={closeNavigation}
                                    className="block px-4 py-2.5 hover:bg-white/10"
                                    style={{
                                        fontFamily: '"Roboto", sans-serif',
                                    }}
                                >
                                    Masalas
                                </a>

                                <a
                                    role="menuitem"
                                    href="#raw-spices"
                                    onClick={closeNavigation}
                                    className="block px-4 py-2.5 hover:bg-white/10"
                                    style={{
                                        fontFamily: '"Roboto", sans-serif',
                                    }}
                                >
                                    Spices
                                </a>

                                <a
                                    role="menuitem"
                                    href="#beverages"
                                    onClick={closeNavigation}
                                    className="block px-4 py-2.5 hover:bg-white/10"
                                    style={{
                                        fontFamily: '"Roboto", sans-serif',
                                    }}
                                >
                                    Tea & Coffee
                                </a>

                                <a
                                    role="menuitem"
                                    href="#nutsHoney"
                                    onClick={closeNavigation}
                                    className="block px-4 py-2.5 hover:bg-white/10"
                                    style={{
                                        fontFamily: '"Roboto", sans-serif',
                                    }}
                                >
                                    Nuts & Honey
                                </a>

                                <a
                                    role="menuitem"
                                    href="#coconut-oil"
                                    onClick={closeNavigation}
                                    className="block px-4 py-2.5 hover:bg-white/10"
                                    style={{
                                        fontFamily: '"Roboto", sans-serif',
                                    }}
                                >
                                    Coconut Oil
                                </a>
                            </div>
                        )}
                    </div>

                    <a
                        href="#about"
                        className="hover:underline"
                        style={{
                            fontFamily: '"Raleway", sans-serif',
                            fontWeight: 'bold',
                        }}
                    >
                        About Us
                    </a>

                    <a
                        href="#community-stall"
                        className=" px-3 py-1.5 transition hover:underline"
                        style={{
                            fontFamily: '"Raleway", sans-serif',
                            fontWeight: 'bold',
                        }}
                    >
                        Book a Stall
                    </a>

                    <a
                        href="#bulk"
                        className="hover:underline"
                        style={{
                            fontFamily: '"Raleway", sans-serif',
                            fontWeight: 'bold',
                        }}
                    >
                        Bulk / Export
                    </a>

                    <a
                        href="#licenses"
                        className="hover:underline"
                        style={{
                            fontFamily: '"Raleway", sans-serif',
                            fontWeight: 'bold',
                        }}
                    >
                        Our Certifications
                    </a>

                    <Link
                        to="/blogs"
                        className="hover:underline"
                        style={{
                            fontFamily: '"Raleway", sans-serif',
                            fontWeight: 'bold',
                        }}
                    >
                        Blogs
                    </Link>

                    <a
                        href="#contact"
                        className="px-3 py-1 border border-white/10 rounded"
                        style={{
                            fontFamily: '"Raleway", sans-serif',
                            fontWeight: 'bold',
                        }}
                    >
                        Contact
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        type="button"
                        onClick={() => {
                            setOpenMenu((current) => !current);
                            setOpenDropdown(false);
                        }}
                        aria-label="Toggle menu"
                        aria-expanded={openMenu}
                        className="p-2"
                    >
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    openMenu
                                        ? 'M6 18L18 6M6 6l12 12'
                                        : 'M4 6h16M4 12h16M4 18h16'
                                }
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile and Tablet Menu */}
            {openMenu && (
                <div className="lg:hidden bg-black/95 border-t border-white/5">
                    <div className="flex flex-col gap-2 px-6 py-6 text-lg">

                        {/* Products Dropdown Mobile */}
                        <div className="py-2">
                            <button
                                type="button"
                                onClick={() =>
                                    setOpenDropdown((current) => !current)
                                }
                                aria-expanded={openDropdown}
                                className="flex items-center gap-2 w-full justify-between"
                                style={{
                                    fontFamily: '"Raleway", sans-serif',
                                    fontWeight: 'bold',
                                }}
                            >
                                Products

                                <span>
                                    {openDropdown ? '▲' : '▼'}
                                </span>
                            </button>

                            {openDropdown && (
                                <div className="flex flex-col pl-4 mt-2 gap-1">
                                    <a
                                        href="#masalas"
                                        onClick={closeNavigation}
                                        className="py-1"
                                        style={{
                                            fontFamily: '"Roboto", sans-serif',
                                        }}
                                    >
                                        Masalas
                                    </a>

                                    <a
                                        href="#raw-spices"
                                        onClick={closeNavigation}
                                        className="py-1"
                                        style={{
                                            fontFamily: '"Roboto", sans-serif',
                                        }}
                                    >
                                        Spices
                                    </a>

                                    <a
                                        href="#beverages"
                                        onClick={closeNavigation}
                                        className="py-1"
                                        style={{
                                            fontFamily: '"Roboto", sans-serif',
                                        }}
                                    >
                                        Tea & Coffee
                                    </a>

                                    <a
                                        href="#nutsHoney"
                                        onClick={closeNavigation}
                                        className="py-1"
                                        style={{
                                            fontFamily: '"Roboto", sans-serif',
                                        }}
                                    >
                                        Nuts & Honey
                                    </a>

                                    <a
                                        href="#coconut-oil"
                                        onClick={closeNavigation}
                                        className="py-1"
                                        style={{
                                            fontFamily: '"Roboto", sans-serif',
                                        }}
                                    >
                                        Coconut Oil
                                    </a>
                                </div>
                            )}
                        </div>

                        <hr />

                        <a
                            href="#about"
                            onClick={closeNavigation}
                            className="hover:underline py-2"
                            style={{
                                fontFamily: '"Raleway", sans-serif',
                                fontWeight: 'bold',
                            }}
                        >
                            About Us
                        </a>

                        <hr />

                        <a
                            href="#community-stall"
                            onClick={closeNavigation}
                            className="my-1 hover:underline py-2"
                            style={{
                                fontFamily: '"Raleway", sans-serif',
                                fontWeight: 'bold',
                            }}
                        >
                            Book a Stall
                        </a>

                        <hr />

                        <a
                            href="#bulk"
                            onClick={closeNavigation}
                            className="hover:underline py-2"
                            style={{
                                fontFamily: '"Raleway", sans-serif',
                                fontWeight: 'bold',
                            }}
                        >
                            Bulk / Export
                        </a>

                        <hr />

                        <Link
                            to="/blogs"
                            onClick={closeNavigation}
                            className="hover:underline py-2"
                            style={{
                                fontFamily: '"Raleway", sans-serif',
                                fontWeight: 'bold',
                            }}
                        >
                            Blogs
                        </Link>

                        <hr />

                        <a
                            href="#contact"
                            onClick={closeNavigation}
                            className="hover:underline py-2"
                            style={{
                                fontFamily: '"Raleway", sans-serif',
                                fontWeight: 'bold',
                            }}
                        >
                            Contact
                        </a>

                        <hr />

                        <a
                            href="#licenses"
                            onClick={closeNavigation}
                            className="hover:underline py-2"
                            style={{
                                fontFamily: '"Raleway", sans-serif',
                                fontWeight: 'bold',
                            }}
                        >
                            Our Certifications
                        </a>
                    </div>
                </div>
            )}

            <hr />
        </header>
    );
}