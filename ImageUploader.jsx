import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { motion } from 'framer-motion'

const ImageUploader = ({ onUpload, currentImage, label, type }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles[0]) {
      const file = acceptedFiles[0]
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }
      onUpload(type, file)
    }
  }, [onUpload, type])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    multiple: false
  })

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-white mb-2">
        {label}
      </label>
      <motion.div
        {...getRootProps()}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
          transition-all duration-200
          ${isDragActive 
            ? 'border-gold bg-white/20 scale-105' 
            : 'border-white/50 bg-white/5 hover:border-white/80 hover:bg-white/10'
          }
        `}
      >
        <input {...getInputProps()} />
        
        {currentImage ? (
          <div className="space-y-3">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={currentImage}
              alt="Uploaded"
              className="mx-auto max-h-48 rounded-lg object-cover shadow-lg"
            />
            <p className="text-white/80 text-sm">
              Click or drag to replace image
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <motion.div
              animate={isDragActive ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg
                className="mx-auto h-12 w-12 text-white/70"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
            <div>
              <p className="text-white font-medium">
                {isDragActive ? 'Drop image here' : 'Click or drag image here'}
              </p>
              <p className="text-white/70 text-xs mt-1">
                PNG, JPG, WEBP (Max 5MB)
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default ImageUploader

