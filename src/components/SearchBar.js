'use client'
import { Autocomplete, InputAdornment, TextField } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const SearchBar = () => {
    const location = [
        { label: 'Delhi' },
        { label: 'Mumbai' },
        { label: 'Bengaluru' },
        { label: 'Hyderabad' },
        { label: 'Chennai' },
        { label: 'Kolkata' },
        { label: 'Pune' },
        { label: 'Ahmedabad' },
        { label: 'Jaipur' },
        { label: 'Chandigarh' },
        { label: 'Lucknow' },
        { label: 'Bhopal' },
        { label: 'Indore' },
        { label: 'Patna' },
        { label: 'Nagpur' },
        { label: 'Kochi' },
        { label: 'Surat' },
        { label: 'Noida' },
        { label: 'Gurugram' },
        { label: 'Thiruvananthapuram' }
    ];
    const specialization = [
        { label: 'Cardiologist' },
        { label: 'Dermatologist' },
        { label: 'Neurologist' },
        { label: 'Pediatrician' },
        { label: 'Orthopedic' },
        { label: 'Gynecologist' },
        { label: 'Psychiatrist' },
        { label: 'Dentist' },
        { label: 'Ophthalmologist' },
        { label: 'ENT Specialist' },
        { label: 'Gastroenterologist' },
        { label: 'Urologist' },
        { label: 'Nephrologist' },
        { label: 'Oncologist' },
        { label: 'Pulmonologist' },
        { label: 'Endocrinologist' },
        { label: 'Rheumatologist' },
        { label: 'General Physician' },
        { label: 'Allergist' },
        { label: 'Plastic Surgeon' }
    ];
    const [selectedLocation, setSelectedLocation] = useState(location[0])
    const router = useRouter()
    const handleSearch = (event, value) => {
        event.preventDefault()
        const location = selectedLocation?.label
        const specialization = value?.label
        if (event, value) {
            router.push(`/doctors?location=${encodeURIComponent(location)}&specialization=${encodeURIComponent(specialization)}`)
        }
    }
    return (
        <div>
            <form onSubmit={handleSearch}>
                <div className="flex flex-col sm:flex-row items-center justify-center w-full mt-6">
                    <div className="flex items-center  py-[11px] lg:w-80 text-gray-700 w-full">
                        <Autocomplete
                            disablePortal
                            className='bg-white lg:mb-0 -mb-5'
                            options={location}
                            value={selectedLocation}
                            getOptionLabel={(option) => option.label}
                            onChange={(e, value) => setSelectedLocation(value)}
                            sx={{
                                width: 600,
                                '& .MuiAutocomplete-endAdornment': {
                                    display: 'none',
                                },
                            }}
                            renderInput={(params) => <TextField {...params}
                                placeholder='Location'
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <IoLocationSharp size={20} />
                                        </InputAdornment>
                                    ),
                                }}
                            />}
                        />
                    </div>

                    <div className="flex items-center py-[12px] text-gray-700 w-full">
                        <Autocomplete
                            disablePortal
                            className="bg-white"
                            options={specialization}
                            getOptionLabel={(option) => option.label}
                            onChange={handleSearch}
                            sx={{
                                width: 600,
                                '& .MuiAutocomplete-endAdornment': {
                                    display: 'none',
                                },
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder="Search doctors, clinics, hospitals, etc."
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <FaSearch />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />


                    </div>
                </div>
            </form>

        </div>
    )
}

export default SearchBar