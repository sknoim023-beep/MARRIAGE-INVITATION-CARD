import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import InvitationForm from './components/InvitationForm'
import CardPreview from './components/CardPreview'

function App() {
  const [formData, setFormData] = useState({
    // Groom Details
    groomName: '',
    groomPhoto: null,
    groomAddress: '',
    groomFatherName: '',
    groomMotherName: '',
    
    // Bride Details
    brideName: '',
    bridePhoto: null,
    brideAddress: '',
    brideFatherName: '',
    brideMotherName: '',
    
    // Event Details
    eventDate: '',
    eventTime: '',
    venue: '',
    message: ''
  })

  const [cardGenerated, setCardGenerated] = useState(false)

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleImageUpload = (type, file) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setFormData(prev => ({
        ...prev,
        [type]: reader.result
      }))
    }
    reader.readAsDataURL(file)
  }

  const handleGenerateCard = () => {
    // Validate required fields
    const requiredFields = [
      'groomName', 'brideName', 'groomAddress', 'brideAddress',
      'groomFatherName', 'groomMotherName', 'brideFatherName', 'brideMotherName',
      'eventDate', 'eventTime', 'venue'
    ]
    
    const missingFields = requiredFields.filter(field => !formData[field])
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields. Missing: ${missingFields.join(', ')}`)
      return
    }
    
    setCardGenerated(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleReset = () => {
    setCardGenerated(false)
    setFormData({
      groomName: '',
      groomPhoto: null,
      groomAddress: '',
      groomFatherName: '',
      groomMotherName: '',
      brideName: '',
      bridePhoto: null,
      brideAddress: '',
      brideFatherName: '',
      brideMotherName: '',
      eventDate: '',
      eventTime: '',
      venue: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {!cardGenerated ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InvitationForm
              formData={formData}
              onFormChange={handleFormChange}
              onImageUpload={handleImageUpload}
              onGenerate={handleGenerateCard}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CardPreview
              formData={formData}
              onReset={handleReset}
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default App

