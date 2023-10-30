import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topdesign from './Topdesign';
import user from '../images/user.png';

export default function Mobile() {
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleGetOTP = (e) => {
    e.preventDefault();

    // Validate the phone number
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(mobileNumber)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    // Clear any previous error messages
    setError('');

    // Store input values in local storage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('mobileNumber', mobileNumber);

    // Pass fullName and mobileNumber as state when navigating to OTP
    navigate('/OTP');
  };

  // Determine if the "Get OTP" button should be disabled based on input validity
  const isButtonDisabled = !(fullName.trim() && mobileNumber.match(/^[0-9]{10}$/));

  return (
    <>
      <div style={{ backgroundColor: "#D9FBEE", minHeight: "110vh" }}>
        <Topdesign />

        <div className="mobile-number" style={{ textAlign: "center", marginTop: "2rem", marginBottom: "1rem" }}>Enter Your Full Name</div>
        <div className='d-flex justify-content-center align-items-center'>
          <div className="form-floating">
            <input
              type="text"
              className="form-control wider-input"
              id="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label htmlFor="fullName"><img className="image" src={user} alt="" />Full Name</label>
          </div>
        </div>
        <div className="mobile-number" style={{ textAlign: "center", marginTop: "2rem", marginBottom: "1rem" }}>Enter Your Mobile Number</div>
        <div className='d-flex justify-content-center align-items-center'>
          <div className="form-floating">
            <input
              type="tel"
              className="form-control wider-input"
              id="mobileNumber"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <label htmlFor="mobileNumber"><img className="image" src={user} alt="" />Mobile Number</label>
          </div>
        </div>
        {error && <p className="text-danger">{error}</p>}

        <button type="submit" className="btn submit" onClick={handleGetOTP} disabled={isButtonDisabled}>
          Get OTP
        </button>
      </div>
    </>
  );
}
