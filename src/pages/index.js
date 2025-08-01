'use client'
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';
import { MdOutlineMessage } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaBookMedical } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { SlBookOpen } from "react-icons/sl";
import { BiSolidShoppingBag } from "react-icons/bi";
import SearchBar from '@/components/SearchBar';
const HomePage = () => {
    return (
        <>
            <div className="relative">
                <div className="relative w-full lg:h-auto h-80 overflow-hidden">
                    <img
                        src="https://www.practostatic.com/web-assets/home/assets/images/homepage.06859593240c3efd483fe48951cfe6ff.svg"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover max-h-screen"
                        style={{ backgroundAttachment: 'fixed' }}
                    />

                    <div className="relative z-10 flex justify-center items-center lg:min-h-[80vh] px-4 sm:px-8 text-white overflow-x-auto">
                        <div className="text-center mt-10 lg:-mt-50 w-full max-w-4xl">
                            <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold mb-4">Your Home For Health</h1>
                            <p className="text-sm sm:text-lg lg:text-2xl mt-2">Find and Book</p>
                            <SearchBar />
                            <div className="flex flex-wrap sm:justify-center gap-2 text-gray-400  lg:text-sm text-[8px] sm:text-base overflow-x-auto justify-start whitespace-nowrap px-2">
                                <p>Popular searches:</p>
                                <p className="hover:text-white cursor-pointer hover:underline">Dermatologist</p>
                                <p className="hover:text-white cursor-pointer hover:underline">Pediatrician</p>
                                <p className="hover:text-white cursor-pointer hover:underline">Gynecologist/Obstetrician</p>
                                <p className="hover:text-white cursor-pointer hover:underline">
                                    Others <TiArrowSortedDown className="inline" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex relative  w-full items-center h-15 justify-center bg-[#1d2869]'>
                    <div className="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-6 gap-4 px-4 items-center justify-center">
                        <div className="flex items-center gap-2 justify-center">
                            <MdOutlineMessage className="text-xl text-white lg:flex hidden" />
                            <span className="lg:text-sm text-[8px] text-white">Consult with doctor</span>
                        </div>

                        <div className="flex items-center gap-2 justify-center border-l border-gray-400 pl-4">
                            <IoCartOutline className="text-xl text-white lg:flex hidden" />
                            <span className="lg:text-sm text-[8px] text-white">Medicines</span>
                        </div>

                        <div className="flex items-center gap-2 justify-center border-l border-gray-400 pl-4">
                            <FaBookMedical className="text-xl text-white lg:flex hidden" />
                            <span className="lg:text-sm text-[8px] text-white">View Records</span>
                        </div>

                        <div className="flex items-center gap-2 justify-center border-l border-gray-400 pl-4">
                            <SlChemistry className="text-xl text-white lg:flex hidden" />
                            <span className="lg:text-sm text-[8px] text-white">Book Test</span>
                        </div>

                        <div className="flex items-center gap-2 justify-center border-l border-gray-400 pl-4">
                            <SlBookOpen className="text-xl text-white lg:flex hidden" />
                            <span className="lg:text-sm text-[8px] text-white">Read Articles</span>
                        </div>

                        <div className="flex items-center gap-2 justify-center border-l border-gray-400 pl-4">
                            <BiSolidShoppingBag className="text-xl text-white lg:flex hidden" />
                            <span className="lg:text-sm text-[8px] text-white">For Providers</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HomePage;



