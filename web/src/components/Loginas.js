// import logobg from '../images/logobg.png';
// import user from '../images/user.png';
import Arrow from '../images/Arrow.svg';
import logobg from '../images/logobg.png';
import Topdesign from './Topdesign';
import { useNavigate } from 'react-router-dom';
// import Mobile from './Mobile';
// import AdminLogin from './Admin_login';
// import DistrictAdminLogin from './DistrictAdminLogin';

export default function Loginas() {
  const navigate = useNavigate();
  const handleUser = () => {
    // Navigate to the "Mobile Number" page
    navigate('/Mobile'); // Define the route for the "Mobile Number" page
  };
  const handleAdmin = () => {
    // Navigate to the "Admin Login" page
    navigate('/Admin_login'); // Define the route for the "Admin Login" page
  };

  const handleDistrictAdmin = () => {
    // Navigate to the "District Admin Login" page
    navigate('/DistrictAdminLogin'); // Define the route for the "District Admin Login" page
  };

  return (
    <>

      <div className='component-box' style={{ backgroundColor: "#D9FBEE", minHeight: "110vh" }}>
      <div className='containerss'>
            <div className='front-design'>
                <h3 className="text-center heading"> Rescue <span className='radar'>Radar</span></h3>
                <div className='logo-container'>
                    <img className='logobg img-fluid ' src={logobg} alt="" />
                </div>
            </div>
        </div>
        <div class="box-wrapper">
          <div class="middle-column">
            <div className='user' id="box5" style={{ backgroundColor: "#92DAFF" }} onClick={handleUser}  >
              <h3 style={{ marginLeft: "3.6vh", textAlign: "left", marginTop: "3.6vh", fontSize: "1.5rem" }}>USER</h3>
              <img src={Arrow} alt="" />
            </div>
            <div className='user' id="box5" style={{ backgroundColor: "#FF7E7E" }} onClick={handleAdmin}>
              <h3 style={{ marginLeft: "3.6vh", textAlign: "left", marginTop: "3.6vh", fontSize: "1.5rem" }}>ADMIN</h3>
              <img src={Arrow} alt="" />
            </div>
            <div className="district-admin" id="box7" style={{ justifyContent: "space-between" }} onClick={handleDistrictAdmin}>
              <h3 style={{ marginLeft: "3.6vh", textAlign: "left", marginTop: "3.6vh", fontSize: "1.5rem" }}>DISTRICT-ADMIN   </h3><img src={Arrow} alt="" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
