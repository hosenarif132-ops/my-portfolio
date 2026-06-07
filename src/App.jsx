import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Headline from './Components/Headline/Headline'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Education from './Components/Education/Education'
import Pricing from './Components/Pricing/Pricing'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/ContactFooter/ContactFooter'




const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Headline />
      <Services />
      <About />
      <Projects />
      <Headline />
      <Education />
      <Pricing />
      <Headline />
      <Testimonial />
      <Contact />
      
      
    </div>
  )
}

export default App
