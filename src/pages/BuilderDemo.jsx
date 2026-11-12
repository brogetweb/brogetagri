
import "./BuilderDemo.css";

const BuilderDemo = () => {
  const services = [
    {
      id: 1,
      number: "02",
      title: "OUR MISSION",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85",
      alt: "Modern residential home renovation and interior improvement",
      description:
        "Our mission is to create comfortable, thoughtfully planned residential spaces that make quality living more accessible. We aim to deliver homes that balance practical design, everyday convenience, and lasting value.",
      keywords: "QUALITY | COMFORT | TRUST",
    },
    {
      id: 2,
      number: "03",
      title: "OUR VISION",
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=700&q=85",
      alt: "Professional building repair and residential maintenance",
      description:
        "Our vision is to become a trusted name in residential development by creating spaces where families can grow, dreams can flourish, and communities can thrive for generations.",
      keywords: "GROWTH | INNOVATION | VALUE",
    },
  ];

  return (
    <section className="broget-drive-section">
      <div className="broget-drive-container">

        {/* Section Heading */}
        <div className="broget-drive-header">

          <div className="broget-drive-title">
            <span className="broget-drive-eyebrow">
              <span className="broget-drive-eyebrow-line"></span>
              WHAT DRIVES BROGET BUILDERS
            </span>

            <h2>
              Thoughtful Designs.
              <br />
              <span>Quality Construction.</span>
              <br />
              Lasting Value.
            </h2>
          </div>

          <div className="broget-drive-intro">
            <p>
              At Broget Builders, we believe every successful home begins
              with a clear vision, thoughtful planning, and attention to
              detail. From modern architectural design to residential
              renovation and building maintenance, we focus on creating
              comfortable, functional, and well-planned living spaces.
            </p>

            <p>
              Our commitment is to deliver quality-focused construction
              solutions that enhance everyday living and bring lasting
              value to residential properties.
            </p>
          </div>

        </div>

        {/* Service Cards */}
        <div className="broget-drive-grid">

          {/* Architecture Main Card */}
          <article className="broget-drive-architecture">

            <div className="broget-drive-architecture-image">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
                alt="Modern residential architecture and contemporary home design"
                loading="lazy"
              />

              <div className="broget-drive-image-label">
                <span>01 / OUR APPROACH</span>
                <strong>Designed Around Your Lifestyle</strong>
              </div>
            </div>

            <div className="broget-drive-architecture-content">

              <div className="broget-drive-card-heading">
                <span className="broget-drive-number">01</span>
                <h3>WHY BROGET BUILDERS</h3>
              </div>

              <span className="broget-drive-accent"></span>

              <p>
                It is how we understand your needs, plan every space, focus on the details, and approach every project with the responsibility your dream home deserves.
              </p>

              <div className="broget-drive-tags">
                <span>MODERN DESIGN</span>
                <span>SMART PLANNING</span>
                <span>COMFORT</span>
              </div>

            </div>
          </article>

          {/* Right Side Cards */}
          <div className="broget-drive-side">

            {services.map((service) => (
              <article
                className="broget-drive-service-card"
                key={service.id}
              >

                <div className="broget-drive-service-image">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                  />

                  <span className="broget-drive-image-number">
                    {service.number}
                  </span>
                </div>

                <div className="broget-drive-service-content">

                  <h3>{service.title}</h3>

                  <span className="broget-drive-accent"></span>

                  <p>{service.description}</p>

                  <span className="broget-drive-keywords">
                    {service.keywords}
                  </span>

                </div>

              </article>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default BuilderDemo;
