
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "farmer",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

      const registeredUser = response.data.user;
      const token = response.data.token;

      if (!registeredUser || !token) {
        throw new Error("Registration response is incomplete.");
      }

      // Save authenticated session
      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify(registeredUser)
      );

      // Update Navbar immediately
      window.dispatchEvent(new Event("authChanged"));

      // Redirect according to account type
      if (registeredUser.role === "owner") {
        if (registeredUser.approvalStatus === "approved") {
          alert("Your owner account is approved.");
          navigate("/owner-dashboard", { replace: true });
        } else {
          alert(
            "Registration successful! Your application is under review. We will update you within 24 hours."
          );

          navigate("/owner-application-status", {
            replace: true,
          });
        }
      } else {
        alert("Registration successful!");
        navigate("/", { replace: true });
      }
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
          <Link to="/login">Login Now</Link>
        </div>

      </div>
    </div>
  );
}

export default Register;
