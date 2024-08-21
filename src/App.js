import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/authPages/Login';
import Register from './Pages/authPages/Register';
import OtpVerify from './Pages/authPages/OtpVerify';
import Home from './Pages/Home';
import PreLoad from './Pages/PreLoad';
import ResetPassword from './Pages/authPages/ResetPassword';
import LiveCasino from './Pages/LiveCasino';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreLoad />} />
        <Route path='/home' element={<Home/>}/>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/live" element={<LiveCasino />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/otp-verify' element={<OtpVerify/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
