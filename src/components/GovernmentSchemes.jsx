
import { useState } from "react";
import "./GovernmentSchemes.css";
import AllButtons from "./AllButtons";
import GovernmentSchemesMain from "../pages/Government-Schemes";


const projects = [
 {
    id: 1,
    title: "PM-KISAN Samman Nidhi",
    description:
      "Provides eligible farmer families with ₹6,000 annually through direct bank transfers in three installments.",
    image: new URL("../assets/images/Govern-schems/1.jpg", import.meta.url).href,
    imageAlt: "Farmers inspecting healthy crops",
  },
  {
    id: 2,
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description:
      "Protects eligible farmers against specified crop losses caused by natural calamities, pests, and diseases.",
    image: new URL("../assets/images/Govern-schems/2.jpg", import.meta.url).href,
    imageAlt: "Farmers planning crop protection",
  },
  {
    id: 3,
    title: "Kisan Credit Card (KCC)",
    description:
      "Helps farmers access timely agricultural credit for crop cultivation, farm inputs, post-harvest expenses, and related activities.",
    image: new URL("../assets/images/Govern-schems/1.jpg", import.meta.url).href,
    imageAlt: "Farmer working with agricultural crops",
  },
  {
    id: 4,
    title: "Pradhan Mantri Krishi Sinchayee Yojana",
    description:
      "Promotes improved irrigation facilities and efficient water management to help farmers increase agricultural productivity and save water.",
    image: new URL("../assets/images/Govern-schems/2.jpg", import.meta.url).href,
    imageAlt: "Healthy crops receiving irrigation",
  },
  {
    id: 5,
    title: "Pradhan Mantri Krishi Sinchayee Yojana",
    description:
      "Promotes improved irrigation facilities and efficient water management to help farmers increase agricultural productivity and save water.",
    image: new URL("../assets/images/Govern-schems/1.jpg", import.meta.url).href,
    imageAlt: "Healthy crops receiving irrigation",
  },

];

function ArrowIcon({ expanded }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {expanded ? (
        <path d="M7 12h10" />
      ) : (
        <>
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </>
      )}
    </svg>
  );
}

export default function GovernmentSchemes() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard((current) => (current === id ? null : id));
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <div className="projects-heading-left">
            <span className="projects-eyebrow">
              Government Schemes
            </span>

            <h2>
              Government Schemes
              <br />
              Supporting Farmers
            </h2>
          </div>

          <p className="projects-intro">
            Discover government schemes that support farmers
            with financial assistance, crop insurance, irrigation
            facilities, and modern farming technologies.
          </p>
        </div>

        
<div className="projects-grid">
  {projects.map((project, index) => {
    const isActive = activeCard === project.id;

    return (
      <article
        key={project.id}
        className={`project-card ${
          index < 2 ? "project-card-large" : "project-card-small"
        } ${isActive ? "project-card-active" : ""}`}
      >
        <div className="project-image-wrapper">
          <img
  className="project-image"
  src={project.image}
  alt={project.imageAlt}
  loading="lazy"
/>
        </div>

        <div className="project-image-overlay" />

        <div className="project-info">
          <button
            type="button"
            className="project-arrow"
            aria-label={`${isActive ? "Hide" : "Show"} details for ${project.title}`}
            aria-expanded={isActive}
            onClick={() => toggleCard(project.id)}
          >
            <ArrowIcon expanded={isActive} />
          </button>

          <h3>{project.title}</h3>

          <div className="project-description">
            <p>{project.description}</p>
          </div>
        </div>
      </article>
    );
  })}
</div>

<div className="projects-button-wrapper">
  <AllButtons
  variant="outline"
  size="medium"
  href="/Government-Schemes"
>
  Learn More
</AllButtons>
</div>

      </div>
    </section>
  );
}
