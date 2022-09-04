import React, { useState } from "react";
import { createAuthWithEmail, createUserDocFromAuth } from "../../utilities/firebase/firebase";
import FormInput from "../form-input/form-input.component";
import Btn from "../button/button.component";
import  './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassw: ''
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassw } = formFields;

    const handleChange = ({target}) => {
        setFormFields((otherFields)=> ({...otherFields, [target.name]: target.value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassw) {
          alert('passwords do not match')
          return;
        }
        try {
            const {user} = await createAuthWithEmail(email, password);
            await createUserDocFromAuth(user, {displayName});
            resetForm();
        }

        catch(error){
            switch (error.code){
                case 'auth/invalid-password':
                    alert('Password must be a string with at least six characters.');
                    break;
            
                case 'auth/email-already-in-use':
                    alert('Email alredy in use, please sign in');
                    break;
                default: 
                    console.log('user creation ended error:', error);
            }
            
        }
    }
    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

  return (
    <div className="sign_up_container">
        <h2>Don't Have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            
            <FormInput 
                label='Display Name'
                type='text' 
                onChange={handleChange} 
                name='displayName' 
                value={displayName} 
                autoComplete='name'
            />

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

            <FormInput
                label='Confirm Password'
                type='password' 
                onChange={handleChange} 
                name='confirmPassw' 
                value={confirmPassw} 
                autoComplete='new-password'
            />

            <Btn type='submit'>Sign Up</Btn>
        </form>
    </div>
  )
}

export default SignUp