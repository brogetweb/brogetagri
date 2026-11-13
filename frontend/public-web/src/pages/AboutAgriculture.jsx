import { Link } from "react-router-dom";
import "./AboutAgriculture.css";

const features = [
  {
    id: 1,
    icon: "🌱",
    title: "Built for Better Farming",
    description:
      "We help farmers explore practical, sustainable solutions for healthier crops and greener living.",
  },
  {
    id: 2,
    icon: "🌾",
    title: "Growing with Purpose",
    description:
      "Broget believes in supporting agricultural growth through responsible practices and farmer-focused solutions.",
  },
];

export default function AboutAgriculture() {
  return (
    <section className="broget-about" id="about">
      <div className="broget-about-container">
        {/* LEFT: Overlapping agriculture images */}
        <div className="broget-about-visual">
          {/* <span className="broget-about-dot" aria-hidden="true">
            <span />
          </span> */}

          <div className="broget-about-image broget-about-image-main">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85"
              alt="Green agricultural fields growing in a rural landscape"
              loading="lazy"
            />
          </div>

          <div className="broget-about-image broget-about-image-overlay">
            <img
              src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=900&q=85"
              alt="Fresh green crops growing on a farm"
              loading="lazy"
            />
          </div>

          <div className="broget-image-caption">
            <span className="broget-caption-icon">🌿</span>
            <span>Growing a greener tomorrow</span>
          </div>
        </div>

        {/* RIGHT: About Broget content */}
        <div className="broget-about-content">
          <span className="broget-about-label">
            About Broget Agriculture
          </span>

          <h2>
            Growing Naturally,
            <br className="broget-desktop-break" />
            Growing Together.
          </h2>

          <p className="broget-about-subtitle">
            Empowering Agriculture. Supporting Farmers. Growing Futures.
          </p>

          <div className="broget-about-highlights">
            {/* Highlight card */}
            <div className="broget-about-stat">
              <span className="broget-stat-icon">🌱</span>
              <h3>Rooted in Nature</h3>
              <p>
                A greener approach to agriculture, focused on sustainable
                growth and a healthier future.
              </p>
            </div>

            {/* Feature list */}
            <div className="broget-about-features">
              {features.map((feature) => (
                <article
                  className="broget-feature"
                  key={feature.id}
                >
                  <div className="broget-feature-icon" aria-hidden="true">
                    {feature.icon}
                  </div>

                  <div className="broget-feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className="broget-about-description">
            At Broget, we believe agriculture is the foundation of a better
            tomorrow. Our goal is to connect farmers with meaningful
            agricultural solutions, encourage responsible farming practices,
            and help build a future where farming communities and nature
            thrive together.
          </p>

          <Link to="/AboutUs" className="broget-about-button">
  Explore Our Initiatives
  <span aria-hidden="true">↗</span>
</Link>
        </div>
      </div>
    </section>
  );
}
