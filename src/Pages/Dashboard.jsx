import React, { useRef, useState } from 'react'
import { PhCopy } from '../uikits/Icons'
import axios from 'axios'

export default function Dashboard() {
  const textRef = useRef(null)
  const [apiKey, setApiKey] = useState('')

  const handleCopy = () => {
    const text = textRef.current?.innerText
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          alert("Clé copiée dans le presse-papier !")
        })
        .catch(err => {
          console.error("Erreur de copie :", err)
        })
    }
  }

  const handleGenerateKey = async () => {
    try {
      const token = localStorage.getItem("token") // Ton token JWT stocké après login

      const response = await axios.get("http://localhost:5550/auth/generate-api-key", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setApiKey(response.data.apiKey)
      alert("Clé générée avec succès !")
    } catch (error) {
      console.error("Erreur lors de la génération de la clé :", error)
      const msg = error.response?.data?.message || "Erreur inconnue"
      alert(`Erreur : ${msg}`)
    }
  }

  return (
    <div className='dashboard'>
      <div className='banniere'>
        <h1>Bienvenue</h1>
      </div>

      <h2 className='title'>Pour continuer, veuillez générer votre clé.</h2>

      <div className='key'>
        <section>
          <b ref={textRef}>{apiKey || "Votre clé s'affichera ici"}</b>
          <PhCopy onClick={handleCopy} />
        </section>

        <button onClick={handleGenerateKey}>Générez votre clé</button>
      </div>
    </div>
  )
}
