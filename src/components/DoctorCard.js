'use client'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoCallSharp } from 'react-icons/io5'

const DoctorCard = ({ name, experience, specialization, location, fees, rating, }) => {
    return (
        <div>
            <div className="p-5 border border-gray-200 lg:flex justify-between grid grid-cols-1 md:grid-cols-2  items-center  rounded-xl shadow-sm hover:shadow-md transition">
                <div>
                    <h2 className="text-lg font-bold text-blue-600">{name}</h2>
                    <p className="text-gray-600"> <span className="font-medium">{specialization}</span> </p>
                    <p className="text-gray-600"> <span className="font-medium">{experience}</span> years experience overall</p>
                    <p className="text-gray-600"> <span className="font-medium">₹{fees}</span> Consultation fee at clinic</p>
                    <p className="text-gray-600"> <span className="font-medium">{location}</span> </p>
                    <p className="text-yellow-500"> <span className="font-semibold">{rating}⭐</span> </p>
                </div>
                <div className='flex flex-col gap-3 '>
                    <h1 className='flex font-semibold justify-center text-green-600 items-center gap-1'><FaCalendarAlt size={15} />Available Today</h1>
                    <button className='h-10 bg-[#199FD9] text-white px-7 rounded-md  cursor-pointer font-bold'>Book Clinic Visit <p className='text-[9px] font-semibold'>No Booking Fee</p></button>
                    <button className='h-10 border border-[#199FD9] text-[#199FD9] px-5 flex justify-center gap-2 items-center hover:bg-[#199FD9] hover:text-white rounded-md cursor-pointer'><IoCallSharp size={20} />Contact Clinic</button>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard