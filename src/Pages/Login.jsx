import React, { useState } from 'react'
import { PhEyeBold, PhEyeClosedBold } from '../uikits/Icons'
import { InpuType } from '../uikits/Input'
import axios from 'axios'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

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
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
      alert("Erreur : " + (err.response?.data?.message || err.message));
    }
  };
  return (
    <div className='login'>
      <h1>Se Connecter</h1>
      <div className='formulaire'>

        <div className='left'>
          <img src="/public/images/login.svg" alt="" />
          <button><a href="/register">S'inscrire</a></button>
        </div>

        <div className='right'>
          <form onSubmit={handleLogin}>
            <h2>Entrez vos informations</h2>
            <InpuType
              label="Votre Email"
              name="email"
              type="email"
              onChange={handleChange}
            />

            <section>
              <InpuType
                label="Votre Mot de passe"
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <PhEyeBold /> : <PhEyeClosedBold />}
              </span>
            </section>

            <button type="submit">Se connecter</button>
          </form>
        </div>

      </div>
    </div>
  )
}
