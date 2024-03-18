
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate(); // Corrected: useNavigate should be called as a function

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  }


  return (
    <header className="header">
      <div className="task-icon">
        <img src="../images/taskroomicon.png" alt="icontask" />
        <p className="logo">TaskRoom</p>
      </div>

      {/* <div className="menu-toggle">&#9776;</div> */}
      <nav className="nav">
        {token ? (
          <>
            <a className="logout" href="#logout" onClick={handleLogout}>Logout</a>
          </>
        ) : (
          <>
            <a className="underline" href="#services">Services</a>
            <a className="underline" href="#about">About us</a>
            <Link className="underline" to="/contact">Contact</Link>
            <Link className="underline" to="/signin">Sign In</Link>
            <Link className="cta get" to="/signup"><span>Get Started</span></Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
