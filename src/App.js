import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Content from './components/Content';
import About from './components/About';
import Services from './components/Services';
import SignInSide from './components/Signin'; // Import the Signin component
import SignUp from './components/SignUp'; // Import the Signup component
import Footer from './components/Footer';
import Mainpage from './components/Mainpage';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" exact element={<Mainpage />} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/signin" element={<SignInSide />} /> 
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/Signup' element={<SignUp />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
