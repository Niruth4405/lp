"use client";
import { useState } from "react";
import { X, Menu } from "lucide-react";

function Navbar() {
  const [nav, setnav] = useState(false);

  function handlenav() {
    setnav(!nav);
  }
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80 py-3 text-white">
      <div className="px-4 mx-auto relative text-sm">
        <div className="flex justify-around items-center">
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
              VirtaulR
            </h1>
          </div>
          <ul className="hidden lg:flex gap-7 cursor-pointer space-x-12 items-center">
            <li className="hover:text-orange-600">Features</li>
            <li className="hover:text-orange-600">Workflow</li>
            <li className="hover:text-orange-600">Pricing</li>
            <li className="hover:text-orange-600">Testimonial</li>
            <div className="flex gap-8">
              <button className="px-3 py-2 border border-white rounded-lg">
                Sign In
              </button>
              <button className="bg-gradient-to-tr from-orange-500 to-orange-700 rounded-lg py-2 px-5">
                Create Account
              </button>
            </div>
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end" onClick={handlenav}>
            {!nav ? <Menu /> : <X />}
          </div>
          {nav && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center mt-[330px] lg:hidden">
              <ul className="uppercase flex flex-col justify-center items-center gap:5">
                <li className='mb-3'>Features</li>
                <li className='mb-3'>Workflow</li>
                <li className='mb-3'>Pricing</li>
                <li className='mb-3'>Testimonials</li>
                <div className="flex flex-col gap-4">
                  <button className="px-3 py-2 border border-white rounded-lg">
                    Sign In
                  </button>
                  <button className="bg-gradient-to-tr from-orange-500 to-orange-700 rounded-lg py-2 px-5">
                    Create Account
                  </button>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
