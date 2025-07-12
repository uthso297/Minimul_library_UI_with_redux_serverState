import { Link, NavLink, useLocation } from 'react-router';
import logo from '../assets/open-book.png';
import { useState } from "react";

const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <nav className="bg-white shadow-sm px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img className="h-7 w-7" src={logo} alt="BookImage" />
                    <Link to='/'><p className="font-bold text-lg">LibraryMate</p></Link>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex items-center gap-6 text-sm font-medium">
                        <li>
                            <NavLink
                                to="/books"
                                className={({ isActive }) =>
                                    isActive || location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                                }
                            >
                                Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/create-book"
                                className={({ isActive }) =>
                                    isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
                                }
                            >
                                Create Book
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/borrow-summary"
                                className={({ isActive }) =>
                                    isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
                                }
                            >
                                Borrow Summary
                            </NavLink>
                        </li>
                    </ul>

                    <div className='relative'>
                        <input
                            className="border-2 border-[#EBEBEA] rounded-lg pl-9 py-1 w-64"
                            aria-label="Search books"
                            type="search"
                            value={searchValue}
                            onChange={handleChange}
                            placeholder="Search for books..."
                        />
                        <svg
                            className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <img className="h-9 w-9 rounded-full" src="https://i.ibb.co/JQN8V32/userpic.jpg" alt="profile" />
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mt-4 md:hidden flex flex-col gap-4">

                    <ul className="flex flex-col gap-2 text-sm font-medium">
                        <li>
                            <NavLink
                                to="/books"
                                className={({ isActive }) =>
                                    isActive || location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                                }
                            >
                                Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/create-book"
                                className={({ isActive }) =>
                                    isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
                                }
                            >
                                Create Book
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/borrow-summary"
                                className={({ isActive }) =>
                                    isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
                                }
                            >
                                Borrow Summary
                            </NavLink>
                        </li>
                    </ul>


                    <div className='relative mt-2'>
                        <input
                            className="border-2 border-[#EBEBEA] rounded-lg pl-9 py-1 w-full"
                            aria-label="Search books"
                            type="search"
                            value={searchValue}
                            onChange={handleChange}
                            placeholder="Search for books..."
                        />
                        <svg
                            className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <img className="h-9 w-9 rounded-full mt-2" src="https://i.ibb.co/JQN8V32/userpic.jpg" alt="profile" />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
