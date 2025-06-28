import { useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './LoginSignup.css';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [role, setRole] = useState("customer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="background"></div> 

      <div className="login-signup-page">
        <div className="left-section">
          <h1>Fast. Secure. Reliable.</h1>
          <p>Welcome to <b>SmartShip</b> – your trusted delivery partner.</p>
          <ul>
            <li>📦 Track and manage your deliveries in real time.</li>
            <li>⚡ Delivery agents get instant task notifications.</li>
            <li>🌍 Serving all major cities with optimized routes.</li>
          </ul>
          <p>Not on board yet?</p>
          <button onClick={() => setAction("Sign Up")}>Join Now</button>
        </div>

        <div className="right-section">
          <h2>{action === "Login" ? "Sign In" : "Sign Up"}</h2>
          <div className="form">
            {action === "Sign Up" && (
              <>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <select
                  className="input"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="customer">Customer</option>
                  <option value="agent">Delivery Agent</option>
                </select>
              </>
            )}

            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {action === "Login" && (
              <div className="forgot-password">
                Forgot password? <span>Click here</span>
              </div>
            )}

            <button className="submit-btn">
              {action === "Login" ? "LOGIN" : "REGISTER"}
            </button>

            <div className="social-login">
              Or Sign in with social platforms
              <div className="icons">
                <FaFacebookF className="icon" />
                <FaTwitter className="icon" />
                <FaGoogle className="icon" />
                <FaLinkedinIn className="icon" />
              </div>
            </div>

            <div className="toggle-action">
              {action === "Login" ? (
                <p>Don't have an account? <span onClick={() => setAction("Sign Up")}>Sign Up</span></p>
              ) : (
                <p>Already have an account? <span onClick={() => setAction("Login")}>Login</span></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;