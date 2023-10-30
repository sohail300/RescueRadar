
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import Admin_login from './components/Admin_login';
import Loginas from './components/Loginas';
import Topdesign from './components/Topdesign';
import Mobile from './components/Mobile';
import OTP from './components/OTP';
import Language from './components/Language';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
// import Sidebar from './components/Sidebar';
import EditProfile from './components/EditProfile';
import DistrictAdminLogin from './components/DistrictAdminLogin';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import Feedback from './components/Feedback';
import AdminHomepage from './components/AdminHomepage';
import UserHomepage from './components/UserHomepage';

function App() {
  return (
<>
    <Router>
      <Routes>

        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/" element={<Loginas />} />
        <Route path="/Admin_login" element={<Admin_login />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/DistrictAdminLogin" element={<DistrictAdminLogin />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Language" element={<Language />} />
        <Route exact path="/Loginas" element={<Loginas />} />
        <Route path="/Mobile" element={<Mobile />} />
        <Route path="/OTP" element={<OTP />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AdminHomepage" element={<AdminHomepage />} />
        <Route path="/UserHomepage" element={<UserHomepage />} />

      </Routes>
    </Router>
   

</>
  );
}

export default App;
