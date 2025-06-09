import React from 'react';
import Navbar from './components/core/Navbar';
import Hero from './components/homepage/Hero';
import About from './components/homepage/About';
import Services from './components/homepage/Services';
import Partners from './components/homepage/Partners';
import Footer from './components/core/Footer';

function App() {
  return (
    <div className="min-h-screen bg-golden-light">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;