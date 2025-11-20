import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Certifications from './components/Certifications'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Path to the local image in public folder
  const heroImage = "/Group 1.png"
  const aboutImage = "/img200 1.png"

  return (
    <div className="font-sans">
      <Header profileImage={aboutImage} />
      <div id="home">
        <Hero heroImage={heroImage} />
      </div>
      <Certifications />
      <div id="about">
        <About aboutImage={aboutImage} />
      </div>
      <div id="services">
        <Services />
      </div>
      <Testimonials />
      <Achievements />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
