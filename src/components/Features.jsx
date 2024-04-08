import React from 'react'
import { BotMessageSquare, Fingerprint, ShieldHalf, BatteryCharging, PlugZap,GlobeLock } from 'lucide-react';

function Features() {
    return (
        <>
            <div className='flex flex-col justify-center items-center mt-10 text-white'>
                <button className='text-center bg-gray-900 rounded-full text-orange-500 text-md tracking-wide px-2 py-1'>FEATURES</button>
                <h1 className='text-3xl sm:text-5xl lg:text-7xl font-bold mt-10 text-center px-[60px]'>Easily build <span className='bg-gradient-to-tr from-orange-600 to-orange-900 text-transparent bg-clip-text'>your code</span></h1>                
                <div className='mt-10 flex flex-col md:grid grid-cols-3 md:gap-20'>
                    {data.map((d)=>(
                    <div className='grid w-[300px]'>
                        <h1 className='mb-6 font-bold text-xl flex items-center gap-4'>{d.logo}{d.tag}</h1>
                        <p className='flex justify-start px-10 text-md text-gray-500 mb-5'>{d.desc}</p>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

const data = [
    {
        logo:<Fingerprint color='orange'/>,
        tag:'Multi-Platform Compatibility',
        desc:'Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.',
    },
    {
        logo:<ShieldHalf color='orange'/>,
        tag:'Built-in Templates',
        desc:'Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.',
    },
    {
        logo:<BatteryCharging color='orange'/>,
        tag:'Real-Time Preview',
        desc:'Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.',
    },
    {
        logo:<PlugZap color='orange'/>,
        tag:'Collaboration Tools',
        desc:'Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing',
    },
    {
        logo:<BotMessageSquare color='orange'/>,
        tag:'Drag-and-Drop Interface',
        desc:'Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.',
    },
    {
        logo:<GlobeLock color='orange'/>,
        tag:'Analytics Dashboard',
        desc:'Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.',
    }
]
export default Features;