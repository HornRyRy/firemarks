import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <p>Already have an account? <Link to='/'>Log In</Link></p>
    </div>
  );
};

export default Signup;
