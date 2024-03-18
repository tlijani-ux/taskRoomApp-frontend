// import React, { useEffect,useState,useRef } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navbarRef = useRef(null); // Ref to access the navbar element

//   // Event handlers for menu toggle and scroll events
//   const menuToggleHandler = () => setIsOpen(!isOpen);
//   useEffect(() => {
//     document.addEventListener('DOMContentLoaded', function () {
//       const menuToggle = document.querySelector('.menu-toggle');
//       const nav = document.querySelector('.nav');

//       menuToggle.addEventListener('click', function () {
//           nav.classList.toggle('active');
//       });
//     });

//     window.addEventListener('scroll', function() {
//       var navbar = document.getElementById
//       ('navbar');
//       if (window.scrollY > 0) {
//         navbar.classList.add('shadow');
//       } else {
//         navbar.classList.remove('shadow');
//       }
//     });

//     // Cleanup function to remove event listeners when the component unmounts
//     return () => {
//       document.removeEventListener('DOMContentLoaded', () => {});
//       window.removeEventListener('scroll', () => {});
//     };
//   }, []); // Empty dependency array means this effect runs only once after initial render

//   return (
//     <header id="navbar" className="header">
//       <div className="task-icon">
//         <img src="../images/taskroomicon.png" alt="icontask" />
//         <p className="logo">TaskRoom</p>
//       </div>
//       <div className="menu-toggle" onClick={}>&#9776;</div>
//       <nav className="nav">
//         <Link className="underline" to="/">Home</Link>
//         <a className="underline" href="#services">Services</a>
//         <a className="underline" href="#about">About us</a>
//         <Link className="underline" to="/contact">Contact</Link>
//         <Link className="underline" to="/signin">Sign In</Link>
//         <Link className="cta get" to="/signup"><span>Get Started</span></Link>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;




import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
 
  return (
    <header className="header">
      <div className="task-icon">
        <img src="../images/taskroomicon.png" alt="icontask" />
        <p className="logo">TaskRoom</p>
      </div>
      {/* <div className="menu-toggle">&#9776;</div> */}
      <nav className="nav">
        <Link className="underline" to="/">Home</Link>
        <a className="underline" href="#services">Services</a>
        <a className="underline" href="#about">About us</a>
        <Link className="underline" to="/contact">Contact</Link>
        <Link className="underline" to="/signin">Sign In</Link>
        
        <Link className="cta get" to="/signup"><span>Get Started</span></Link>
      </nav>
    </header>
  );
}

export default Navbar;
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleScroll = () => {
//     const navbar = document.getElementById('navbar');
//     if (window.scrollY > 0) {
//       navbar.classList.add('shadow');
//     } else {
//       navbar.classList.remove('shadow');
//     }
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header id="navbar" className="header">
//       <div className="task-icon">
//         <img src="../images/taskroomicon.png" alt="icontask" />
//         <p className="logo">TaskRoom</p>
//       </div>
//       <div className="menu-toggle" onClick={toggleMenu}>
//         &#9776;
//       </div>
//       <nav className={`nav ${isOpen ? 'active' : ''}`}>
//         <Link className="underline" to="/">
//           Home
//         </Link>
//         <a className="underline" href="#services">
//           Services
//         </a>
//         <a className="underline" href="#about">
//           About us
//         </a>
//         <Link className="underline" to="/contact">
//           Contact
//         </Link>
//         <Link className="underline" to="/signin">
//           Sign In
//         </Link>
//         <Link className="cta get" to="/signup">
//           <span>Get Started</span>
//         </Link>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
