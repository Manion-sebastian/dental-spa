import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import serviceDetails from './data/serviceDetails'

import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Service from './components/pages/Service'
import Header from './components/partials/Header'

export default function App() {

  let services = [
    "Deep Cleaning",
    "Filling",
    "Gum Massage",
    "Root Canal",
    "Oral Mud Bath"
  ]

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services services={serviceDetails} />} />
        <Route path="/services/:id" element={<Service services={serviceDetails} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}