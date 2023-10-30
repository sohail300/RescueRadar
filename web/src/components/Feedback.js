import React, { useState } from 'react';
import logo from '../images/logo.png'

import { Link, useNavigate } from 'react-router-dom';


export default function Feedback() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here

        // Reset input values
        setFullName('');
        setMobileNumber('');
        setRating('');
        setDescription('');
    };

    return (
        <div style={{ backgroundColor: "#EEEEEE", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <nav className="navbar navbar-expand-lg navbar-bg text-colour fixed-top" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/UserHomepage"><img src={logo} alt="" style={{ width: "70px", height: "55px" }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active text-center" aria-current="page" to="/UserHomepage" style={{ color: "#FFF", fontSize: "24px" }}>Rescue <span style={{ color: "#EB801B" }}>Radar</span></Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: "#FFF", fontSize: "16px" }} to="/Profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Language" style={{ color: "#FFF", fontSize: "16px" }}>Language</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Loginas" style={{ color: "#FFF", fontSize: "16px" }}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="contact-us" style={{ marginTop: " 15vh", marginLeft: "39%", marginBottom: "1%" }}>
                <p>Feedback</p>
            </div>

            <div style={{justifyContent:"center",display:"flex"}}>
                <table className="table table-borderless" style={{ width: "60%", background: "#EEEEEE" }}>
                    <tbody>
                        <tr>
                            <td className='profile-options' style={{ background: "#EEEEEE" }}> Full Name</td>
                        </tr>
                        <div className="input-group flex-nowrap">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Full Name"
                                aria-label="Username"
                                aria-describedby="addon-wrapping"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>

                        <tr>
                            <td className='profile-options' style={{ background: "#EEEEEE" }}>Mobile Number</td>
                        </tr>
                        <div className="input-group flex-nowrap">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Mobile Number"
                                aria-label="Username"
                                aria-describedby="addon-wrapping"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                        </div>
                        <tr>
                            <td className='profile-options' style={{ background: "#EEEEEE" }}>Rate Us</td>
                        </tr>
                        <div className="rating">
                            <input
                                type="radio"
                                name="rating"
                                value="5"
                                id="5"
                                checked={rating === '5'}
                                onChange={() => setRating('5')}
                            /><label style={{ background: "#EEE" }} htmlFor="5">☆</label>
                            <input
                                type="radio"
                                name="rating"
                                value="4"
                                id="4"
                                checked={rating === '4'}
                                onChange={() => setRating('4')}
                            /><label style={{ background: "#EEE" }} htmlFor="4">☆</label>
                            <input
                                type="radio"
                                name="rating"
                                value="3"
                                id="3"
                                checked={rating === '3'}
                                onChange={() => setRating('3')}
                            /><label style={{ background: "#EEE" }} htmlFor="3">☆</label>
                            <input
                                type="radio"
                                name="rating"
                                value="2"
                                id="2"
                                checked={rating === '2'}
                                onChange={() => setRating('2')}
                            /><label style={{ background: "#EEE" }} htmlFor="2">☆</label>
                            <input
                                type="radio"
                                name="rating"
                                value="1"
                                id="1"
                                checked={rating === '1'}
                                onChange={() => setRating('1')}
                            /><label style={{ background: "#EEE" }} htmlFor="1">☆</label>
                        </div>
                        <tr>
                            <td className='profile-options' style={{ background: "#EEEEEE" }}> Description</td>
                        </tr>
                        <div className="form-group">
                            <textarea
                                className="form-control auto-expand"
                                id="exampleTextarea"
                                rows="5"
                                placeholder="Enter text here"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        
                            <button
                                type="button"
                                className="btn"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                style={{ background: "#12AB69", borderRadius: "10% 20%", border: "none", color: "#FFFFFF", margin: "5% auto", display: "block", padding: "1%", width: "20%", fontSize: "15px" }}
                            >
                                submit
                            </button>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header" style={{ background: "#4bdb9d" }}>
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Feedback Submitted.</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <p>Thank you for your feedback! Your input is valuable to us, and we appreciate your time in helping us improve our services</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                                onClick={handleSubmit}
                                            >Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}
