import React, { useState } from "react";
import "./signin.css";
import Swal from "sweetalert2";

function SignUpForm({ onAuthenticated }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  
  const validateForm = () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if(password.length>=8 && '/[a-z]/'.test(password) && '/[A-Z]/'.test(password) && '/\d/'.test(password) && '/[^A-Za-z0-9]/'.test(password)) {
      setError("");
      return true;
    }
    
    setError("Please enter a strong password");
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!validateForm())
      return;
    
    if(password===confirm)
       onAuthenticated(name, email, password);
    else
      Swal.fire("Confirm Password mismatch", "Oops! Looks like your passwords don't match. Double-check and try again!", "error")
    console.log({ email, password });
  };

  return (
    <div className="form-container right">
      <form onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          value={confirm}
          required
          onChange={(e) => setConfirm(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button className="button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;