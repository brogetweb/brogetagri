
import { useState } from "react";
import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Government Schemes", href: "#projects" },
  { label: "Our Products", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];

const agricultureServices = [
  { label: "Agricultural Consultancy", href: "#consultancy" },
  { label: "Crop Management", href: "#crop-management" },
  { label: "Soil Health Solutions", href: "#soil-health" },
  { label: "Irrigation Solutions", href: "#irrigation" },
  { label: "Modern Farming", href: "#modern-farming" },
  { label: "Farmer Support", href: "#farmer-support" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubscribe(event) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    // Connect your newsletter API or backend here.
    setMessage("Thank you! Your email has been submitted.");
    setEmail("");
  }

  return (
    <footer className="agri-footer" id="contact">
      {/* Newsletter section */}
      <div className="agri-newsletter">
        <div className="newsletter-decoration newsletter-decoration-left">
          ❋
        </div>

        <div className="newsletter-content">
          <h2>
            Growing Agriculture,
            <br />
            Growing Your Future
          </h2>

          <p className="newsletter-description">
            Get the latest agriculture updates, farming tips,
            and information about government schemes.
          </p>

          <form
            className="newsletter-form"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email Address"
              aria-label="Email address"
              required
            />

            <button type="submit">
              <span>Subscribe</span>
              <span className="newsletter-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
          </form>

          {message && (
            <p className="newsletter-message" role="status">
              {message}
            </p>
          )}
        </div>

        <div className="newsletter-decoration newsletter-decoration-right">
          ❋
        </div>
      </div>

      {/* Footer content */}
      <div className="agri-footer-inner">
        <div className="footer-columns">
          {/* Working hours */}
          <div className="footer-hours">
            <h3>Working Hours</h3>

            <div className="hours-row">
              <strong>Mon – Fri:</strong>
              <span>9:30 AM – 6:00 PM</span>
            </div>

            <div className="hours-row">
              <strong>Saturday:</strong>
              <span>9:00 AM – 2:00 PM</span>
            </div>

            <div className="hours-row">
              <strong>Sunday:</strong>
              <span>Closed</span>
            </div>
          </div>

          {/* Company information */}
          <div className="footer-brand">
            <a className="footer-logo" href="#home">
              <span className="footer-logo-icon" aria-hidden="true">
                ❋
              </span>
              <span>Broget</span>
            </a>

            <p>
              Broget is dedicated to supporting farmers through
              innovative agricultural solutions, modern farming
              practices, and sustainable technologies. Our mission
              is to help build a productive, greener future for
              agriculture.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                ▶
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-link-group">
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Agriculture services */}
          <div className="footer-link-group">
            <h3>Our Services</h3>

            <ul>
              {agricultureServices.map((service) => (
                <li key={service.label}>
                  <a href={service.href}>{service.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Broget. All Rights Reserved.
          </p>

          <p className="footer-bottom-right">
            Growing Together <span>|</span> Powered by Broget pvt
          </p>
        </div>
      </div>

      {/* Back to top */}
      <a
        className="footer-back-to-top"
        href="#home"
        aria-label="Back to top"
      >
        ↑
      </a>
    </footer>
  );
}
