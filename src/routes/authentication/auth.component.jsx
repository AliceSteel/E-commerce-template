import React from 'react'

import SignUp from '../../components/sign-up/sign-up-form.component';
import SignIn from '../../components/sign-in/sign-in-form.component';

import { AuthContainer } from './auth.styles.jsx';

const Auth = () => {
    
  return (
    
    <AuthContainer>    
        <SignIn/>
        <SignUp/>
    </AuthContainer>
  )
}

export default Auth