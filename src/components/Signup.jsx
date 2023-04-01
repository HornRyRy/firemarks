import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nickname, setNickname] = useState('')
    //const [error, setError] = useState('')
    
    const { createUser } = UserAuth()
    const navigate = useNavigate()

const handleSubmit = async (e) =>{
    e.preventDefault();
    await createUser(email, password)
    navigate('/account')
}

  return (
    <div>
      <h1>Signup Page</h1>
      <p>Already have an account? <Link to='/'>Log In</Link></p>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up Here!</h2>
        <div>
        <label>Email</label>
        <input
        placeholder="Email (for username)"
        type="text"
        name="email"
        value={email}
        onChange = {(e) => setEmail(e.target.value)} />
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
        {/* <div>
            <label>Nickname</label>
            <input
            placeholder="Nickname"
            type="type"
            name="nickname"
            value={""} />
        </div> */}
        <div>
            <input
            type="submit"
            value="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
