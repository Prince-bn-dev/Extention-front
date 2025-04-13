import React, { useState } from 'react'
import { PhEyeBold, PhEyeClosedBold } from '../uikits/Icons'
import { InpuType } from '../uikits/Input';



export default function Login() {

  const [showPassword,setShowPassword] = useState(false);

  return (
    <div className='login'>
      <h1>Se Connecter</h1>
     <div className='formulaire'>
      <div className='left'>
       <img src="/public/images/login.svg" alt="" />
       <button><a href="/register">S'inscrire</a></button>
      </div>

     <div className='right'>
     <form action="">
     <h2>Entrez vos informations</h2>
        <InpuType label={"Votre Email"} name={"Email"} type={"email"} />
        <section>
        <InpuType label={"Votre Mot de passe"} name={"Mot de passe"} type={showPassword ? "text":"password"} />
            <span onClick={()=>{
              setShowPassword(!showPassword)
            }}>
             
             {showPassword ?<PhEyeBold /> :<PhEyeClosedBold />}
            </span>
        </section>
      </form>
      <button>Se connecter</button>
     </div>
     </div>
    </div>
  )
}
