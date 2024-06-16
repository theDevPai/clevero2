import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Programs from './Components/Programs/Programs.jsx';
import Title from './Components/Title/Title.jsx';
import About from './Components/About/About.jsx';
import Campus from './Components/Calculator/Calculator.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Goal' title='What our platform helps with'/>
        <Programs />
        <About />
        <Title subtitle='Calculator' title='Take the first step'/>
        <Campus />
        <Title subtitle='Testimonials' title='What Users Say' />
        <Testimonials />
        <Title subtitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App