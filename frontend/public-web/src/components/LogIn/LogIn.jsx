
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../config/api";
import "./LogIn.css";

const LogIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "farmer",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  // Handle login submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        formData
      );

      const user = response.data.user;
      const token = response.data.token;

      if (!user || !token) {
        throw new Error("Invalid login response from server.");
      }

      // Save login session
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Update Navbar immediately
      window.dispatchEvent(new Event("authChanged"));

      // Show success message
      setSuccess("Login successful! Redirecting to Home page...");

      // Redirect to Home page
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1500);

    } catch (err) {
      console.error("Login error:", err);

      const status = err.response?.status;
      const message =
        err.response?.data?.message ||
        "Login failed. Please check your details and try again.";

      const lowerMessage = message.toLowerCase();

      // Check whether the user has registered
      const isNotRegistered =
        status === 404 ||
        lowerMessage.includes("not registered") ||
        lowerMessage.includes("user not found") ||
        lowerMessage.includes("no account found") ||
        lowerMessage.includes("account does not exist");

      if (isNotRegistered) {
        // Redirect to Register page with a message
        navigate("/Register", {
          replace: true,
          state: {
            message:
              "You are not registered yet. Please create your Broget Agriculture account.",
          },
        });
      } else {
        // Show incorrect password or other login error
        setError(message);
      }

    } finally {
      setLoading(false);
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

          {/* Role Selection */}
          <div className="broget-login-field">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="farmer">Login as Farmer</option>
              <option value="buyer">Login as Buyer</option>
              <option value="agricultureExpert">Login as Agriculture Expert</option>
              <option value="admin">Login as Admin</option>
            </select>
          </div>

          {/* Error Message */}
          {error && (
            <div className="broget-login-error" role="alert">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="broget-login-success" role="status">
              {success}
            </div>
          )}

          {/* Remember Me & Forgot Password */}
          <div className="broget-login-options">
            <label className="broget-remember-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
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
