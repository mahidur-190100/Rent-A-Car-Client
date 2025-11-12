import React from 'react'
import { motion } from 'framer-motion'

const CarLoader = () => {
  return (
    <div className="relative w-56 h-28 overflow-hidden">
      {/* Road */}
      <div className="absolute bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400/60 to-transparent" />
      
      {/* Car moving */}
      <motion.svg
        viewBox="0 0 200 100"
        className="absolute bottom-3 -left-24 w-40 h-20"
        animate={{ x: ['-10%', '120%'] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
      >
        {/* Body */}
        <rect x="20" y="40" width="140" height="28" rx="8" fill="#2563eb" />
        <rect x="60" y="30" width="70" height="18" rx="4" fill="#1d4ed8" />

        {/* Wheels */}
        <motion.circle
          cx="60" cy="75" r="12" fill="#111827"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
          style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
        />
        <motion.circle
          cx="140" cy="75" r="12" fill="#111827"
          animate={{ rotate: -360 }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
          style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
        />
        <circle cx="60" cy="75" r="4" fill="#6b7280" />
        <circle cx="140" cy="75" r="4" fill="#6b7280" />
      </motion.svg>
    </div>
    
  )

}

export default CarLoader