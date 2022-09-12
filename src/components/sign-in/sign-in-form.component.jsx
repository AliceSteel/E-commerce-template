import React, { useState } from "react";

import { signInWithGooglePopup, 
   // createUserDocFromAuth, 
    signInWithEmail } from "../../utilities/firebase/firebase";

import FormInput from "../form-input/form-input.component";
import Btn, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import { BtnsWrap, SignInContainer } from "./sign-in-form.styles.jsx";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

/* =======GOOGLE sign-in========================================================= */
const logGoogleUser = async () => {
    await signInWithGooglePopup();
    resetForm();
  };
    /* const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocFromAuth(user);
        resetForm();
    } */

/* ======FORM sign-in===================================================== */

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmail(email, password);
            resetForm();
        }
        catch(error){
            switch(error.code){
                case 'auth/user-not-found':
                    alert('U havent got an account, please sign up first');
                    break;
                case 'auth/wrong-password':
                    alert('U have entered wrong password');
                    break;
                case 'auth/internal-error':
                    alert('Internal error, please try later')
                    break;
                default: 
                console.log(error);
            }
           console.log('error signing in', error);
        }
    }
    
    const handleChange = ({target}) => {
        setFormFields((otherFields)=> ({...otherFields, [target.name]: target.value}));
    }

    /* ======================================================================0 */
   

  return (
    <SignInContainer>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>

            <FormInput
                label='Email'
                type='email'
                onChange={handleChange} 
                name='email' 
                value={email} 
                autoComplete='email'
            />

            <FormInput 
                label='Password'
                type='password' 
                onChange={handleChange} 
                name='password' 
                value={password} 
                autoComplete='new-password'
            />
            <BtnsWrap>
                <Btn type='submit'>Sign In</Btn>
                <Btn type='button'
                    btnType={BUTTON_TYPE_CLASSES.google} 
                    onClick={logGoogleUser}
                >Google Sign in</Btn>
            </BtnsWrap>
            
        </form>
    </SignInContainer>
  )
}

export default SignIn;