import { Link } from 'react-router-dom';
import logo from '../assets/jythu-logo.png'
import search from '../assets/search.png'
import cart from '../assets/cart.png'
import rightArr from '../assets/Outline.png'
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <header className="p-4 bg-teal-100 text-gray-800">
                <div className="container flex justify-between h-16 mx-auto relative">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <img src={logo} alt="logo" className='w-20 h-20 object-contain' />
                    </a>


                    {/* hidden lg: */}
                    <ul className="items-stretch  space-x-3 hidden lg:flex">
                        <li className="flex">
                            <Link to='/' className='flex items-center px-4 md:px-1 -mb-1 border-b-2 border-transparent'>Home</Link>
                        </li>
                        <li className="flex">
                            <Link to='/' className='flex items-center px-4 md:px-1 -mb-1 border-b-2 border-transparent'>ِAbout us</Link>
                        </li>
                        <li className="flex">
                            <Link to='/' className='flex items-center px-4 md:px-1 -mb-1 border-b-2 border-transparent'>Pages</Link>
                        </li>
                        <li className="flex">
                            <Link to='/' className='flex items-center px-4 md:px-1 -mb-1 border-b-2 border-transparent'>Services</Link>
                        </li>
                        <li className="flex">
                            <Link to='/' className='flex items-center px-4 md:px-1 -mb-1 border-b-2 border-transparent'>News and Event</Link>
                        </li>
                        <li className="flex">
                            <Link to='/' className='flex items-center px-4 -mb-1 border-b-2 border-transparent'>Contact us</Link>
                        </li>
                    </ul>
                    {/* hidden lg: */}
                    <div className="items-center flex-shrink-0 hidden lg:flex gap-2">
                        <img src={cart} alt="" />
                        <img src={search} alt="" />
                        {/* <button className="self-center px-8 py-3 rounded">Sign in</button> */}
                        <button className="self-center px-4 py-3 font-semibold rounded-full bg-gradient-to-r from-green-400 to-teal-500 text-gray-50 flex items-center gap-1 text-sm">Get Quote
                            <img src={rightArr} alt="" />
                        </button>
                    </div>


                    <button className="p-4 flex lg:hidden text-4xl absolute right-0 z-10"
                        onClick={() => setOpen(!open)}
                    >

                        {open ? <IoMdClose /> :
                            <RxHamburgerMenu />}
                    </button>

                    {open &&
                        (
                            <div className='absolute -left-28 h-screen bg-teal-100 w-screen transition ease-out duration-100 transform'>
                                {/* hidden lg: */}
                                <ul className="space-y-5 flex flex-col items-center absolute left-96 top-52 text-2xl">
                                    <li className="flex">
                                        <Link to='/' className='flex items-center px-4 md:px-1 -mb-1 border-b-2 border-transparent'>Home</Link>
                                    </li>
                                    <li className="flex">
                                        <Link to='/' className='flex items-center px-4 md:px-1 -mb-1 border-b-2 border-transparent'>ِAbout us</Link>
                                    </li>
                                    <li className="flex">
                                        <Link to='/' className='flex items-center px-4 md:px-1 -mb-1 border-b-2 border-transparent'>Pages</Link>
                                    </li>
                                    <li className="flex">
                                        <Link to='/' className='flex items-center px-4 md:px-1 -mb-1 border-b-2 border-transparent'>Services</Link>
                                    </li>
                                    <li className="flex">
                                        <Link to='/' className='flex items-center px-4 md:px-1 -mb-1 border-b-2 border-transparent'>News and Event</Link>
                                    </li>
                                    <li className="flex">
                                        <Link to='/' className='flex items-center px-4 -mb-1 border-b-2 border-transparent'>Contact us</Link>
                                    </li>
                                </ul>
                                {/* hidden lg: */}
                                <div className="flex items-center absolute flex-shrink-0 top-[550px] left-[380px] gap-3 border border-teal-500 p-2 rounded-full">
                                    <img src={cart} alt="" />
                                    <img src={search} alt="" />
                                    {/* <button className="self-center px-8 py-3 rounded">Sign in</button> */}
                                    <button className="self-center px-4 py-3 font-semibold rounded-full bg-gradient-to-r from-green-400 to-teal-500 text-gray-50 flex items-center gap-1 text-sm">Get Quote
                                        <img src={rightArr} alt="" />
                                    </button>
                                </div>
                            </div>
                        )}
                </div>
            </header>
        </div>
    );
};

export default Navbar;