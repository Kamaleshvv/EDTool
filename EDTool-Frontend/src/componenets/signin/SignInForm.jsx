import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import React, { useState } from "react";
import "./signin.css";
function SignInForm({ onAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onAuthenticated(email, password);
  };

  return (
    <div className="form-container left">
      <form onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> 
        {error && <p className="error">{error}</p>}
        <button className="button" type="submit">Sign In</button>
      </form>
      <div className="SsoIcons">
        <Link className="google">
          <FaGoogle />
        </Link>
        <Link className="Github">
          <FaGithub />
        </Link>
      </div>
    </div>
  );
}

export default SignInForm;
