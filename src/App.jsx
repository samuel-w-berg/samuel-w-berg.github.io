import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import AboutMe from './AboutMe/AboutMe'
import ContactMe from './ContactMe/ContactMe'

export default function App() {
  const [state, setState] = useState()

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}


