import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logobg from '../images/logobg.png';
import user from '../images/user.png';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform your submit logic here

    // Redirect to the AdminHomepage page after successful submit
    navigate('/AdminHomepage'); // Replace '/AdminHomepage' with the correct path
  };

  // Update the button disabled state based on input validity
  const updateButtonState = () => {
    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    const isPasswordValid = password.length >= 7; // Check if password is atleast 8 characters long
    setIsButtonDisabled(!isValidEmail || !isPasswordValid);
  };

  // Call updateButtonState whenever email or password changes
  useState(() => {
    updateButtonState();
  }, [email, password]);

  return (
    <div style={{ backgroundColor: "#D9FBEE", minHeight: "110vh" }}>
      <div className='containerss'>
        <div className='front-design'>
          <h3 className="text-center heading"> Rescue <span className='radar'>Radar</span></h3>
          <div className='logo-container'>
            <img className='logobg' src={logobg} alt="" />
          </div>
        </div>
      </div>
      <div className='forms' style={{display:"table",margin:" 0 auto"}}>
        <label className="password form-label" htmlFor="exampleInputEmail1" >Enter Email</label>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control wider-input"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              updateButtonState(); // Update button state on input change
            }}
          />
          <label htmlFor="floatingInput"><img className="image" src={user} alt="" />Email address</label>
        </div>
        <label className="password form-label" htmlFor="exampleInputPassword1">Enter Password</label>
        <div className="form-floating">
          <input
            type="password"
            className="form-control wider-input"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              updateButtonState(); // Update button state on input change
            }}
          />
          <label htmlFor="floatingPassword"><img className="image" src={user} alt="" />Password</label>
        </div>
      </div>
      <button
        type="submit"
        className="btn submit"
        onClick={handleLogin}
        disabled={isButtonDisabled}
      >
        LOGIN
      </button>
      <h5 className='text-center forgot'>Forgot password?</h5>
    </div>
  );
};

export default AdminLogin;
