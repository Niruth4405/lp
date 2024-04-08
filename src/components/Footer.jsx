import React from "react";

export default function Footer() {
  return (
    <footer class="bg-transparent rounded-lg shadow text-white m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="flex flex-col sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <h1 className='text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>VirtualR</h1>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            VirtualR™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
