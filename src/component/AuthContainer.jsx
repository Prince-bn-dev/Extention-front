import React from 'react'
import { SimpleButton } from '../uikits/Button'

function AuthContainer({title,imgPos,img,formComponent,otherAuthLink,
    otherAuthLabel,authSubmit}) {
  return (
    <div className='authContainer'>
        <h1>Se Connecter</h1>
        <div className='ac-formAndImg flex f-wrap jc-sa'>
            <section className="ac-img">
            <img src={img} alt="Auth img" />
            <SimpleButton dtype="normal" link={otherAuthLink}>{otherAuthLabel}</SimpleButton>
            </section>
            <form className="ac-form" onSubmit={(e)=>authSubmit(e)}>
                {formComponent}
            </form>
        </div>
    </div>
  )
}

export default AuthContainer