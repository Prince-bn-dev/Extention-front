import React, { useState } from 'react'
import { PhEyeBold, PhEyeClosedBold } from '../uikits/Icons'
import { InputType, InpuTypePassword } from '../uikits/Input'
import axios from 'axios'
import AuthContainer from '../component/AuthContainer'
import { FormButton } from '../uikits/Button'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5550/auth/login", formData);
      alert("Connexion réussie !");
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
      alert("Erreur : " + (err.response?.data?.message || err.message));
    }
  };
  return (
    <AuthContainer
    title={'Se connecter'}
    imgPos={1}
    img="/public/images/login.svg"
    otherAuthLink="/register"
    otherAuthLabel="Inscrivez vous"
    formComponent={
      <>
      <h2>Entrez vos informations</h2>
            <InputType
              label="Votre Email"
              name="email"
              type="email"
              onChange={handleChange}
            />
            <InpuTypePassword label="Votre Mot de passe" name="password" onChange={handleChange}/>

            <FormButton dtype="normal">Se connecter</FormButton>
      </>
    }
    authSubmit={handleLogin}
    />
  )
}


