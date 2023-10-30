import React from 'react'
import Homepage from './Homepage'
import Arrow from '../images/Arrow.svg';

export default function UserHomepage() {
  return (
    <div>
      <Homepage/>
      <div class="box-wrapper" style={{ marginTop: "10vh" }}>
        <div class="middle-column" style={{marginTop:"10vh"}}>
          <div className="district-admin" id="box7" style={{ justifyContent: "space-between" }} >
            <h3 style={{ marginLeft: "3.6vh", textAlign: "left", marginTop: "3.6vh", fontSize: "1.5rem" }}>EMERGENCY REPORTING  </h3><img src={Arrow} alt="" />
          </div>
          <div className='user' id="box5" style={{ backgroundColor: "#C882FF" }}   >
            <h3 style={{ marginLeft: "3.6vh", textAlign: "left", marginTop: "3.6vh", fontSize: "1.5rem" }}>OFFLINE EMERGENCY REPORTING</h3>
            <img src={Arrow} alt="" />
          </div>
          <div className='user' id="box5" style={{ backgroundColor: "#92DAFF" }}>
            <h3 style={{ marginLeft: "3.6vh", textAlign: "left", marginTop: "3.6vh", fontSize: "1.5rem" }}>NORMAL CASES</h3>
            <img src={Arrow} alt="" />
          </div>
          <div className='user' id="box5" style={{ backgroundColor: "#FF7E7E" }}   >
            <h3 style={{ marginLeft: "3.6vh", textAlign: "left", marginTop: "3.6vh", fontSize: "1.5rem" }}>MAP HELP</h3>
            <img src={Arrow} alt="" />
          </div>




        </div>
      </div>
    </div>
  )
}
