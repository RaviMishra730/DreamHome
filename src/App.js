import React from 'react';
import Content from './components/Content';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Featured />
      <Footer />
    </>
  )
}

export default App;
