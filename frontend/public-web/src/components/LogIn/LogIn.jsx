
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./LogIn.css";



const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
  email: "",
  password: "",
  role: "farmer",
});

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  // Handle login submission
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      formData
    );

    const user = response.data.user;
    const token = response.data.token;

    // Save login session
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    // Update Navbar immediately
    window.dispatchEvent(new Event("authChanged"));

    // Your existing navigation logic goes here

  } catch (error) {
    console.error("Login error:", error);
  }
};
  return (
    <section className="broget-login-section">
      <div className="broget-login-container">

        {/* Heading */}
        <div className="broget-login-heading">
          <h2>Welcome Back to Broget Agriculture</h2>

          <p>
            Login to your account and stay connected with
            smarter farming solutions. Access agricultural
            services, farming resources, and opportunities
            designed to help you grow.
          </p>
        </div>

        {/* Login Form */}
        <form
          className="broget-login-form"
          onSubmit={handleSubmit}
        >

          {/* Email */}
          <div className="broget-login-field">
            <input
              type="text"
              name="email"
              placeholder="Email Address / Mobile Number"
              value={formData.email}
              onChange={handleChange}
              autoComplete="username"
              required
            />
          </div>

          {/* Password */}
          <div className="broget-login-field broget-password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />

            <button
              type="button"
              className="broget-password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
            >
              {showPassword ? (
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 3L21 21M10.6 10.6A2 2 0 0013.4 13.4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.9 5.2A10.8 10.8 0 0112 5
                    c5.5 0 9 7 9 7a15 15 0 01-3.1 3.8
                    M6.2 6.2C4.1 7.6 3 12 3 12s3.5 7 9 7
                    c1.2 0 2.3-.3 3.3-.8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 12S6.5 5 12 5s9 7 9 7-3.5 7-9 7-9-7-9-7Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              )}
            </button>
          </div>

 <div className="broget-login-field">
  <select
    name="role"
    value={formData.role}
    onChange={handleChange}
    required
  >
    <option value="farmer">Login as Farmer</option>
    <option value="admin">Login as Admin</option>
  </select>
</div>

          {/* Error Message */}
          {error && (
            <div className="broget-login-error" role="alert">
              {error}
            </div>
          )}

          {/* Remember Me & Forgot Password */}
          <div className="broget-login-options">

            <label className="broget-remember-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) =>
                  setRememberMe(e.target.checked)
                }
              />

              <span className="broget-custom-checkbox"></span>
              Remember Me
            </label>

            <Link to="/forgot-password">
              Forgot Password?
            </Link>

          </div>

          {/* Bottom Action */}
          <div className="broget-login-bottom">

            <div className="broget-login-tagline">
              <span className="broget-login-check">✓</span>
              <span>Purity In Every Grain</span>
            </div>

            <button
              type="submit"
              className="broget-login-submit"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login Now"}
            </button>

          </div>
        </form>

        {/* Register Link */}
        <div className="broget-login-register">
          Don't have an account?
          <Link to="/Register"> Create Account </Link>
        </div>

      </div>
    </section>
  );
};

export default LogIn;
