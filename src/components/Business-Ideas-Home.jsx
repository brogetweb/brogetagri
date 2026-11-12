
import "./Business-Ideas-Home.css";
import { Link } from "react-router-dom";

const businessIdeas = [
  {
    id: 1,
    title: "Dairy Farming",
    description:
      "Start a profitable dairy business with fresh milk production, quality cattle care, and sustainable farm management.",
    icon: "milk",
    link: "/Dairy-Farming",
    position: "top-left",
  },
  {
    id: 2,
    title: "Goat Farming",
    description:
      "Explore goat rearing for milk and meat with practical feeding, breeding, and farm management techniques.",
    icon: "goat",
    link: "/Goat-Farming",
    position: "top-right",
  },
  {
    id: 3,
    title: "Poultry Farming",
    description:
      "Build a poultry business focused on healthy birds, egg production, broiler farming, and efficient farm care.",
    icon: "poultry",
    link: "/Poultry-Farming",
    position: "bottom-left",
  },
  {
    id: 4,
    title: "Organic Vegetables",
    description:
      "Grow chemical-free vegetables using natural fertilizers, healthy soil practices, and sustainable cultivation.",
    icon: "vegetables",
    link: "/Organic-Vegetables",
    position: "bottom-right",
  },
];

const BusinessIcon = ({ type }) => {
  const common = {
    width: 36,
    height: 36,
    viewBox: "0 0 40 40",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "milk":
      return (
        <svg {...common}>
          <path d="M13 8h14l-2 6 4 5v13H11V19l4-5-2-6Z" />
          <path d="M15 14h10M12 20h16M16 25h8M16 29h8" />
          <path d="M17 8V5h6v3" />
        </svg>
      );

    case "goat":
      return (
        <svg {...common}>
          <path d="M9 17 7 10l7 4 5-3 7 3 6-4-2 8" />
          <path d="M11 17c0-4 5-6 10-6s9 3 9 8v6H12v-6Z" />
          <path d="m16 24-1 8m11-8 1 8M12 19l-5-2m23 2 4-4" />
          <path d="M17 17h.1M25 17h.1M19 21l2 2 2-2" />
        </svg>
      );

    case "poultry":
      return (
        <svg {...common}>
          <path d="M10 25c-3-7 2-14 10-14 7 0 12 5 11 12-1 6-6 9-13 7-4-1-6-2-8-5Z" />
          <path d="m30 16 6 3-6 3M18 11l-2-5 6 3" />
          <path d="M16 30v4m9-4v4M13 34h6m3 0h6" />
          <circle cx="25" cy="16" r="1" fill="currentColor" />
          <path d="M8 25h7m-4-3 3 3-3 3" />
        </svg>
      );

    case "vegetables":
      return (
        <svg {...common}>
          <path d="M20 34V17" />
          <path d="M20 24C9 25 7 17 8 12c8 0 13 4 12 12Z" />
          <path d="M20 20c0-9 6-13 13-12 1 8-4 14-13 14" />
          <path d="M14 34h12" />
          <path d="M20 17c-2-4-5-6-9-6m9 10c3-4 6-6 10-7" />
        </svg>
      );

    default:
      return null;
  }
};

const CentralFarmLogo = () => (
  
  <div className="business-ideas-center">
    <div className="business-ideas-center-inner">
      <svg
        className="business-ideas-main-logo"
        viewBox="0 0 100 100"
        fill="none"
        aria-label="Sustainable farming"
        role="img"
      >
        <circle cx="50" cy="50" r="39" stroke="currentColor" strokeWidth="2" />
        <path
          d="M18 36c10-18 27-26 43-23M14 45c5-20 21-33 39-35M15 57C12 35 26 17 45 12M21 68C10 48 19 27 35 16M31 78C13 62 13 39 27 22M43 84C22 72 16 49 23 30M56 87C32 78 22 57 24 37M69 80C45 79 29 62 26 43M81 68C58 74 38 61 29 47M86 54C66 64 45 56 33 47M84 40C68 52 48 49 35 43M75 27C62 41 47 42 36 39"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="50" cy="42" r="10" stroke="currentColor" strokeWidth="3" />
        <path
          d="M31 66c2-12 10-18 19-18s17 6 19 18M39 57l11 8 11-8M50 65v12"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

const BusinessIdeasHome = () => {
  return (
    <>

    <section className="business-ideas-home"> 
      
<header className="business-ideas-home-heading">
  <div className="business-ideas-home-heading-left">
    {/* <span className="business-ideas-home-label">
      Our Agriculture Services
    </span> */}

    <h1>
  Turning Farming Ideas.
  <br />
  Into Growing Businesses.
</h1>
  </div>

  <Link
    to="/Business-Ideas-for-Farmers-detailed"
    className="business-ideas-home-button"
  >
    Explore Ideas <span aria-hidden="true">↗</span>
  </Link>
</header>

      <div className="business-ideas-container">
        <div className="business-ideas-connector" aria-hidden="true" />

        <CentralFarmLogo />

        {businessIdeas.map((idea) => (
          <article
            className={`business-ideas-card ${idea.position}`}
            key={idea.id}
          >
            <div className="business-ideas-card-heading">
              <div className="business-ideas-icon">
                <BusinessIcon type={idea.icon} />
              </div>

              <h2>{idea.title}</h2>
            </div>

            <p>{idea.description}</p>

            <Link
              to={idea.link}
              className="business-ideas-button"
              aria-label={`Learn more about ${idea.title}`}
            >
              <span>Learn More</span>

              <span className="business-ideas-button-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </article>
        ))}
      </div>
      
    </section>
    
    </>
  );
};

export default BusinessIdeasHome;
