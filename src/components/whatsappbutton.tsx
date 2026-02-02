'use client'

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const Whatsapp = () => {
  // DUMMY DATA FIX: 
  // Use Country Code + Number (No '+', no '-', no spaces)
  // Example: 91 is India, 1 is USA. 
  const phoneNumber = "918879000000"; 
  const message = encodeURIComponent("Hello! I'm interested in your services.");

  const handleClick = () => {
    // This is the official, most reliable way to open WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className='fixed bottom-8 right-6 z-[999] cursor-pointer group'
    >
      {/* Aesthetic Pulse Effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping group-hover:hidden"></span>
      
      {/* Main Button */}
      <div className='relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl border-2 border-white/20 transition-all duration-300 hover:shadow-green-500/50'>
        <FaWhatsapp className='w-8 h-8 md:w-10 md:h-10' />
      </div>

      {/* Hover Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100">
        Chat with us!
      </div>
    </motion.div>
  )
}

export default Whatsapp