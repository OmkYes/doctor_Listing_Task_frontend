'use client';

import { useSearchParams } from 'next/navigation';
import { useGetDoctersBySearchQuery } from '@/redux/api/docter';
import DoctorCard from '@/components/DoctorCard';
import { FaRegCheckCircle } from 'react-icons/fa';

const DoctorListingPage = () => {
    const searchParams = useSearchParams();
    const location = searchParams.get('location');
    const specialization = searchParams.get('specialization');
    const { data } = useGetDoctersBySearchQuery({ location, specialization });

    console.log(data?.result);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold lg:mb-1 mb-5">Doctors available : <p className='inline'>{data?.result?.length}</p></h1>
            <p className='mb-5 lg:flex hidden items-center gap-1 text-gray-600 font-light'>   <FaRegCheckCircle />Verified doctor details Book appointments with minimum wait-time & verified doctor details</p>

            {data?.result?.length > 0 ? (
                <ul className="space-y-4">
                    {data?.result?.map((doc, index) => (
                        <div key={index}>
                            <DoctorCard
                                name={doc.name}
                                experience={doc.experience}
                                specialization={doc.specialization}
                                location={doc.location}
                                fees={doc.fees}
                                rating={doc.rating}
                            />
                        </div>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-700">No doctors found</p>
            )
            }
        </div >
    );
}
export default DoctorListingPage