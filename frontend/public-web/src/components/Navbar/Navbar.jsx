
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const menuItems = [
  {
    name: "Pages",
    links: [
      { label: "About Us", to: "/AboutUs" },
      { label: "Government Schemes", to: "/Government-Schemes" },
      {
        label: "Business Ideas for Farmers",
        to: "/Business-Ideas-for-Farmers",
      },
      { label: "Our Team", to: "/OurTeam" },
      { label: "Testimonials", to: "/Testimonial" },
    ],
  },
];

function LogoMark() {
  return <></>;
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="cart-svg"
      fill="none"
      aria-hidden="true"
    >
      <text x="16" y="25" fontSize="25" textAnchor="middle">
        🌤️
      </text>
    </svg>
  );
}

export default function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Login status
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => Boolean(localStorage.getItem("token"))
  );

  // Close menus
  const closeMenus = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  // Update Navbar after login, registration or logout
  useEffect(() => {
    const updateAuthStatus = () => {
      setIsLoggedIn(Boolean(localStorage.getItem("token")));
    };

    window.addEventListener("authChanged", updateAuthStatus);
    window.addEventListener("storage", updateAuthStatus);

    // Check current login status
    updateAuthStatus();

    return () => {
      window.removeEventListener("authChanged", updateAuthStatus);
      window.removeEventListener("storage", updateAuthStatus);
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
    closeMenus();

    // Update Navbar immediately
    window.dispatchEvent(new Event("authChanged"));

    // Redirect to Home page
    navigate("/", { replace: true });
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((current) =>
      current === name ? null : name
    );
  };

  // Sticky Navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menus on Escape and outside click
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenus();
      }
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
      <div
        className={`header-spacer ${
          isScrolled ? "spacer-active" : ""
        }`}
      />

      <header
        className={`site-header ${
          isScrolled ? "header-fixed" : ""
        }`}
      >
        <div className="header-container">

          {/* Brand */}
          <Link to="/" className="brand" onClick={closeMenus}>
            <LogoMark />

            <span className="brand-name">
              <img
                src="/src/assets/images/logo.jpg"
                alt="Broget Agriculture"
              />
            </span>
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`menu-toggle ${
              menuOpen ? "is-open" : ""
            }`}
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
            className={`primary-navigation ${
              menuOpen ? "nav-open" : ""
            }`}
            aria-label="Main navigation"
          >
            <ul className="nav-list">

              <li className="nav-item home-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={closeMenus}
                >
                  Home
                </Link>
              </li>

              {menuItems.map((item) => (
                <li
                  className={`nav-item ${
                    activeDropdown === item.name
                      ? "dropdown-open"
                      : ""
                  }`}
                  key={item.name}
                >
                  <button
                    type="button"
                    className="nav-link dropdown-button"
                    aria-expanded={
                      activeDropdown === item.name
                    }
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <span className="chevron" />
                  </button>

                  <ul className="dropdown-menu">
                    {item.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          onClick={closeMenus}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <li className="nav-item contact-item">
                <Link
                  className="nav-link"
                  to="/Service"
                  onClick={closeMenus}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item contact-item">
                <Link
                  className="nav-link"
                  to="/Blog"
                  onClick={closeMenus}
                >
                  Blog
                </Link>
              </li>

              <li className="nav-item contact-item">
                <Link
                  className="nav-link"
                  to="/ContactUs"
                  onClick={closeMenus}
                >
                  Contact
                </Link>
              </li>

            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">

            <span className="header-divider" />

            {isLoggedIn ? (
              <button
                type="button"
                className="hero-btn hero-btn-secondary"
                onClick={handleLogout}
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/LogIn"
                className="hero-btn hero-btn-secondary"
                onClick={closeMenus}
              >
                Log In
              </Link>
            )}

          </div>
        </div>
      </header>
    </>
  );
}
