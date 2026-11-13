
import { Link } from "react-router-dom";
import AllPagesBanner from "../components/Banner/AllPagesBanner";
import servicesBanner from "../assets/images/Home-Banner/1.png";

import "./Service.css";

/* =========================================
   EXISTING SERVICE PAGE
========================================= */

const Service = () => {
  const benefits = [
    "Modern farming techniques for better productivity",
    "Expert agricultural guidance and consultation",
    "Quality seeds, fertilizers, and crop solutions",
    "Smart irrigation and water management",
    "Sustainable and eco-friendly farming practices",
  ];

  return (
    <>
      {/* Page Banner */}
      <AllPagesBanner
        title="Our Services"
        backgroundImage={servicesBanner}
      />

      {/* Existing Agriculture Introduction */}
      <section className="broget-agree-service">
        <div className="broget-agree-service-container">

          {/* Agriculture Image */}
          <div className="bro-agree-service-image-wrapper">
            <img
              className="broget-agree-service-image"
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85"
              alt="Green agricultural farmland"
              loading="lazy"
            />

            <div className="broget-agree-organic-badge">
              <span className="broget-agree-badge-percent">
                100%
              </span>

              <span className="broget-agree-badge-text">
                AGRICULTURE
              </span>

              <span
                className="broget-agree-badge-leaf"
                aria-hidden="true"
              >
                🌿
              </span>
            </div>
          </div>

          {/* Agriculture Content */}
          <div className="broget-agree-service-content">
            <div className="broget-agree-service-eyebrow">
              <span
                className="broget-agree-service-decoration"
                aria-hidden="true"
              >
                ❧
              </span>

              <span>Our Commitment To Agriculture</span>
            </div>

            <h2 className="broget-agree-service-title">
              We Provide The Best Agricultural Services For Farmers
            </h2>

            <p className="broget-agree-service-description">
              At Broget Agriculture, we support farmers with reliable
              agricultural solutions, modern farming methods, and
              expert guidance. Our mission is to improve crop
              productivity, promote sustainable farming, and help
              farmers achieve better results.
            </p>

            <ul className="broget-agree-service-benefits">
              {benefits.map((benefit, index) => (
                <li
                  className="broget-agree-service-benefit"
                  key={index}
                >
                  <span
                    className="broget-agree-benefit-check"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/AgricultureServices"
              className="broget-agree-service-button"
            >
              <span>Explore Our Services</span>

              <span
                className="broget-agree-button-arrow"
                aria-hidden="true"
              >
                ›
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* New Services Explore Section */}
      <MainServicesExplore />
    </>
  );
};

/* =========================================
   MAIN SERVICES EXPLORE COMPONENT
========================================= */

export const MainServicesExplore = () => {
  const services = [
    {
      id: 1,
      title: "Digital Farming",
      description:
        "Make smarter farming decisions with digital tools, field monitoring, and data-driven crop planning.",
      image:
        "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=85",
      alt: "Green agricultural fields",
    },
    {
      id: 2,
      title: "Contract Farming",
      description:
        "Build reliable farming partnerships with planned production, quality standards, and better market access.",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=85",
      alt: "Agricultural crops ready for harvest",
    },
    {
      id: 3,
      title: "Drone Farming",
      description:
        "Support precision agriculture with drone-based crop monitoring, field analysis, and spraying solutions.",
      image:
        "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?auto=format&fit=crop&w=1200&q=85",
      alt: "Drone technology for agriculture",
    },
    {
      id: 4,
      title: "Smart Irrigation",
      description:
        "Improve water efficiency with modern irrigation techniques designed to support healthy crop growth.",
      image:
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=85",
      alt: "Farmland with growing crops",
    },
    {
      id: 5,
      title: "Soil Testing",
      description:
        "Understand soil health and nutrient requirements to make informed decisions about fertilizers and crop planning.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
      alt: "Agricultural farmland and soil",
    },
    {
      id: 6,
      title: "Seed & Crop Solutions",
      description:
        "Choose suitable seeds and crop solutions to support healthy growth, better crop quality, and productivity.",
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=85",
      alt: "Growing crops in a green field",
    },
    {
      id: 7,
      title: "Farm Mechanization",
      description:
        "Make farm operations more efficient with modern agricultural machinery and equipment solutions.",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85",
      alt: "Agricultural landscape and farming operations",
    },
    {
      id: 8,
      title: "Crop Protection",
      description:
        "Protect crop health through integrated pest management, disease monitoring, and responsible crop care.",
      image:
        "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=85",
      alt: "Healthy green crops",
    },
    {
      id: 9,
      title: "Organic Farming",
      description:
        "Encourage sustainable farming through responsible soil management and environmentally conscious growing practices.",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=1200&q=85",
      alt: "Fresh agricultural produce",
    },
    {
      id: 10,
      title: "Market Linkage",
      description:
        "Help farmers explore market opportunities, connect with buyers, and plan their produce sales more effectively.",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=85",
      alt: "Agricultural harvest and farm produce",
    },
  ];

  return (
    <section className="main-services-explore">
      <div className="main-services-explore-container">

        {/* Section Heading */}
        <div className="main-services-explore-heading">
          <span className="main-services-explore-eyebrow">
            WHAT WE OFFER
          </span>

          <h2>
            Innovative Services for{" "}
            <span>Modern Agriculture</span>
          </h2>

          <p>
            Discover practical, technology-driven farming solutions
            designed to help farmers grow better crops, use resources
            wisely, and build a more sustainable future.
          </p>
        </div>

        {/* Responsive Services Grid */}
        <div className="main-services-explore-grid">
          {services.map((service) => (
            <article
              className="main-services-explore-card"
              key={service.id}
            >
              {/* Service Image */}
              <img
                className="main-services-explore-image"
                src={service.image}
                alt={service.alt}
                loading="lazy"
              />

              {/* Plus Icon */}
              <div
                className="main-services-explore-plus"
                aria-hidden="true"
              >
                +
              </div>

              {/* Card Content */}
              <div className="main-services-explore-overlay">
                <div className="main-services-explore-card-content">
                  <span className="main-services-explore-number">
                    SERVICE{" "}
                    {String(service.id).padStart(2, "0")}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                 <Link
  to="/ServiceDetailePage"
  className="main-services-explore-button"
  aria-label={`Learn more about ${service.title}`}
>
  <span>Learn More</span>

  <span
    className="main-services-explore-button-arrow"
    aria-hidden="true"
  >
    ↗
  </span>
</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
