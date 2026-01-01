import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { formatDate, formatTime, downloadCardAsImage, downloadCardAsPDF } from '../utils/cardGenerator'

const CardPreview = ({ formData, onReset }) => {
  const cardRef = useRef(null)

  const handleDownloadImage = () => {
    downloadCardAsImage(cardRef.current, 'marriage-invitation-card')
  }

  const handleDownloadPDF = () => {
    downloadCardAsPDF(cardRef.current, 'marriage-invitation-card')
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-4 justify-center mb-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadImage}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          📥 Download as PNG
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadPDF}
          className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          📄 Download as PDF
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReset}
          className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all"
        >
          ✏️ Edit Details
        </motion.button>
      </motion.div>

      {/* Card Preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="flex justify-center"
      >
        <div
          ref={cardRef}
          className="card-container rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full border-4 border-gold/30"
          style={{ minHeight: '600px' }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-script text-gold mb-4"
            >
              Wedding Invitation
            </motion.h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="flex justify-center items-center gap-2 text-2xl text-rose-gold"
            >
              ✨ 💕 ✨
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Groom & Bride Photos and Names */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Groom Side */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                {formData.groomPhoto ? (
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    src={formData.groomPhoto}
                    alt="Groom"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto mb-4 border-4 border-gold shadow-lg"
                  />
                ) : (
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 mx-auto mb-4 border-4 border-gold shadow-lg flex items-center justify-center text-4xl">
                    👨
                  </div>
                )}
                <h2 className="text-2xl md:text-3xl font-elegant font-bold text-gray-800 mb-2">
                  {formData.groomName}
                </h2>
                <p className="text-sm text-gray-600">
                  Son of
                </p>
                <p className="text-gray-700 font-medium">
                  {formData.groomFatherName}
                </p>
                <p className="text-gray-700 font-medium">
                  & {formData.groomMotherName}
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  {formData.groomAddress}
                </p>
              </motion.div>

              {/* Heart Divider */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.7, type: "spring" }}
                className="hidden md:flex justify-center text-6xl text-rose-gold"
              >
                💕
              </motion.div>

              {/* Bride Side */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                {formData.bridePhoto ? (
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    src={formData.bridePhoto}
                    alt="Bride"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto mb-4 border-4 border-gold shadow-lg"
                  />
                ) : (
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-pink-200 to-pink-400 mx-auto mb-4 border-4 border-gold shadow-lg flex items-center justify-center text-4xl">
                    👩
                  </div>
                )}
                <h2 className="text-2xl md:text-3xl font-elegant font-bold text-gray-800 mb-2">
                  {formData.brideName}
                </h2>
                <p className="text-sm text-gray-600">
                  Daughter of
                </p>
                <p className="text-gray-700 font-medium">
                  {formData.brideFatherName}
                </p>
                <p className="text-gray-700 font-medium">
                  & {formData.brideMotherName}
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  {formData.brideAddress}
                </p>
              </motion.div>
            </div>

            {/* Mobile Heart */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 }}
              className="flex md:hidden justify-center text-6xl text-rose-gold"
            >
              💕
            </motion.div>

            {/* Event Details */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center border-t-2 border-b-2 border-gold/30 py-6 space-y-3"
            >
              <div>
                <p className="text-sm text-gray-600 mb-1">We cordially invite you to our wedding</p>
                <p className="text-xl md:text-2xl font-elegant font-semibold text-gray-800">
                  {formatDate(formData.eventDate)}
                </p>
                <p className="text-lg text-gray-700 mt-1">
                  at {formatTime(formData.eventTime)}
                </p>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-gray-600">Venue:</p>
                <p className="text-gray-800 font-medium mt-1">
                  {formData.venue}
                </p>
              </div>
            </motion.div>

            {/* Personal Message */}
            {formData.message && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-center py-4"
              >
                <p className="text-gray-700 italic font-light leading-relaxed">
                  "{formData.message}"
                </p>
              </motion.div>
            )}

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center text-sm text-gray-500"
            >
              <p>We look forward to celebrating with you!</p>
              <div className="flex justify-center gap-2 mt-2 text-lg">
                💐 🎉 💐
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CardPreview

