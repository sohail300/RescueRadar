import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topdesign from './Topdesign';
import user from '../images/user.png';

export default function OTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleProceed = (e) => {
    e.preventDefault();

    // Validate the OTP format (6 digits)
    const otpRegex = /^[0-9]{6}$/;

    if (!otpRegex.test(otp)) {
      setError('Please enter a valid 6-digit OTP.');
      return;
    }

    // Clear any previous error messages
    setError('');

    // Perform your submit logic here

    // Redirect to the Language page after successful submit
    navigate('/Language'); // Replace '/Language' with the correct path
  };

  return (
    <div>
      <div style={{ backgroundColor: "#D9FBEE", minHeight: "100vh" }}>
        <Topdesign />
        <div className="mobile-number" style={{ textAlign: "center", marginTop: "2rem", marginBottom: "1rem" }}>Enter the OTP</div>
        <div className=' d-flex justify-content-center align-items-center flex-column'> {/* Wrapped input and error in a flex-column div */}
          <div class="form-floating">
            <input
              type="text" // Change type to 'text'
              class="form-control wider-input"
              id="floatingPassword"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <label for="floatingPassword">
              <img className="image" src={user} alt="" />OTP
            </label>
          </div>
          {error && <p className="text-danger">{error}</p>}
        </div>
        <button type="submit" class="btn submit" onClick={handleProceed}>PROCEED</button>
      </div>
    </div>
  )
}
