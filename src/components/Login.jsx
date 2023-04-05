import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'


const Login = () => {

  const {login} = UserAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError('')
    try{
      await login(email, password)
      navigate('/account')
    }catch(e){
      setError(e.message)
      console.log(e.message)
    }
  }



  return (
    <div>
    <h1>Login Page</h1>
    <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
    <p>Go to your history now! <Link to='/history'>History</Link> </p>
    <form onSubmit={handleSubmit}>
      <h2>Log in Here!</h2>
      <div>
      <label>Email</label>
      <input
      placeholder="Email (for username)"
      type="text"
      name="email"
      value={email}
      onChange = {(e) => setEmail(e.target.value)}
       />
      </div>
      <div>
          <label>Password</label>
          <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange = {(e) => setPassword(e.target.value)} />
      </div>
      <div>
          <input
          type="submit"
          value="Log In" />
      </div>
    </form>

  </div>
  )
}

export default Login