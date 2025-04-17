import React, { useState } from 'react'
import { PhEyeBold, PhEyeClosedBold } from '../uikits/Icons'
import { InputType, InpuTypePassword } from '../uikits/Input'
import axios from 'axios'
import AuthContainer from '../component/AuthContainer'
import { FormButton } from '../uikits/Button'


export default function Register() {

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

  const handleRegister = async (e) => {
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
  

  return (<AuthContainer
title={'Sinscrire'}
imgPos={1}
img="/public/images/register.svg"
otherAuthLink="/login"
otherAuthLabel="Connectez vous"
formComponent={
  <>
          <h2>Entrez vos informations</h2>
            <InputType label="Nom Complet" name="fullname" type="text" onChange={handleChange} />
            <InputType label="Votre numéro de téléphone" name="phone" type="tel" placeholder="Ex: +229 90 00 00 00" onChange={handleChange} />
            <InputType label="Votre numéro de whatsapp" name="whatsapp" type="tel" placeholder="Ex: +229 90 00 00 00" onChange={handleChange} />
            <InputType label="Votre Email" name="email" type="email" onChange={handleChange} />
            <InpuTypePassword label="Votre Mot de passe" name="password" onChange={handleChange}/>
            <InpuTypePassword label="Confirmer Votre Mot de passe" name="password" onChange={handleChange}/>

            <FormButton dtype="normal">S'inscrire</FormButton>
  </>
  
}
authSubmit={handleRegister}
/>
  )
}
