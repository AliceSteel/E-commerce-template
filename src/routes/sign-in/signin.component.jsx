import React from 'react'
import { signInWithGooglePopup,createUserDocFromAuth } from '../../utilities/firebase/firebase'

const Signin = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }
  return (
    <>
       <h1>Signin page</h1> 
       <button onClick={logGoogleUser}>
        Sign in with google popup
       </button>
    </>
  )
}

export default Signin