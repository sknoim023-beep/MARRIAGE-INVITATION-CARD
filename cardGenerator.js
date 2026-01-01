import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const downloadCardAsImage = async (cardElement, filename = 'marriage-invitation') => {
  try {
    const canvas = await html2canvas(cardElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#f5f7fa',
      logging: false,
    })
    
    const imgData = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.download = `${filename}.png`
    link.href = imgData
    link.click()
  } catch (error) {
    console.error('Error downloading image:', error)
    alert('Error generating image. Please try again.')
  }
}

export const downloadCardAsPDF = async (cardElement, filename = 'marriage-invitation') => {
  try {
    const canvas = await html2canvas(cardElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#f5f7fa',
      logging: false,
    })
    
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [210, 297] // A4 size
    })
    
    const imgWidth = 210
    const pageHeight = 297
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    let heightLeft = imgHeight
    
    let position = 0
    let pageNumber = 0
    
    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight
    pageNumber++
    
    // Add additional pages if image is taller than one page
    while (heightLeft >= 0) {
      position = -pageHeight * pageNumber
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
      pageNumber++
    }
    
    pdf.save(`${filename}.pdf`)
  } catch (error) {
    console.error('Error generating PDF:', error)
    alert('Error generating PDF. Please try again.')
  }
}

export const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

export const formatTime = (timeString) => {
  if (!timeString) return ''
  const [hours, minutes] = timeString.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  return `${displayHour}:${minutes} ${ampm}`
}

