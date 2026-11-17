
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "farmer",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Message received from Login page
  const [notice, setNotice] = useState(
    location.state?.message || ""
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setNotice("");
  };

  // Handle registration
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
          role: formData.role,
        }
      );

      // Registration successful
      // Do NOT save token or user here.
      // User must log in separately.

      navigate("/LogIn", {
        replace: true,
        state: {
          message:
            response.data.message ||
            "Registration successful! Please log in with your new account.",
          type: "success",
        },
      });

    } catch (err) {
      console.error("Registration error:", err);

      setError(
        err.response?.data?.message ||
        err.message ||
        "Registration failed. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">

        <div className="register-header">
          <h2>Create Your Broget Agriculture Account</h2>

          <p>
            Join Broget Agriculture and stay connected with smarter
            farming solutions, agricultural services, resources,
            and opportunities designed to help you grow.
          </p>
        </div>

        {/* Message from Login page */}
        {notice && (
          <div className="register-notice" role="status">
            {notice}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="register-error" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="register-form">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password (Minimum 8 Characters)"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            minLength={8}
            required
          />

          <div className="register-role">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              aria-label="Account type"
              required
            >
              <option value="farmer">Register as Farmer</option>
              <option value="admin">Register as Admin</option>
            </select>
          </div>

          {formData.role === "owner" && (
            <p className="register-owner-notice">
              Owner accounts require Super Admin approval.
              Your application will remain under review until
              it is approved.
            </p>
          )}

          <div className="register-bottom">

            <div className="register-tagline">
              <span className="register-check">✓</span>
              <span>Purity In Every Grain</span>
            </div>

            <button
              type="submit"
              className="register-submit"
              disabled={loading}
            >
              {loading ? "Registering..." : "Create Account"}
            </button>

          </div>

        </form>

        <div className="register-login-link">
          Already have an account?{" "}
          <Link to="/LogIn">Login Now</Link>
        </div>

      </div>
    </div>
  );
}

export default Register;
