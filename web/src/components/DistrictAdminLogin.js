import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logobg from '../images/logobg.png';
import user from '../images/user.png';

export default function DistrictAdminLogin() {
  const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform your submit logic here
  
      // Redirect to the Language page after successful submit
      navigate('/Homepage'); // Replace '/Language' with the correct path
    };
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#D9FBEE", padding: "20px 0" }}>
      <div className='containerss'>
        <div className='front-design'>
          <h3 className="text-center heading"> Rescue <span className='radar'>Radar</span></h3>
          <div className='logo-container'>
            <img className='logobg' src={logobg} alt="" />
          </div>
        </div>
      </div>
      <div className='forms'>
        <label className="password form-label" htmlFor="exampleInputEmail1" >Enter Email</label>
        <div className="form-floating mb-3">
          <input type="email" className="form-control wider-input" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput"><img className="image" src={user} alt="" />Email address</label>
        </div>
        <label className="password form-label" htmlFor="exampleInputPassword1" >Enter Password</label>
        <div className="form-floating">
          <input type="password" className="form-control wider-input" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword"> <img className="image" src={user} alt="" />Password</label>
        </div>
      </div>
      <button type="submit" className="btn submit" onClick={handleSubmit}>LOGIN</button>
      <h5 className='text-center forgot'>Forgot password?</h5>
    </div>
  );
}
