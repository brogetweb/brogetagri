import { useState } from "react";
import { Link } from "react-router-dom";
import "./AllPagesBanner.css";

const DEFAULT_BANNER_IMAGE =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=85";

function AllPagesBanner({
  title = "Our Services",
  subtitle = "What Services Do We Provide?",
  backgroundImage,
  breadcrumbs,
}) {
  const [imageSrc, setImageSrc] = useState(
    backgroundImage || DEFAULT_BANNER_IMAGE
  );

  const handleImageError = () => {
    if (imageSrc !== DEFAULT_BANNER_IMAGE) {
      setImageSrc(DEFAULT_BANNER_IMAGE);
    }
  };

  const defaultBreadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Our Services", path: "/services" },
    { label: title },
  ];

  const breadcrumbItems = breadcrumbs || defaultBreadcrumbs;

  return (
    <section className="all-pages-banner">
      <img
        className="all-pages-banner__image"
        src={imageSrc}
        alt=""
        aria-hidden="true"
        onError={handleImageError}
      />

      <div className="all-pages-banner__overlay" />

      <div className="all-pages-banner__container">
        <div className="all-pages-banner__content">
          <p className="all-pages-banner__subtitle">{subtitle}</p>

          <h1 className="all-pages-banner__title">{title}</h1>

          <div className="all-pages-banner__underline">
            <span />
          </div>

          <nav
            className="all-pages-banner__breadcrumbs"
            aria-label="Breadcrumb"
          >
            {breadcrumbItems.map((item, index) => (
              <span
                className="all-pages-banner__breadcrumb-item"
                key={`${item.label}-${index}`}
              >
                {index > 0 && (
                  <span
                    className="all-pages-banner__arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}

                {item.path && index !== breadcrumbItems.length - 1 ? (
                  <Link to={item.path}>{item.label}</Link>
                ) : (
                  <span aria-current="page">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      <div className="all-pages-banner__bottom-decoration" aria-hidden="true">
        <span>✳</span>
        <span>✳</span>
        <span>✳</span>
        <span>✳</span>
        <span>✳</span>
      </div>
    </section>
  );
}

export default AllPagesBanner;