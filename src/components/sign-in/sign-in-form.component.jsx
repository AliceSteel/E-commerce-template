import React, { useState } from "react";
import { signInWithGooglePopup, createUserDocFromAuth, signInWithEmail } from "../../utilities/firebase/firebase";

import FormInput from "../form-input/form-input.component";
import Btn, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import  './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

/* =======GOOGLE sign-in========================================================= */

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
        resetForm();
    }

/* ======FORM sign-in===================================================== */

    const handleChange = ({target}) => {
        setFormFields((otherFields)=> ({...otherFields, [target.name]: target.value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {user} = await signInWithEmail(email, password);
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
    /* ======================================================================0 */
    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

  return (
    <div className="sign_up_container">
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
            <div className="btns_container">
                <Btn type='submit'>Sign In</Btn>
                <Btn type='button'
                    btnType={BUTTON_TYPE_CLASSES.google} 
                    onClick={logGoogleUser}
                >Google Sign in</Btn>
            </div>
            
        </form>
    </div>
  )
}

export default SignIn