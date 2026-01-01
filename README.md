# 💕 Marriage Invitation Card Generator

A beautiful, animated web application for creating personalized marriage invitation cards with groom and bride details, photos, addresses, parent names, and event information.

## ✨ Features

- **Complete Form Fields**:
  - Groom Details: Name, Photo, Address, Father Name, Mother Name
  - Bride Details: Name, Photo, Address, Father Name, Mother Name
  - Event Details: Date, Time, Venue, Personal Message

- **Beautiful UI/UX**:
  - Animated transitions using Framer Motion
  - Tab-based navigation (Groom → Bride → Event)
  - Drag-and-drop image upload
  - Responsive design (mobile, tablet, desktop)
  - Gradient backgrounds with animations

- **Card Generation**:
  - Elegant card preview with animations
  - Download as PNG (high resolution)
  - Download as PDF (print-ready)
  - Real-time preview

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Header component
│   ├── InvitationForm.jsx  # Main form with tabs
│   ├── ImageUploader.jsx   # Drag-and-drop image upload
│   └── CardPreview.jsx     # Card preview and download
├── utils/
│   └── cardGenerator.js    # PDF/PNG download utilities
├── App.jsx                 # Main application component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## 🎨 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **html2canvas** - Image generation
- **jsPDF** - PDF generation
- **react-dropzone** - File uploads
- **date-fns** - Date formatting

## 📝 Usage

1. Fill in **Groom Details** (name, photo, address, parent names)
2. Fill in **Bride Details** (name, photo, address, parent names)
3. Fill in **Event Details** (date, time, venue, optional message)
4. Click **"Generate Invitation Card"**
5. Preview your card and download as PNG or PDF

## 🎯 Key Features Explained

### Tab Navigation
- Organized into three tabs: Groom, Bride, and Event
- Progress indicator shows current step
- Smooth transitions between sections

### Image Upload
- Drag-and-drop support
- Click to upload
- Image preview
- Supports JPG, PNG, WEBP (max 5MB)

### Card Preview
- Elegant design with gold accents
- Animated card reveal
- Responsive layout
- Professional typography

### Download Options
- **PNG**: High-resolution image (2x scale)
- **PDF**: Print-ready A4 format
- Automatic filename: `marriage-invitation-card`

## 🔧 Customization

You can customize:
- Colors in `tailwind.config.js`
- Card design in `CardPreview.jsx`
- Form fields in `InvitationForm.jsx`
- Animation timings in component files

## 📄 License

This project is open source and available for personal use.

---

Made with 💕 for couples creating their perfect wedding invitations!

