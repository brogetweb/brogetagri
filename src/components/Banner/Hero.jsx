import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Hero.css";
import AllButtons from "../AllButtons";


export default function Hero() {
  const [showFloatingButtons, setShowFloatingButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButtons(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Full-width hero section */}
      <section className="hero-section" id="home">
        <div className="hero-overlay" />

        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tagline">
              Nature-Friendly Living Starts Here
            </span>

            <h1>
              Grow It Yourself —
              <br className="desktop-break" />
              The Organic Way
            </h1>

            <p className="hero-description">
              Welcome to Orgaanic your trusted partner in home-based
              agriculture. Whether it’s a balcony garden or a backyard
              farm, we make it easy
            </p>

            <div className="hero-buttons">
              <a href="#">

<AllButtons
  variant="lime"
  size="large"
  href="#get-started"
>
  Get Started Now
</AllButtons>              </a>

              <Link to="/ContactUs" className="hero-btn hero-btn-secondary">
  Contact Us
</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating buttons visible after scrolling */}
      <div
        className={`floating-actions ${
          showFloatingButtons ? "floating-actions-visible" : ""
        }`}
        aria-hidden={!showFloatingButtons}
      >
        <a
          href="#get-started"
          className="hero-btn hero-btn-primary floating-cta"
          tabIndex={showFloatingButtons ? 0 : -1}
        >
          Get Started Now
        </a>

        <a
          href="#contact"
          className="hero-btn hero-btn-secondary floating-contact"
          tabIndex={showFloatingButtons ? 0 : -1}
        >
          Contact Us
        </a>

        <button
          type="button"
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          tabIndex={showFloatingButtons ? 0 : -1}
        >
          ↑
        </button>
      </div>
    </>
  );
}

// export default Hero;
