import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ImageUploader from './ImageUploader'

const InvitationForm = ({ formData, onFormChange, onImageUpload, onGenerate }) => {
  const [activeTab, setActiveTab] = useState('groom')

  const handleInputChange = (field, value) => {
    onFormChange(field, value)
  }

  const groomFields = [
    { id: 'groomName', label: 'Groom Name *', type: 'text', placeholder: 'Enter groom name' },
    { id: 'groomAddress', label: 'Groom Address *', type: 'textarea', placeholder: 'House No./Street, Area, City, State - PIN Code' },
    { id: 'groomFatherName', label: "Groom's Father Name *", type: 'text', placeholder: 'Enter father name' },
    { id: 'groomMotherName', label: "Groom's Mother Name *", type: 'text', placeholder: 'Enter mother name' },
  ]

  const brideFields = [
    { id: 'brideName', label: 'Bride Name *', type: 'text', placeholder: 'Enter bride name' },
    { id: 'brideAddress', label: 'Bride Address *', type: 'textarea', placeholder: 'House No./Street, Area, City, State - PIN Code' },
    { id: 'brideFatherName', label: "Bride's Father Name *", type: 'text', placeholder: 'Enter father name' },
    { id: 'brideMotherName', label: "Bride's Mother Name *", type: 'text', placeholder: 'Enter mother name' },
  ]

  const eventFields = [
    { id: 'eventDate', label: 'Event Date *', type: 'date' },
    { id: 'eventTime', label: 'Event Time *', type: 'time' },
    { id: 'venue', label: 'Venue *', type: 'textarea', placeholder: 'Enter venue address' },
    { id: 'message', label: 'Personal Message (Optional)', type: 'textarea', placeholder: 'Enter a special message for your guests...' },
  ]

  const renderField = (field) => {
    if (field.type === 'textarea') {
      return (
        <div key={field.id} className="mb-6">
          <label className="block text-sm font-medium text-white mb-2">
            {field.label}
          </label>
          <textarea
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            rows={field.id.includes('Address') ? 3 : 4}
            className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
            required={field.label.includes('*')}
          />
          {field.id.includes('Address') && (
            <p className="text-white/60 text-xs mt-1">
              Include house number, street, city, state, and PIN code
            </p>
          )}
        </div>
      )
    }

    return (
      <div key={field.id} className="mb-6">
        <label className="block text-sm font-medium text-white mb-2">
          {field.label}
        </label>
        <input
          type={field.type}
          value={formData[field.id] || ''}
          onChange={(e) => handleInputChange(field.id, e.target.value)}
          placeholder={field.placeholder}
          className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          required={field.label.includes('*')}
        />
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-1 flex gap-2">
          {['groom', 'bride', 'event'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-3 rounded-md font-medium transition-all capitalize
                ${activeTab === tab
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'text-white hover:bg-white/20'
                }
              `}
            >
              {tab} Details
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20"
      >
        {/* Groom Section */}
        {activeTab === 'groom' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6 text-center font-elegant">
              Groom Details
            </h2>
            
            <ImageUploader
              label="Groom Photo (Optional)"
              type="groomPhoto"
              currentImage={formData.groomPhoto}
              onUpload={onImageUpload}
            />

            <div className="mt-6">
              {groomFields.map(field => renderField(field))}
            </div>
          </div>
        )}

        {/* Bride Section */}
        {activeTab === 'bride' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6 text-center font-elegant">
              Bride Details
            </h2>
            
            <ImageUploader
              label="Bride Photo (Optional)"
              type="bridePhoto"
              currentImage={formData.bridePhoto}
              onUpload={onImageUpload}
            />

            <div className="mt-6">
              {brideFields.map(field => renderField(field))}
            </div>
          </div>
        )}

        {/* Event Section */}
        {activeTab === 'event' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6 text-center font-elegant">
              Event Details
            </h2>
            
            <div>
              {eventFields.map(field => renderField(field))}
            </div>
          </div>
        )}

        {/* Generate Button */}
        {activeTab === 'event' && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onGenerate}
            className="w-full mt-8 py-4 bg-gradient-to-r from-gold to-rose-gold text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glow-effect"
          >
            Generate Invitation Card 🎉
          </motion.button>
        )}
      </motion.div>

      {/* Progress Indicator */}
      <div className="mt-8 flex justify-center items-center gap-2">
        {['groom', 'bride', 'event'].map((tab, index) => (
          <div key={tab} className="flex items-center">
            <div
              className={`
                w-3 h-3 rounded-full transition-all
                ${activeTab === tab || ['groom', 'bride', 'event'].indexOf(activeTab) > index
                  ? 'bg-gold scale-125'
                  : 'bg-white/30'
                }
              `}
            />
            {index < 2 && (
              <div
                className={`
                  w-12 h-0.5 transition-all
                  ${['groom', 'bride', 'event'].indexOf(activeTab) > index
                    ? 'bg-gold'
                    : 'bg-white/30'
                  }
                `}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InvitationForm

