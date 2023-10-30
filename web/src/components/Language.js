import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topdesign from './Topdesign';
import user from '../images/user.png';

export default function Language() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(''); // Initialize with an empty string

  const handleProceed = (e) => {
    e.preventDefault();

    // Check if a language is selected before proceeding
    if (!selectedLanguage) {
      alert('Please select a language before proceeding.');
      return;
    }

    // Perform your submit logic here

    // Redirect to the Homepage after successful submit
    navigate('/UserHomepage'); // Replace '/Homepage' with the correct path
  };

  return (
    <div>
      <>
        <div style={{ backgroundColor: "#D9FBEE", minHeight: "100vh" }}>
          <Topdesign />
          <div className="mobile-number" style={{ textAlign: "center", marginTop: "2rem", marginBottom: "1rem" }}>Select Language</div>
          <div className=' d-flex justify-content-center align-items-center'>
            <select
              style={{ width: "30vw" }}
              class=" form-select"
              aria-label="Default select example"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="">Select Language</option>
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
            </select>
          </div>
          <button
            type="submit"
            class="btn submit"
            onClick={handleProceed}
            disabled={!selectedLanguage} // Disable the button if no language is selected
          >
            Proceed
          </button>
        </div>
      </>
    </div>
  );
}
