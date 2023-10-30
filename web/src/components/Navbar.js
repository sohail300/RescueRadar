import React from 'react';
import {Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
// import profile from '../images/profile.png';
import logos from '../images/logoe.png';

export default function Navbar({ fullName, mobileNumber, selectedImage }) {
  const navigate = useNavigate();
  const location = useLocation();

  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-bg text-colour fixed-top" style={{ height: "11%", top: 0, zIndex: 1000 }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/UserHomepage"><img src={logo} alt="" style={{ width: "70px", height: "55px" }}  /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto"> {/* Centered item */}
              <li className="nav-item">
                <a className="nav-link active text-center" aria-current="page" href="#" style={{ color: "#FFF", fontSize: "24px" }}>Rescue <span style={{ color: "#EB801B" }}>Radar</span></a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto"> {/* Right-aligned items */}
              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#FFF", fontSize: "16px" }} to="/Profile" >Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Language" style={{ color: "#FFF", fontSize: "16px" }} >Language</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Loginas" style={{ color: "#FFF", fontSize: "16px" }}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ backgroundColor: "#D9FBEE", minHeight: "100vh", marginRight: "10%", position: "fixed", top: "60px", zIndex: 999 }}>
        <div style={{ backgroundColor: "#D9FBEE", minHeight: "100vh", marginRight: "10%", position: "fixed" }}>
          <nav className="sidebar">
            {selectedImage && (
              <div className="user-profile">
                <img src={selectedImage} alt="Selected Profile" style={{ borderRadius: "100%", position: "fixed", width: "9%", height: "18%", marginTop: "14.6%", marginLeft: "8%" }} />
              </div>
            )}
            <div className='d-flex justify-content-center'>
              <h1 style={{ fontWeight: "400", lineHeight: "normal", position: "fixed", marginTop: "24%", color: "#031F13", fontSize: "24px", color: "#FFFFFF" }}>
                {fullName}
              </h1>
              <h1 style={{ fontWeight: "400", lineHeight: "normal", position: "fixed", marginTop: "26%", color: "#031F13", fontSize: "24px", textAlign: "center", color: "#FFFFFF" }}>
                {mobileNumber}
              </h1>
            </div>
          </nav>
          <img className="img-responsive" style={{ borderRadius: "50%", height: "20%", width: "10%", position: "fixed", marginTop: "13%", marginLeft: "21.2%" }} src={logos} alt="" />
        </div>
      </div>
    </>
  )
}
