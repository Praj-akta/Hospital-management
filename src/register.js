import React, { useState } from 'react'

function Register() { 

    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [confirmPassword,setConfirmPassword] =useState("")
    function register(e){
        e.preventDefault();
        console.log(email,password)
    }
  return (
    <form onSubmit={register} name = "registerform"> <input 
    type='email' 
    value={email}
    placeholder="Enter your email"
    required
    onChange={e => setEmail(e.target.value)}/>

  <input 
    type='password'
    value={password} 
    required
    placeholder='Enter your password'
    onChange={e => setPassword(e.target.value)}/>

    <input 
    type='password'
    value={confirmPassword} 
    required
    placeholder='Confirm password'
    onChange={e => setConfirmPassword(e.target.value)}/>

  <button type='submit'>Register</button></form>



  )
}

export default Register