import React, { useRef } from 'react'
import {PhCopy} from '../uikits/Icons'

export default function Dashboard() {

  const textRef = useRef(null);

  const handleCopy = () => {
    const text = textRef.current?.innerText;
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          alert("Texte copié !");
        })
        .catch(err => {
          console.error("Erreur de copie :", err);
        });
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
          <b ref={textRef}>azazazazz</b>
          <PhCopy onClick={handleCopy}/>
          </section>
       <button>Générez votre clé</button>
      </div>
     
    </div>
  )
}
