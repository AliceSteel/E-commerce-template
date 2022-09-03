import React, { useState } from "react"

const defaultFormFields = {
    displayName: ' ',
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

  return (
    <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={()=>{}}>
            <label>Display Name</label>
            <input type='text' required onChange={handleChange} name='displayName' value={displayName} />

            <label>Email</label>
            <input type='email' required onChange={handleChange} name='email' value={email}/>

            <label>Password</label>
            <input type='password' required onChange={handleChange} name='password' value={password}/>

            <label>Confirm Password</label>
            <input type='password' required onChange={handleChange} name='confirmPassw' value={confirmPassw}/>

            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp