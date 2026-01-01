import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-4 py-6">
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-4xl md:text-5xl font-bold text-center text-white font-elegant"
        >
          💕 Marriage Invitation Card Generator 💕
        </motion.h1>
        <p className="text-center text-white/90 mt-2 text-lg">
          Create beautiful animated wedding invitation cards
        </p>
      </div>
    </motion.header>
  )
}

export default Header

