import React, { useState } from 'react'
import { PhEyeBold, PhEyeClosedBold } from '../uikits/Icons'
import { InpuType } from '../uikits/Input';

export default function Register() {
    const [showPassword,setShowPassword] = useState(false);
  return (
    <div className='Register'>
      <h1>S'inscrire</h1>
      <div className='formulaire'>
    
     <div className='left'>
      <h2>Entrez vos informations</h2>
     <form action="">
        <InpuType label={"Nom Complet"} name={"Nom"} type={"text"} />
        <InpuType label={"Votre Email"} name={"Email"} type={"email"} />
        <section>
        <InpuType label={"Votre Mot de passe"} name={"Mot de passe"} type={showPassword ? "text":"password"} />
            <span onClick={()=>{
              setShowPassword(!showPassword)
            }}>
             
             {showPassword ?<PhEyeBold /> :<PhEyeClosedBold />}
            </span>
        </section>
        <InpuType label={"Veuillez confirmer votre mot de passe"} name={"Mot de passe"} type={showPassword ? "text":"password"} />
      </form>
      <button>S'inscrire</button>
     </div>

     <div className='right'>
       <img src="/public/images/register.svg" alt="" />
       <button><a href="/login">Se connecter</a></button>
      </div>

     </div>
    </div>
  )
}
