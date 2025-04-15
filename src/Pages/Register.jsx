import React, { useState } from 'react'
import { PhEyeBold, PhEyeClosedBold } from '../uikits/Icons'
import { InpuType } from '../uikits/Input'
import axios from 'axios'


export default function Register() {
  const [showPassword, setShowPassword] = useState(false)

  // États du formulaire
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    whatsapp: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.")
      return
    }
  
    try {
      const response = await axios.post("http://localhost:5550/auth/register", {
        fullname: formData.fullname,
        phone: formData.phone,
        whatsapp: formData.whatsapp,
        email: formData.email,
        password: formData.password
      })
  
      // Axios te donne directement les données dans `response.data`
      alert("Inscription réussie !")
      console.log("✅ Utilisateur inscrit :", response.data)
  
      // Rediriger ou vider les champs si besoin
      // window.location.href = "/login";
      // setFormData({...}) pour vider les champs
    } catch (error) {
      console.error("Erreur d'inscription :", error)
      const errorMessage = error.response?.data?.message || "Erreur lors de la connexion au serveur."
      alert(`❌ ${errorMessage}`)
    }
  }
  

  return (
    <div className='Register'>
      <h1>S'inscrire</h1>
      <div className='formulaire'>

        <div className='left'>
          <h2>Entrez vos informations</h2>
          <form onSubmit={handleSubmit}>
            <InpuType label="Nom Complet" name="fullname" type="text" onChange={handleChange} />
            <InpuType label="Votre numéro de téléphone" name="phone" type="tel" placeholder="Ex: +229 90 00 00 00" onChange={handleChange} />
            <InpuType label="Votre numéro de whatsapp" name="whatsapp" type="tel" placeholder="Ex: +229 90 00 00 00" onChange={handleChange} />
            <InpuType label="Votre Email" name="email" type="email" onChange={handleChange} />

            <section>
              <InpuType label="Votre Mot de passe" name="password" type={showPassword ? "text" : "password"} onChange={handleChange} />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <PhEyeBold /> : <PhEyeClosedBold />}
              </span>
            </section>

            <InpuType label="Veuillez confirmer votre mot de passe" name="confirmPassword" type={showPassword ? "text" : "password"} onChange={handleChange} />
            <button type="submit">S'inscrire</button>
          </form>
        </div>

        <div className='right'>
          <img src="/public/images/register.svg" alt="" />
          <button><a href="/login">Se connecter</a></button>
        </div>
      </div>
    </div>
  )
}
