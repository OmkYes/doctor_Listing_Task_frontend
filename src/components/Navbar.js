'use client'
import React, { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNavigate = () => {
        router.push("/")
    }
    return (
        <>
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center gap-6">
                            <h1 className="text-3xl font-bold text-[#263077] flex items-center gap-1">
                                <span className="rounded-full bg-blue-400 h-3 w-3"></span>
                                <button onClick={handleNavigate} className='mb-2 cursor-pointer'>practo</button>
                                <span className="rounded-full bg-blue-400 h-3 w-3"></span>
                            </h1>

                            <div className="hidden md:flex gap-4 font-semibold">
                                <button  className="text-[#263077]">Find Doctors</button>
                                <button>Video Consult</button>
                                <button>Surgeries</button>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-4 font-light">
                            <button>
                                For Corporates <TiArrowSortedDown className="inline" />
                            </button>
                            <button>
                                For Providers <TiArrowSortedDown className="inline" />
                            </button>
                            <button>
                                Security & Help <TiArrowSortedDown className="inline" />
                            </button>
                            <button className="text-gray-500 border-2 border-gray-400 px-2 py-1 text-sm rounded-sm">
                                Login / Signup
                            </button>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden px-4 pb-4">
                        <div className="flex flex-col gap-3 text-sm font-medium">
                            <button className="text-[#263077]">Find Doctors</button>
                            <button>Video Consult</button>
                            <button>Surgeries</button>
                            <button>
                                For Corporates <TiArrowSortedDown className="inline" />
                            </button>
                            <button>
                                For Providers <TiArrowSortedDown className="inline" />
                            </button>
                            <button>
                                Security & Help <TiArrowSortedDown className="inline" />
                            </button>
                            <button className="text-gray-500 border-2 border-gray-400 px-2 py-1 text-sm rounded-sm">
                                Login / Signup
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            <div className="h-8 bg-gray-200 w-full block"></div>
        </>
    );
};

export default Navbar;
