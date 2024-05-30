import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import styles from "./body.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function SignInSignUpContainer() {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate(); //navigate hook

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className={styles["body"]}>
      <div className="signin-signup-container">
        {isSignIn ? (
          <SignInForm
            // Handle sign-in logic here
            onAuthenticated={async (email, password) => {
              console.log("Sign in:", email, password);
              const response = await axios.post("http://localhost:8080/user/login", {
                email: email,
                password: password
              });

              if(response.data) {
                Swal.fire("Login Successful", " ", "success");
                localStorage.setItem("currentUser",response.data.name);
                navigate("/home");
              }
              else {
                Swal.fire("Login Unsuccessful", "Invalid Login Credentials", "failure");
              }
            }}
          />
        ) : (
          <SignUpForm
            onAuthenticated={async (name, email, password) => {
              console.log("Sign up:", name, email, password);
              // Handle sign-up logic here
              const response = await axios.post("http://localhost:8080/user/register", {
                name: name,
                email: email,
                password: password
              });
              if(response.data!=="User already exists. Login with the same email")
                Swal.fire("Account Creation successful", "You can now sign-in with your mail", "success");
              else
                Swal.fire("Account Creation unsuccessful", "Participant already exists. Sign in instead", "error");
            }}
          />
        )}

        <div className={`overlay ${isSignIn ? "left" : "right"}`}>
          <div className="overlay-panel">
            <h1>{isSignIn ? "Hello, User!" : "Welcome Back!"}</h1>
            <p>
              {isSignIn
                ? "If you are a new user, enter your personal details and start your journey with us."
                : "To keep connected with us please login with your personal info."}
            </p>
            <button  onClick={toggleForm}>
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInSignUpContainer;
