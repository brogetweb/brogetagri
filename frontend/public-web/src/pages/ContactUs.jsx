
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AllPagesBanner from "../components/Banner/AllPagesBanner";
import contactBanner from "../assets/images/Home-Banner/1.png";
import { API_BASE_URL } from "../config/api";
import "./ContactUs.css";

const ContactUs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    support: "",
    message: "",
    agree: true,
  });

  const [loading, setLoading] = useState(false);

  const [submitMessage, setSubmitMessage] = useState({
    type: "",
    text: "",
  });

  // Handle form fields
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setSubmitMessage({ type: "", text: "" });
  };

  // Handle contact form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.agree) {
      setSubmitMessage({
        type: "error",
        text: "Please agree to the terms and conditions.",
      });
      return;
    }

    // Check login token
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/LogIn", {
        replace: true,
        state: {
          message:
            "Please log in to your Broget Agriculture account before submitting your enquiry.",
          type: "error",
        },
      });
      return;
    }

    try {
      setLoading(true);
      setSubmitMessage({ type: "", text: "" });

      const response = await fetch(
        `${API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            message: `Support Required: ${formData.support}\n\n${formData.message}`,
          }),
        }
      );

      const data = await response.json();

      // Handle expired or invalid login session
      if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.dispatchEvent(new Event("authChanged"));

        navigate("/LogIn", {
          replace: true,
          state: {
            message:
              "Your login session has expired. Please log in again to submit your enquiry.",
            type: "error",
          },
        });

        return;
      }

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to submit your enquiry."
        );
      }

      // Successful submission
      setSubmitMessage({
        type: "success",
        text:
          data.message ||
          "Your enquiry has been submitted successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        support: "",
        message: "",
        agree: true,
      });
    } catch (error) {
      console.error("Contact form submission error:", error);

      setSubmitMessage({
        type: "error",
        text:
          error.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* CONTACT PAGE BANNER */}
      <AllPagesBanner
        title="Contact Us"
        backgroundImage={contactBanner}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <div className="contact-container">

          {/* LEFT COLUMN */}
          <div className="contact-left">

            {/* GOOGLE MAP */}
            <div className="contact-map">
              <iframe
                title="Broget Agriculture location map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3752.1665976913887!2d75.33829607499882!3d19.875185981501012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDUyJzMwLjciTiA3NcKwMjAnMjcuMSJF!5e0!3m2!1sen!2sin!4v1792737948244!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />

              <a
                className="map-open-link"
                href="https://www.google.com/maps/search/?api=1&query=Prinsengracht+250+Amsterdam+Netherlands"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps ↗
              </a>
            </div>

            {/* CONTACT DETAILS */}
            <div className="contact-details-box">
              <div className="contact-details-inner">

                {/* ADDRESS */}
                <div className="contact-detail-item">
                  <div className="contact-detail-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2.5a7 7 0 0 0-7 7c0 5.1 7 12 7 12s7-6.9 7-12a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                    </svg>
                  </div>

                  <div className="contact-detail-content">
                    <h3>Address</h3>
                    <p>
                      Prinsengracht 890, 00000000 PM Amsterdam
                      <br />
                      Sambhajinagar
                      <br />
                      Pin Code : 431111
                    </p>
                  </div>
                </div>

                {/* EMAIL AND PHONE */}
                <div className="contact-detail-item">
                  <div className="contact-detail-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm6 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 11v2h10v-2a5 5 0 0 0-10 0Z" />
                    </svg>
                  </div>

                  <div className="contact-detail-content">
                    <h3>Contact Us</h3>
                    <p>
                      <a href="mailto:abcd@gmail.com">
                        abcd@gmail.com
                      </a>
                      <br />
                      <span>Call Us 24/7: </span>
                      <a href="tel:+12165678909">
                        +1 216 567 8909
                      </a>
                    </p>
                  </div>
                </div>

                {/* WORKING HOURS */}
                <div className="contact-detail-item">
                  <div className="contact-detail-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v4.6l3.2 1.9-1 1.7-4.2-2.6V7h2Z" />
                    </svg>
                  </div>

                  <div className="contact-detail-content">
                    <h3>Working Hours</h3>
                    <p>
                      Mon - Fri: 9.30am - 6.00pm
                      <br />
                      Sat: 9.00am - 17.00pm
                      <br />
                      Holidays: Closed
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="contact-form-box">
            <div className="contact-form-heading">
              <span className="contact-subtitle">
                Let's Cooperate Together
              </span>

              <h1>Contact Us Today!</h1>

              <p>
                We will reply to you within 24 hours via email.
                Thank you for contacting us.
              </p>

              <div className="contact-leaf-decoration" aria-hidden="true">
                <svg viewBox="0 0 110 20">
                  <path d="M0 10h110" />
                  <path d="M25 10C16 0 10 1 6 5c7 1 12 3 19 5Z" />
                  <path d="M37 10C29 0 24 0 19 4c7 2 12 4 18 6Z" />
                  <path d="M49 10C42 0 37 0 32 4c7 2 12 4 17 6Z" />
                  <path d="M61 10C55 0 50 1 45 4c6 2 11 4 16 6Z" />
                  <path d="M73 10C68 1 63 1 58 4c6 3 10 5 15 6Z" />
                  <path d="M85 10C81 2 76 2 71 5c5 2 9 4 14 5Z" />
                  <path d="M25 10C16 20 10 19 6 15c7-1 12-3 19-5Z" />
                  <path d="M37 10C29 20 24 20 19 16c7-2 12-4 18-6Z" />
                  <path d="M49 10C42 20 37 20 32 16c7-2 12-4 17-6Z" />
                  <path d="M61 10C55 20 50 19 45 16c6-2 11-4 16-6Z" />
                  <path d="M73 10C68 19 63 19 58 16c6-3 10-5 15-6Z" />
                  <path d="M85 10C81 18 76 18 71 15c5-2 9-4 14-5Z" />
                </svg>
              </div>
            </div>

            {/* CONTACT FORM */}
            <form className="contact-form" onSubmit={handleSubmit}>

              {submitMessage.text && (
                <div
                  className={`contact-alert ${submitMessage.type}`}
                  role="alert"
                >
                  {submitMessage.text}
                </div>
              )}

              <div className="contact-input-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  aria-label="Name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  aria-label="Email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  aria-label="Phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <select
                  name="support"
                  aria-label="What do you need support with?"
                  value={formData.support}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    You need support with?
                  </option>

                  <option value="Agricultural Services">
                    Agricultural Services
                  </option>

                  <option value="Government Schemes">
                    Government Schemes
                  </option>

                  <option value="Crop Information">
                    Crop Information
                  </option>

                  <option value="General Enquiry">
                    General Enquiry
                  </option>

                  <option value="Other">Other</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Message..."
                aria-label="Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />

              <div className="contact-form-bottom">
                <label className="contact-terms">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                  />

                  <span
                    className="contact-custom-check"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <span>Agree to our terms and conditions</span>
                </label>

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={loading}
                >
                  <span>
                    {loading ? "Submitting..." : "Send Message"}
                  </span>

                  {!loading && (
                    <span
                      className="contact-submit-arrow"
                      aria-hidden="true"
                    >
                      ›
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactUs;
