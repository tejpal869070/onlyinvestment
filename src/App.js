import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/authPages/Login";
import Register from "./Pages/authPages/Register";
import OtpVerify from "./Pages/authPages/OtpVerify";
import Home from "./Pages/Home";
import PreLoad from "./Pages/PreLoad";
import ResetPassword from "./Pages/authPages/ResetPassword";
import { ProtectedRoute } from "./Controllers/Auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreLoad />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp-verify" element={<OtpVerify />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
