import React from 'react'

import SignUp from '../../components/sign-up/sign-up-form.component';
import SignIn from '../../components/sign-in/sign-in-form.component';
import './auth.styles.scss'

const Auth = () => {
    
  return (
    
    <div className='auth_container'>    
        <SignIn/>
        <SignUp/>
    </div>
  )
}

export default Auth