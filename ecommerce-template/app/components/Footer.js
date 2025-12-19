import React from 'react'
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200">
        {/* Hero Section */}
        <div className="w-full bg-[url('/Sneaker1.jpg')] bg-cover bg-center bg-no-repeat h-80 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center mb-10 mt-15 p-5 bg-black/15 backdrop-blur-xs w-11/12 md:w-3/4 lg:w-1/2 rounded-lg mx-4">
                <h2 className="text-white text-xl sm:text-2xl lg:text-3xl mt-5 text-center">Get discount for membership</h2>
                <h2 className="text-white text-sm sm:text-md mt-5 text-center px-4">Join our membership program and enjoy exclusive benefits</h2>
                <button className="w-full sm:w-3/4 lg:w-1/2 bg-white/70 text-sm sm:text-md text-black p-2 mt-5 mb-5 rounded-lg cursor-pointer hover:bg-black hover:text-white hover:shadow-black hover:shadow-xl transition duration-500">Explore More</button>
            </div>
        </div>
        
        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 p-6 lg:p-8 max-w-7xl mx-auto">
          
          {/* Shop Column */}
          <div className="lg:col-span-1">
            <p className="text-xl lg:text-2xl font-semibold mb-4">Shop</p>
            <ul className="space-y-2">
                <li className="hover:text-gray-600 transition cursor-pointer">Mens</li>
                <li className="hover:text-gray-600 transition cursor-pointer">Womens</li>
                <li className="hover:text-gray-600 transition cursor-pointer">Kids</li>
            </ul>
          </div>
          
          {/* Connect Column */}
          <div className="lg:col-span-1">
            <p className="text-xl lg:text-2xl font-semibold mb-4">Connect</p>
            <ul className="space-y-2">
                <li className="hover:text-gray-600 transition cursor-pointer">Facebook</li>
                <li className="hover:text-gray-600 transition cursor-pointer">Twitter</li>
                <li className="hover:text-gray-600 transition cursor-pointer">Instagram</li>
                <li className="hover:text-gray-600 transition cursor-pointer">Linkdin</li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="lg:col-span-1">
            <p className="text-xl lg:text-2xl font-semibold mb-4">Contact</p>
            <div className="space-y-4">
              <Link href="mailto:someone@gmail.com" className="block hover:text-gray-600 transition">
                Someone@gmail.com
              </Link>
              <p className="font-fam font-bold text-lg">VibeKiks</p>
            </div>
          </div>
          
          {/* Newsletter Column - Takes 2 columns on large screens */}
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="text-xl lg:text-2xl font-semibold mb-4">Stay in touch</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full py-3 px-4 border-b-2 border-gray-400 bg-transparent focus:outline-none focus:border-black transition placeholder-gray-500"
              />
              <span className="absolute right-0 top-3 text-xl">→</span>
            </div>
            <p className="text-sm text-gray-600 mt-3">Subscribe to our newsletter for updates</p>
          </div>
        </div>
        
        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-300 mt-8 py-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} VibeKiks. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer