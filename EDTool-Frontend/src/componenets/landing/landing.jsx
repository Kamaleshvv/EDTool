// src/Home.js
import React from 'react';
import './landing.css';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
      navigate("/signin");
    }
    return (
        <div className="home-container">
        <div className="navbar">
            <div className="navbar-left">
                <h1>ED Tool</h1>
            </div>
            <div className="navbar-right">
                <button onClick={handleLogin} className="login-button">Login</button>
            </div>
        </div>
        <div className="content">
            <h3>Understanding Encryption and Decryption</h3>
            <p>
                Encryption is a process that transforms data into a secure format that is unreadable to unauthorized users. 
                This process involves using an algorithm and a key to convert the original information, known as plaintext, 
                into an unreadable format, called ciphertext. Encryption ensures that sensitive information is protected 
                and can only be accessed by those with the correct decryption key.
            </p>
            <h4>How Encryption Works</h4>
            <p>
                Encryption works by applying a mathematical algorithm to the plaintext data along with an encryption key. 
                This algorithm scrambles the data, making it unreadable to anyone who does not have the corresponding decryption key. 
                The strength of the encryption depends on the complexity of the algorithm and the length of the key used.
            </p>
            <h4>Understanding Decryption</h4>
            <p>
                Decryption is the process of converting the encrypted data (ciphertext) back into its original format (plaintext). 
                This process requires a decryption key, which is usually kept secret to prevent unauthorized access to the sensitive information. 
                Only those with the correct decryption key can successfully decrypt and read the original data.
            </p>
            <h4>Importance of Encryption and Decryption</h4>
            <p>
                Encryption and decryption are crucial for maintaining the confidentiality and integrity of sensitive information. 
                They are widely used in various applications, including:
            </p>
            <ul>
                <li>Secure communications</li>
                <li>Online transactions</li>
                <li>Data storage</li>
            </ul>
            <p>
                By encrypting data, organizations can protect sensitive information from cyber threats, ensuring that only authorized individuals can access it.
            </p>
         </div>
        </div>
    );  
};
export default Landing;

