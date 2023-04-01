import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
    <h1>Login Page</h1>
    <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
    <form>
      <h2>Log in Here!</h2>
      <div>
      <label>Email</label>
      <input
      placeholder="Email (for username)"
      type="text"
      name="email"
      value={""} />
      </div>
      <div>
          <label>Password</label>
          <input
          placeholder="Password"
          type="password"
          name="password"
          value={""} />
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