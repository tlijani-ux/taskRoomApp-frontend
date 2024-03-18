import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Content from './Content';
import About from './About';
import Services from './Services';
import Footer from './Footer';

function Mainpage() {
  return (
    <div>
      <Navbar />
      <Content />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default Mainpage;