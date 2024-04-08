import React from 'react'

function Hero() {
  return (
    <>
    <div className='max-w-7xl mx-auto pt-20 px-6 text-white'>
        <div className='flex flex-col justify-center items-center mx-auto'>
        <h1 className=' font-bold text-4xl sm:text-6xl lg:text-7xl tracking-wide text-center md:p-8'>VirtualR build tools <span className='bg-gradient-to-r from-orange-600 to-orange-800 text-transparent bg-clip-text'>for developers</span></h1>
        <p className='text-gray-500 text-center text-xl mt-5 lg:px-[180px] lg:text-xl lg:mt'>Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</p>
        <div className='flex gap-7 mt-10'>
            <button className='font-bold px-4 py-3 bg-gradient-to-tr from-orange-500 to-orange-800 rounded-md'>Start for free</button>
            <button className='rounded-md font-bold px-4 py-3 border border-white'>Documentation</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Hero