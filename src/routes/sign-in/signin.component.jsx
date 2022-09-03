import React from 'react'

import { 
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocFromAuth 
} from '../../utilities/firebase/firebase'

import SignUp from '../../components/sign-up/sign-up-form.component'

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
        <SignUp/>
    </>
  )
}

export default Signin