import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "react-slick";



import "./style/Dashboard.scss";
import "./style/Login.scss";
import "./style/Register.scss";
import "./style/App.scss"
import "./style/Home.scss"




import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import VerifyPage from "./Pages/VerifyPage";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/verifyEmail/:emailValidationToken" element={<VerifyPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
