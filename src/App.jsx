import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/App.scss"
import './style/component/Navbar.scss'
import './style/component/Form.scss'

import "./style/Dashboard.scss";
import "./style/Auth.scss";

import "./style/Home.scss"
import "./style/Message.scss"

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import VerifyPage from "./Pages/VerifyPage";
import Message from "./Pages/Message";
import Navbar from "./component/Navbar";


function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>

        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/message" element={<Message />} />
          <Route path="/verifyEmail/:emailValidationToken" element={<VerifyPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
