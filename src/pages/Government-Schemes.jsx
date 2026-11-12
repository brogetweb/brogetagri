import AllPagesBanner from "../components/Banner/AllPagesBanner";
import governmentBanner from "../assets/images/Home-Banner/1.png";
import "./Government-Schemes.css";

const governmentSchemes = [
  {
    id: "01",
    icon: "🌾",
    title: "PM-KISAN Samman Nidhi",
    description:
      "Provides eligible farmer families with financial assistance of ₹6,000 annually through three instalments.",
    link: "https://pmkisan.gov.in/",
  },
  {
    id: "02",
    icon: "🛡️",
    title: "Pradhan Mantri Fasal Bima Yojana",
    description:
      "Helps protect eligible farmers against crop losses caused by natural calamities, pests, and diseases.",
    link: "https://pmfby.gov.in/",
  },
  {
    id: "03",
    icon: "💳",
    title: "Kisan Credit Card Scheme",
    description:
      "Helps eligible farmers access agricultural credit for crop cultivation and other farming requirements.",
    link: "https://www.myscheme.gov.in/",
  },
  {
    id: "04",
    icon: "🌱",
    title: "Soil Health Card Scheme",
    description:
      "Helps farmers understand soil nutrient levels and make informed decisions about fertilisers and soil management.",
    link: "https://soilhealth.dac.gov.in/",
  },
  {
    id: "05",
    icon: "💧",
    title: "Pradhan Mantri Krishi Sinchayee Yojana",
    description:
      "Promotes improved irrigation, water-use efficiency, and better water management for agricultural land.",
    link: "https://pmksy.gov.in/",
  },
  {
    id: "06",
    icon: "🚜",
    title: "e-NAM – National Agriculture Market",
    description:
      "Provides an online trading platform that connects agricultural markets and supports more transparent produce trading.",
    link: "https://www.enam.gov.in/",
  },
];

export default function GovernmentSchemesMain() {
  return (
    <main className="government-schemes-page">
       <AllPagesBanner
        title="Government Schemes"
        backgroundImage={governmentBanner}
      />
  
      <section
        className="broget-gov-schemes"
        aria-labelledby="broget-gov-title"
      >
        <div className="broget-gov-container">
          <div className="broget-gov-header">
            <div className="broget-gov-heading">
              <span className="broget-gov-eyebrow">
                🌾 &nbsp; FARMER WELFARE &nbsp; 🌾
              </span>

              <h2 id="broget-gov-title">
                Government Schemes for
                <br className="broget-gov-desktop-break" />
                Farmers
              </h2>
            </div>

            <div className="broget-gov-intro">
              <p>
                Explore government initiatives designed to support
                farmers, improve agricultural productivity, and
                encourage sustainable farming across India.
              </p>

              <a
                className="broget-gov-all-button"
                href="https://www.myscheme.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Explore All Schemes</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="broget-gov-grid">
            {governmentSchemes.map((scheme) => (
              <article
                className="broget-gov-card"
                key={scheme.id}
              >
                <div className="broget-gov-card-top">
                  <div
                    className="broget-gov-icon"
                    aria-hidden="true"
                  >
                    {scheme.icon}
                  </div>

                  <span className="broget-gov-number">
                    {scheme.id}
                  </span>
                </div>

                <h3>{scheme.title}</h3>

                <p className="broget-gov-description">
                  {scheme.description}
                </p>

                <div className="broget-gov-card-footer">
                  <a
                    href={scheme.link}
                    className="broget-gov-learn-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Learn more about ${scheme.title}`}
                  >
                    <span>Learn More</span>
                    <span
                      className="broget-gov-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}