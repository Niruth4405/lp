import React from 'react'
import { CircleCheck } from 'lucide-react';

function Pricing() {
    return (

        <>
            <h1 className='text-center text-white text-5xl font-arial mb-4 mt-10'>Pricing</h1>
            
                <div className='p-2 grid grid-cols-1 mx-auto md:flex justify-center items-center gap-3'>
                    {data.map((d) => (
                        <div className='mx-auto border border-gray-700 w-[250px] md:w-[300px] text-white flex flex-col gap-4 rounded-lg p-6 shadow-lg shadow-orange-800 hover:scale-105 duration-200'>
                            <h2 className='font-bold text-2xl'>{d.Price}</h2>
                            <h1 className='flex gap-2 text-2xl'>{d.Price1}<h2 className='text-gray-600 text-md'>/Month</h2></h1>
                            <h3 className='flex gap-2'><CircleCheck />{d.f1}</h3>
                            <h3 className='flex gap-2'><CircleCheck />{d.f2}</h3>
                            <h3 className='flex gap-2'><CircleCheck />{d.f3}</h3>
                            <h3 className='flex gap-2'><CircleCheck />{d.f4}</h3>
                            <button className='border border-gray-700 rounded-lg py-1 shadow-sm shadow-orange-700'>Subscribe</button>
                        </div>
                    ))}
                </div>
            
        </>
    )
}

const data = [
    {
        Price: 'Free',
        Price1: '$0',
        f1: 'Private board sharing',
        f2: '5Gb storage',
        f3: 'Web Analytics',
        f4: 'Private Mode',

    },
    {
        Price: 'Pro(most popular)',
        Price1: '$10',
        f1: 'Private board sharing',
        f2: '10Gb storage',
        f3: 'Web Analytics(Advance)',
        f4: 'Private Mode',
    },
    {
        Price: 'Enterprise',
        Price1: '$200',
        f1: 'Private board sharing',
        f2: 'unlimited storage',
        f3: 'High Performance Network',
        f4: 'Private Mode',
    }
]
export default Pricing