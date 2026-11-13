import { useState } from "react";
import "./Business-Ideas-for-Farmers-detailed.css";

const articleImages = {
  featured:
    "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1400&q=85",
  farmer:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
  vegetables:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=85",
  dairy:
    "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=900&q=85",
};

function BusinessIdeasForFarmersDetailed() {
  const [showVideoMessage, setShowVideoMessage] = useState(false);

  return (
    <main className="farmer-detail-page">
      <div className="farmer-detail-container">
        <article className="farmer-detail-article">
          {/* Article Header */}
          <header className="farmer-detail-header">
            <h1>
              Best Agriculture Business Ideas for Farmers to Grow Their Income
            </h1>

            <div className="farmer-detail-meta">
              <span>
                <span className="farmer-meta-icon">●</span>
                By Broget Agriculture
              </span>

              <span className="farmer-meta-divider">/</span>

              <span>
                <span className="farmer-meta-icon">▦</span>
                28 October 2026
              </span>

              <span className="farmer-meta-divider">/</span>

              <span>
                <span className="farmer-meta-icon">◆</span>
                Agriculture, Farming
              </span>

              <span className="farmer-meta-divider">/</span>

              <span>
                <span className="farmer-meta-icon">●</span>
                Farmer Business Ideas
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="farmer-detail-featured-image">
            <img
              src={articleImages.featured}
              alt="Agriculture and livestock farming"
            />
          </div>

          {/* Introduction */}
          <div className="farmer-detail-content">
            <p>
              Agriculture offers many opportunities for farmers who want to
              build a sustainable business and increase their income. Along
              with traditional crop cultivation, farmers can explore dairy
              farming, goat farming, poultry farming, organic vegetable
              production, beekeeping, mushroom cultivation and other
              agriculture-related businesses.
            </p>

            <p>
              Choosing the right business depends on available land, investment,
              water resources, local market demand and farming experience.
              Starting with a practical business plan can help farmers manage
              expenses, reduce risks and build a reliable source of income.
            </p>

            {/* Section One */}
            <section className="farmer-detail-section">
              <h2>
                Best Agriculture Business Ideas to Start on Your Farm
              </h2>

              <p>
                If you are planning to start a new agricultural business,
                consider opportunities that match your resources and local
                needs. Here are some popular options for small and medium-sized
                farmers.
              </p>

              <div className="farmer-detail-feature-grid">
                <div className="farmer-detail-feature-image">
                  <img
                    src={articleImages.dairy}
                    alt="Livestock and dairy farming"
                    loading="lazy"
                  />

                  <button
                    type="button"
                    className="farmer-detail-play-button"
                    aria-label="Show farming video information"
                    onClick={() => setShowVideoMessage((previous) => !previous)}
                  >
                    {showVideoMessage ? "×" : "▶"}
                  </button>
                </div>

                <div className="farmer-detail-list-card">
                  <h3>Business opportunities</h3>

                  <ul>
                    <li>Dairy farming and milk production</li>
                    <li>Goat farming and livestock management</li>
                    <li>Poultry farming and egg production</li>
                    <li>Organic vegetable cultivation</li>
                    <li>Beekeeping and honey production</li>
                    <li>Mushroom farming</li>
                    <li>Nursery and plant selling business</li>
                  </ul>
                </div>
              </div>

              {showVideoMessage && (
                <div className="farmer-detail-video-message" role="status">
                  <strong>Learn about farming opportunities</strong>
                  <p>
                    Explore the business ideas in this article to learn about
                    startup requirements, farm management and potential
                    customers.
                  </p>
                </div>
              )}

              <p>
                Before investing, estimate the cost of equipment, feed, seeds,
                labour, water and transportation. Compare these expenses with
                expected sales and identify potential buyers in your area.
              </p>
            </section>

            {/* Quote */}
            <blockquote className="farmer-detail-quote">
              <span className="farmer-detail-quote-icon">“</span>

              <div>
                <p>
                  A successful farming business begins with careful planning,
                  quality production and a clear understanding of market
                  demand. Small, well-managed steps can create opportunities
                  for long-term growth.
                </p>

                <cite>— Broget Agriculture</cite>
              </div>
            </blockquote>

            {/* Section Two */}
            <section className="farmer-detail-section">
              <h2>How to Choose the Right Farming Business</h2>

              <p>
                Not every business is suitable for every farm. Before selecting
                an idea, evaluate the following important factors to make a
                practical decision.
              </p>

              <ul className="farmer-detail-bullet-list">
                <li>
                  <strong>Initial investment:</strong> Calculate how much
                  money you can invest without putting essential farm
                  activities at risk.
                </li>

                <li>
                  <strong>Market demand:</strong> Research local buyers,
                  wholesalers, retailers and potential direct customers.
                </li>

                <li>
                  <strong>Available resources:</strong> Consider your land,
                  water supply, equipment, labour and storage facilities.
                </li>

                <li>
                  <strong>Skills and experience:</strong> Choose a business
                  you understand or can learn through reliable training and
                  agricultural guidance.
                </li>

                <li>
                  <strong>Profit and expenses:</strong> Prepare a budget that
                  includes recurring costs, unexpected expenses and realistic
                  selling prices.
                </li>
              </ul>
            </section>

            {/* Image Grid */}
            <div className="farmer-detail-image-grid">
              <img
                src={articleImages.farmer}
                alt="Green agricultural fields"
                loading="lazy"
              />

              <img
                src={articleImages.vegetables}
                alt="Growing vegetables in a farm garden"
                loading="lazy"
              />
            </div>

            <p>
              Sustainable farming practices, responsible water management and
              careful planning can help farmers improve productivity while
              protecting natural resources. Begin with a manageable project,
              track your results and expand as your business grows.
            </p>

            {/* Final Section */}
            <section className="farmer-detail-section">
              <h2>Start Small and Grow Your Agriculture Business</h2>

              <p>
                A successful agriculture business takes time, consistency and
                an understanding of customer needs. Farmers can start with one
                suitable activity, learn from the results and gradually
                introduce additional products or services.
              </p>

              <p>
                Explore our other farmer business ideas to compare different
                opportunities and discover options that fit your farm, budget
                and long-term goals.
              </p>
            </section>

            {/* Article Footer */}
            <footer className="farmer-detail-footer">
              <span className="farmer-detail-footer-label">
                Explore more:
              </span>

              <span className="farmer-detail-tag">Agriculture</span>
              <span className="farmer-detail-tag">Farmer Business</span>
              <span className="farmer-detail-tag">Organic Farming</span>
              <span className="farmer-detail-tag">Livestock</span>
            </footer>
          </div>
        </article>
      </div>
    </main>
  );
}

export default BusinessIdeasForFarmersDetailed;