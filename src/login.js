import React, { useState } from 'react'

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function onsubmit(e){
        e.preventDefault();
        console.log(email,password);
    }
  return (
    <div>
        <form onSubmit={onsubmit} name='login_form'>
          <input
            type='email' 
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/>

          <input 
            type='password'
            value={password}
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

          <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login