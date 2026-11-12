import AllPagesBanner from "../components/Banner/AllPagesBanner";
import aboutBanner from "../assets/images/Home-Banner/1.png";

import "./AboutUs.css";

const features = [
  { 
    icon: "🌱",
    title: "Growing Better Agriculture",
    description:
      "We support farmers with practical agricultural solutions for healthier crops and better productivity.",
  },
  // {
  //   icon: "🌾",
  //   title: "Building a Greener Future",
  //   description:
  //     "Our focus is sustainable farming, efficient resources, and long-term growth for farming communities.",
  // },
];

const benefits = [
  "Smart Solutions for Farmers",
  "Quality Agricultural Support",
  "Sustainable Farming for Tomorrow",
];

const customers = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces",
];

export default function AboutAgriculture() {
  return (
    <>
 <AllPagesBanner
        title="About Us"
        backgroundImage={aboutBanner}
      />
      <section className="main-about-broget">
        <div className="main-about-broget-container">

          {/* TOP LEFT: COMPANY INTRODUCTION */}
          <div className="main-about-broget-intro">
            <span className="main-about-broget-label">
              About Broget Agriculture
            </span>

            <h2 className="main-about-broget-heading">
              Empowering Farmers,
              <br className="main-about-broget-desktop-break" />
              Growing a Greener Future
            </h2>

            <p className="main-about-broget-description">
              At Broget Agriculture, we believe agriculture is the
              foundation of a better tomorrow. We are committed to
              supporting farmers with dependable agricultural
              solutions that help improve productivity, encourage
              responsible farming, and create lasting value.
            </p>

            <p className="main-about-broget-description main-about-broget-description-last">
              From crop cultivation and farm management to modern
              agricultural practices, our vision is to help farming
              communities grow with confidence. Together, we can
              build a stronger, more sustainable future for agriculture.
            </p>
          </div>

          {/* TOP RIGHT: CUSTOMER CARD */}
          <aside className="main-about-broget-customer-card">
            <div className="main-about-broget-avatars">
              {customers.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Customer ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </div>

            <h3 className="main-about-broget-customer-number">
              Farm First
            </h3>

            <p className="main-about-broget-customer-caption">
              Growing Together
            </p>
          </aside>

          {/* BOTTOM LEFT: AGRICULTURE IMAGE */}
          <div className="main-about-broget-image-wrapper">
            <img
              className="main-about-broget-main-image"
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85"
              alt="Green agricultural fields and cultivated farmland"
              loading="lazy"
            />

            <div className="main-about-broget-image-caption">
              <span>🌿</span>
              <p>Growing today for a better tomorrow.</p>
            </div>
          </div>

          {/* BOTTOM RIGHT: INFORMATION CARD */}
          <aside className="main-about-broget-info-card">
            <div className="main-about-broget-features">
              {features.map((feature) => (
                <article
                  className="main-about-broget-feature"
                  key={feature.title}
                >
                  <div className="main-about-broget-feature-icon">
                    <span aria-hidden="true">{feature.icon}</span>
                  </div>

                  <div className="main-about-broget-feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="main-about-broget-benefits">
              {benefits.map((benefit) => (
                <div
                  className="main-about-broget-benefit"
                  key={benefit}
                >
                  <span aria-hidden="true">✓</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </aside>

        </div>
      </section>

    <AgricultureServicesSection />
    </>
  );
}



// Reusable services section
export function AgricultureServicesSection({
  eyebrow = "OUR SERVICES",
  title = "Pure Products And Honest Practices",
  description = "Broget Agriculture supports farmers with dependable agricultural solutions, responsible farming practices, and sustainable crop production.",
  image = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
  imageAlt = "Green agricultural fields",
  viewAllText = "View All Services",
  viewAllLink = "/services",
  services = [
    {
      id: 1,
      icon: "🚜",
      title: "Modern Agricultural Solutions",
      description:
        "We help farmers improve productivity through practical farming techniques and dependable agricultural support.",
      link: "/services",
      theme: "light",
    },
    {
      id: 2,
      icon: "🌾",
      title: "Sustainable Crop Production",
      description:
        "We encourage responsible farming, better resource management, and sustainable agricultural growth.",
      link: "/services",
      theme: "dark",
    },
  ],
}) {
  return (
    <section className="broget-services">
      <div className="broget-services-container">
        <div className="broget-services-header">
          <div className="broget-services-heading">
            <div className="broget-services-eyebrow">
              <span>〰</span>
              {eyebrow}
              <span>〰</span>
            </div>

            <h2>{title}</h2>
          </div>

          <div className="broget-services-intro">
            <p>{description}</p>

            <a className="broget-view-all" href={viewAllLink}>
              {viewAllText}
              <span className="broget-view-all-icon">↗</span>
            </a>
          </div>
        </div>

        <div className="broget-services-grid">
          {services[0] && (
            <article
              className={`broget-service-card ${
                services[0].theme === "dark"
                  ? "broget-service-card-dark"
                  : ""
              }`}
            >
              <div className="broget-service-icon">
                {services[0].icon}
              </div>

              <h3>{services[0].title}</h3>
              <p>{services[0].description}</p>

              <a
                className="broget-learn-more"
                href={services[0].link || "/services"}
              >
                Learn More
                <span className="broget-learn-icon">↗</span>
              </a>
            </article>
          )}

          <div className="broget-services-image">
            <img src={image} alt={imageAlt} loading="lazy" />
            <div className="broget-services-image-overlay">
              <span>🌱</span>
              <p>Growing today for a better tomorrow.</p>
            </div>
          </div>

          {services[1] && (
            <article
              className={`broget-service-card ${
                services[1].theme === "dark"
                  ? "broget-service-card-dark"
                  : ""
              }`}
            >
              <div className="broget-service-icon">
                {services[1].icon}
              </div>

              <h3>{services[1].title}</h3>
              <p>{services[1].description}</p>

              <a
                className="broget-learn-more"
                href={services[1].link || "/services"}
              >
                Learn More
                <span className="broget-learn-icon">↗</span>
              </a>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}

