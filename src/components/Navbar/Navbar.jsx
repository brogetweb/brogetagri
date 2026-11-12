
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AllButtons from "../AllButtons";

const menuItems = [
  {
    name: "Pages",
    links: [
      { label: "About Us", to: "/AboutUs" },
      { label: "Government Schemes", to: "/Government-Schemes" },
      { label: "Business Ideas for Farmers", to: "/Business-Ideas-for-Farmers" },
      { label: "Our Team", to: "/OurTeam" },
      { label: "Testimonials", to: "/Testimonial" },
      // { label: "BuilderDemo", to: "/BuilderDemo" }
    ],
  },
];

function LogoMark() {
  return <></>;
}

function CartIcon() {
  return (
    <svg viewBox="0 0 32 32" className="cart-svg" fill="none" aria-hidden="true">
      <text x="16" y="25" fontSize="25" textAnchor="middle">
        🌤️
      </text>
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((current) =>
      current === name ? null : name
    );
  };

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menus on Escape and outside click
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenus();
    };

    const handleOutsideClick = (event) => {
      if (!event.target.closest(".site-header")) {
        closeMenus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* Header spacing when navbar becomes fixed */}
      <div className={`header-spacer ${isScrolled ? "spacer-active" : ""}`} />

      <header className={`site-header ${isScrolled ? "header-fixed" : ""}`}>
        <div className="header-container">

          {/* Brand */}
          <Link to="/" className="brand" onClick={closeMenus}>
            <LogoMark />
            <span className="brand-name">
              <img src="/src/assets/images/logo.jpg" alt="Broget Agriculture" />
            </span>
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Navigation */}
          <nav
            id="primary-navigation"
            className={`primary-navigation ${menuOpen ? "nav-open" : ""}`}
            aria-label="Main navigation"
          >
            <ul className="nav-list">

              <li className="nav-item home-item">
                <Link className="nav-link" to="/" onClick={closeMenus}>
                  Home
                </Link>
              </li>

              {menuItems.map((item) => (
                <li
                  className={`nav-item ${
                    activeDropdown === item.name ? "dropdown-open" : ""
                  }`}
                  key={item.name}
                >
                  <button
                    type="button"
                    className="nav-link dropdown-button"
                    aria-expanded={activeDropdown === item.name}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <span className="chevron" />
                  </button>

                  <ul className="dropdown-menu">
                    {item.links.map((link) => (
                      <li key={link.label}>
                        <Link to={link.to} onClick={closeMenus}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <li className="nav-item contact-item">
                <Link className="nav-link" to="/Service" onClick={closeMenus}>
                  Services
                </Link>
              </li>

              <li className="nav-item contact-item">
                <Link className="nav-link" to="/Blog" onClick={closeMenus}>
                  Blog
                </Link>
              </li>

              <li className="nav-item contact-item">
                <Link className="nav-link" to="/ContactUs" onClick={closeMenus}>
                  Contact
                </Link>
              </li>

            </ul>
          </nav>

          {/* Cart and CTA */}
          <div className="header-actions">
            <a
  href="https://api.openweathermap.org/data/2.5/weather?q=Aurangabad&appid=YOUR_API_KEY&units=metric"
  className="cart-link"
  aria-label="Check Aurangabad weather"
  target="_blank"
  rel="noopener noreferrer"
>
  <CartIcon />
</a>

            <span className="header-divider" />

            <AllButtons
              variant="lime"
              size="medium"
              href="#get-started"
              className="cta-button"
            >
              Start Growing Now
            </AllButtons>
          </div>

        </div>
      </header>
    </>
  );
}
