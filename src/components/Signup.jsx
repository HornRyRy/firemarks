import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1>Signup Page</h1>
      <p>Already have an account? <Link to='/'>Log In</Link></p>
      <form>
        <h2>Sign Up Here!</h2>
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
            <label>Nickname</label>
            <input
            placeholder="Nickname"
            type="type"
            name="nickname"
            value={""} />
        </div>
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
