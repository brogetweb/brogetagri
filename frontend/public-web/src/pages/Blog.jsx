// src/pages/Blog.jsx

import "./Blog.css";

const farmingBenefits = [
  {
    title: "Dairy Farming:",
    description:
      "Explore milk production, livestock care, and dairy business opportunities.",
  },
  {
    title: "Goat Farming:",
    description:
      "Learn about goat housing, feeding, livestock health, and management.",
  },
  {
    title: "Poultry Farming:",
    description:
      "Understand poultry care, farm management, and market opportunities.",
  },
  {
    title: "Organic Vegetables:",
    description:
      "Discover sustainable vegetable cultivation and local selling opportunities.",
  },
  {
    title: "Modern Agriculture:",
    description:
      "Explore precision farming, agricultural drones, and digital farm tools.",
  },
];

function Blog() {
  return (
    <main className="broget-blog-page">
      <article className="broget-blog-article">

        {/* Featured Image */}
        <div className="broget-blog-featured">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85"
            alt="Green agricultural fields and farming landscape"
            className="broget-blog-featured-image"
          />

          <div className="broget-blog-date">
            <span>OCT</span>
            <strong>30</strong>
            <span>2026</span>
          </div>
        </div>

        {/* Blog Content */}
        <div className="broget-blog-content">

          {/* Article Metadata */}
          <div className="broget-blog-meta">
            <span>
              <span className="broget-blog-meta-icon">✦</span>
              Broget Agriculture
            </span>

            <span className="broget-blog-meta-divider">|</span>
            <span>Agriculture &amp; Farming</span>

            <span className="broget-blog-meta-divider">|</span>
            <span>Farmer Resources</span>
          </div>

          {/* Main Heading */}
          <header className="broget-blog-header">
            <p className="broget-blog-eyebrow">
              Agriculture Insights
            </p>

            <h1>
              Growing a Better Future Through Smart Agriculture
            </h1>

            <p className="broget-blog-intro">
              Agriculture is more than growing crops. It supports our
              food system, rural economy, and sustainable future.
              Discover government schemes, profitable farming ideas,
              agricultural services, modern technology, and useful
              weather information to help farmers make informed decisions.
            </p>
          </header>

          {/* Introduction */}
          <section className="broget-blog-section">
            <h2>Building a Stronger Future for Farmers</h2>

            <p>
              Agriculture continues to evolve through improved cultivation
              methods, modern technology, and better access to information.
              Farmers can explore opportunities beyond traditional crop
              cultivation, including dairy farming, goat farming, poultry
              farming, organic vegetables, and other agriculture-based
              businesses.
            </p>

            <p>
              Broget Agriculture aims to make useful agricultural
              information easier to explore. Whether you are an experienced
              farmer, a new entrepreneur, or someone interested in
              agriculture, understanding your available options can help
              you plan your next steps.
            </p>
          </section>

          {/* Quote */}
          <blockquote className="broget-blog-quote">
            <span className="broget-blog-quote-mark">“</span>

            <p>
              Sustainable agriculture begins with knowledge, grows
              through innovation, and creates a better future for
              farmers and communities.
            </p>

            <cite>— Broget Agriculture</cite>
          </blockquote>

          {/* Government Schemes */}
          <section className="broget-blog-section">
            <h2>Government Schemes and Farmer Support</h2>

            <p>
              Government schemes may provide eligible farmers with
              financial assistance, crop insurance, agricultural credit,
              and irrigation support. Understanding the eligibility
              criteria and application process can help farmers identify
              relevant opportunities.
            </p>

            <p>
              Farmers can explore programmes such as PM-KISAN,
              Pradhan Mantri Fasal Bima Yojana, Kisan Credit Card,
              and irrigation-related schemes. Benefits and eligibility
              vary by programme. Always verify the latest requirements
              through official government sources before applying.
            </p>
          </section>

          {/* Farming Business Ideas */}
          <section className="broget-blog-section">
            <h2>Explore Farming Business Ideas</h2>

            <p>
              Agriculture offers several opportunities for people who
              want to establish or expand a business. The right choice
              depends on investment, available land, local demand,
              farming experience, and access to markets.
            </p>

            <ul className="broget-blog-checklist">
              {farmingBenefits.map((benefit) => (
                <li key={benefit.title}>
                  <span className="broget-blog-check">✓</span>

                  <span>
                    <strong>{benefit.title}</strong>{" "}
                    {benefit.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Supporting Images */}
          <div className="broget-blog-image-grid">
            <figure className="broget-blog-image-card">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=85"
                alt="Farmland and agricultural cultivation"
                loading="lazy"
              />

              <figcaption>
                <h3>Modern Farming Practices</h3>

                <p>
                  Improve farm productivity through better cultivation
                  techniques and responsible resource management.
                </p>
              </figcaption>
            </figure>

            <figure className="broget-blog-image-card">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=85"
                alt="Fresh vegetables and agricultural produce"
                loading="lazy"
              />

              <figcaption>
                <h3>Sustainable Agriculture</h3>

                <p>
                  Support soil health, efficient water use, and
                  sustainable agricultural production.
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Agricultural Services */}
          <section className="broget-blog-section">
            <h2>Agricultural Services and Modern Technology</h2>

            <p>
              Agricultural services can help farmers manage their farms
              more effectively. Digital farming, soil testing, smart
              irrigation, crop monitoring, drone applications, and
              expert guidance are useful areas to explore when choosing
              suitable solutions for a farm.
            </p>

            <p>
              Access to reliable information is also important.
              Farmers can explore weather forecasts, rainfall updates,
              temperature information, and seasonal guidance to help
              plan irrigation, cultivation, and harvesting. Weather
              forecasts can change, so consult reliable local weather
              services when making important farming decisions.
            </p>
          </section>

          {/* Weather Information */}
          <section className="broget-blog-weather">
            <div className="broget-blog-weather-icon" aria-hidden="true">
              ☀
            </div>

            <div>
              <h3>Stay Informed About Agricultural Weather</h3>

              <p>
                Check local weather forecasts and rainfall updates
                before planning important farm activities. Consider
                your crop type, soil conditions, and local advisories.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="broget-blog-conclusion">
            <div className="broget-blog-conclusion-icon">
              ✦
            </div>

            <h2>Let's Grow Together with Broget Agriculture</h2>

            <p>
              From government schemes and farming business ideas to
              agricultural services, modern technology, and weather
              information, the right resources can help farmers discover
              opportunities and make informed choices.
            </p>

            <p>
              Broget Agriculture is committed to supporting a more
              informed, productive, and sustainable agricultural
              community. Keep learning, explore new possibilities,
              and take the next step toward a greener future.
            </p>

            <div className="broget-blog-tags">
              <span>Agriculture</span>
              <span>Smart Farming</span>
              <span>Government Schemes</span>
              <span>Farmer Support</span>
              <span>Sustainability</span>
            </div>
          </section>

          {/* Article Footer */}
          <footer className="broget-blog-footer">
            <div>
              <span className="broget-blog-footer-label">
                Published by
              </span>

              <strong>Broget Agriculture</strong>
            </div>

            <span className="broget-blog-footer-category">
              Agriculture Insights
            </span>
          </footer>

        </div>
      </article>
    </main>
  );
}

export default Blog;