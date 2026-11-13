// WhyChooseUs.jsx

import "./WhyChooseUs.css";
import { Link } from "react-router-dom";

const benefits = [
  {
    id: 1,
    title: "Quality Agricultural Products",
    description:
      "We focus on quality seeds, healthy crops, and dependable agricultural solutions for better farming.",
  },
  {
    id: 2,
    title: "Farmer-Focused Solutions",
    description:
      "We help farmers make informed decisions with practical guidance and modern farming techniques.",
  },
  {
    id: 3,
    title: "Sustainable Farming",
    description:
      "We encourage responsible farming practices that support soil health and a greener future.",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12.5L9.5 17L19 7.5"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M12 5L19 12L12 19"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="25"
      height="25"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M27 5C15 5 6 10 6 20C6 24 9 27 13 27C23 27 27 16 27 5Z"
        fill="currentColor"
      />
      <path
        d="M5 28C10 19 16 14 24 9"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="broget-why-section">
      <div className="broget-why-container">
        {/* Left Image */}
        <div className="broget-why-visual">
          <div className="broget-why-image-wrapper">
            <img
              className="broget-why-image"
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85"
              alt="Green agricultural fields and farmland"
              loading="lazy"
            />

            <div className="broget-why-image-overlay" />

            <div className="broget-why-image-caption">
              <LeafIcon />
              <span>Growing a Greener Future</span>
            </div>
          </div>

          {/* Decorative Play Button */}
          <div
            className="broget-why-play-button"
            aria-hidden="true"
          >
            <span className="broget-why-play-outer">
              <span className="broget-why-play-inner">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M8 5L20 12L8 19V5Z" fill="currentColor" />
                </svg>
              </span>
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="broget-why-content">
          <div className="broget-why-eyebrow">
            <span className="broget-why-eyebrow-line" />
            <LeafIcon />
            <span>Why Choose Broget Agriculture?</span>
          </div>

          <h2 className="broget-why-heading">
            Growing Better Crops With
            <span> Smarter Agricultural Solutions</span>
          </h2>

          <p className="broget-why-description">
            At Broget Agriculture, we believe that successful farming starts
            with the right knowledge, quality resources, and reliable support.
            We work to empower farmers with practical agricultural solutions
            that improve productivity and promote sustainable farming.
          </p>

          <p className="broget-why-description broget-why-description-secondary">
            From modern farming techniques to responsible crop management, our
            goal is to help farmers grow with confidence while building a
            healthier and greener future.
          </p>

          <Link to="/AboutUs" className="broget-why-button">
            <span>Discover More About Us</span>
            <span className="broget-why-button-icon">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        {/* Bottom Benefits Panel */}
        <div className="broget-why-benefits">
          {benefits.map((benefit) => (
            <article
              className="broget-why-benefit"
              key={benefit.id}
            >
              <div className="broget-why-check">
                <CheckIcon />
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}