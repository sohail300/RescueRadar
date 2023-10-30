import React from 'react';
import logobg from '../images/logobg.png';
// import user from '../images/user.png';
// import './Topdesign.css'; // Import a custom CSS file for any additional styling

const Topdesign = () => {
    return (
        <div className='containerss'>
            <div className='front-design'>
                <h3 className="text-center heading"> Rescue <span className='radar'>Radar</span></h3>
                <div className='logo-container'>
                    <img className='logobg img-fluid ' src={logobg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Topdesign;
