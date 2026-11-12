import AllPagesBanner from "../components/Banner/AllPagesBanner";
import { useState } from "react";
import "./ServiceDetailePage.css";

const serviceCategories = [
  
  {
    id: 1,
    title: "Digital Farming",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
    description:
      "Use modern digital technology to make farming smarter, more productive, and easier to manage.",
    points: [
      "Crop health information.",
      "Soil testing information.",
      "Smart irrigation and water management.",
      "Crop disease identification.",
      "Digital farm planning.",
      "Farming expense and profit calculator.",
      "Online expert advice.",
    ],
  },
  {
    id: 2,
    title: "Crop Health Information",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=85",
    description:
      "Monitor crop growth and identify potential problems early to support healthy plants and better yields.",
    points: [
      "Crop growth monitoring.",
      "Leaf and plant health observation.",
      "Early identification of crop stress.",
      "Weather-based crop care guidance.",
      "Crop maintenance recommendations.",
    ],
  },
  {
    id: 3,
    title: "Soil Testing Information",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=85",
    description:
      "Understand your soil's condition and make informed decisions about nutrients, soil improvement, and crop selection.",
    points: [
      "Soil sample testing guidance.",
      "Soil pH and nutrient information.",
      "Fertilizer recommendations based on test results.",
      "Soil improvement practices.",
      "Crop suitability guidance.",
    ],
  },
  {
    id: 4,
    title: "Smart Irrigation",
    image:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1400&q=85",
    description:
      "Manage water efficiently with practical irrigation planning that helps farmers use available water wisely.",
    points: [
      "Irrigation scheduling.",
      "Water-saving farming practices.",
      "Drip irrigation guidance.",
      "Moisture-based watering recommendations.",
      "Water management planning.",
    ],
  },
  {
    id: 5,
    title: "Crop Disease Identification",
    image:
      "https://images.unsplash.com/photo-1592982537447-6f2a6a0a3b1c?auto=format&fit=crop&w=1400&q=85",
    description:
      "Learn to recognize common crop disease symptoms and understand the next steps for protecting your crops.",
    points: [
      "Common crop disease symptoms.",
      "Pest and disease awareness.",
      "Early detection guidance.",
      "Preventive crop care practices.",
      "Advice on when to consult an agriculture expert.",
    ],
  },
  {
    id: 6,
    title: "Digital Farm Planning",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=85",
    description:
      "Plan farming activities with a clearer view of crop selection, seasonal tasks, resources, and expected costs.",
    points: [
      "Seasonal crop planning.",
      "Sowing and harvesting schedules.",
      "Resource and labour planning.",
      "Farm activity tracking.",
      "Crop rotation planning.",
    ],
  },
  {
    id: 7,
    title: "Farming Expense & Profit Calculator",
    image:
      "https://images.unsplash.com/photo-1523742817590-4c1bb9f3f9c1?auto=format&fit=crop&w=1400&q=85",
    description:
      "Organize farm expenses and estimate potential returns to support more informed financial decisions.",
    points: [
      "Seed and fertilizer expense tracking.",
      "Labour and irrigation cost estimates.",
      "Equipment and transport cost tracking.",
      "Expected yield and revenue estimates.",
      "Estimated profit and loss calculations.",
    ],
  },
  {
    id: 8,
    title: "Online Expert Advice",
    image:
      "https://images.unsplash.com/photo-1592982537447-6f2a6a0a3b1c?auto=format&fit=crop&w=1400&q=85",
    description:
      "Get guidance on farming questions and learn practical approaches to crop care and farm management.",
    points: [
      "Crop management guidance.",
      "Soil and nutrient advice.",
      "Irrigation recommendations.",
      "Seasonal farming information.",
      "Help identifying when specialist support is needed.",
    ],
  },
];

const ServiceDetailePage = () => {
  const [activeService, setActiveService] = useState(
    serviceCategories[0]
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect your backend or email service here to receive enquiries.
    setSubmitted(true);
  };

  const handleCategoryClick = (service) => {
    setActiveService(service);

    // Keep the page content in view when a category is selected.
    document
      .querySelector(".servicedetaile-content")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
    <AllPagesBanner
  title={activeService.title}
  subtitle="Explore Our Agricultural Solutions"
  backgroundImage={activeService.image}
  breadcrumbs={[
    { label: "Home", path: "/" },
    { label: "Our Services", path: "/services" },
    { label: activeService.title },
  ]}
/>
    <main className="servicedetaile-page">
      <div className="servicedetaile-layout">
        {/* LEFT: Service image and dynamic details */}
        <section className="servicedetaile-main">
          <div className="servicedetaile-image-wrap">
            <img
              key={activeService.image}
              src={activeService.image}
              alt={activeService.title}
              className="servicedetaile-main-image"
            />

            <div className="servicedetaile-image-label">
              <span>OUR AGRICULTURE SERVICES</span>
              <h2>{activeService.title}</h2>
            </div>
          </div>

          <div className="servicedetaile-content">
            <h1>{activeService.title}</h1>

            <div className="servicedetaile-title-line">
              <span />
            </div>

            <div className="servicedetaile-highlight">
              <p>{activeService.description}</p>
            </div>

            <p className="servicedetaile-intro">
              At DonalFarm Agriculture, we support farmers with practical
              agricultural information and modern farming solutions.
              Explore our services to discover useful ways to improve
              crop care, manage farm resources, and make informed
              farming decisions.
            </p>

            <div className="servicedetaile-details-heading">
              <h2>What This Service Offers</h2>
              <span />
            </div>

            <ul className="servicedetaile-points">
              {activeService.points.map((point) => (
                <li key={point}>
                  <span
                    className="servicedetaile-check"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="servicedetaile-benefit">
              <h3>Smarter Decisions. Better Farming.</h3>
              <p>
                Choose a category to explore the available services,
                or contact our team to discuss your farming requirements.
              </p>
            </div>
          </div>
        </section>

        {/* RIGHT: Category panel and quote form */}
        <aside className="servicedetaile-sidebar">
          <section className="servicedetaile-category-card">
            <h2 className="servicedetaile-sidebar-heading">
              Services Category
            </h2>

            <div className="servicedetaile-category-list">
              {serviceCategories.map((service) => (
                <button
                  type="button"
                  key={service.id}
                  className={`servicedetaile-category-button ${
                    activeService.id === service.id ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(service)}
                  aria-pressed={activeService.id === service.id}
                >
                  <span>{service.title}</span>

                  <span
                    className="servicedetaile-category-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="servicedetaile-quote-card">

            <h3 className="servicedetaile-quote-title">
              Get A Free Quote
            </h3>

            <p className="servicedetaile-quote-subtitle">
              Tell us about your farming requirements.
            </p>

            <form
              className="servicedetaile-quote-form"
              onSubmit={handleSubmit}
            >
              <label htmlFor="servicedetaile-name">Name</label>
              <input
                id="servicedetaile-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="servicedetaile-email">Email</label>
              <input
                id="servicedetaile-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="servicedetaile-phone">Phone</label>
              <input
                id="servicedetaile-phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="servicedetaile-message">Message</label>
              <textarea
                id="servicedetaile-message"
                name="message"
                placeholder="How can we help you?"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
              />

              <button
                type="submit"
                className="servicedetaile-submit"
              >
                Submit Enquiry <span>↗</span>
              </button>

              {submitted && (
                <p
                  className="servicedetaile-form-success"
                  role="status"
                >
                  Thank you for your enquiry. Please connect this form
                  to your backend or email service to receive submissions.
                </p>
              )}
            </form>
          </section>
        </aside>
      </div>
      <ServiceSolutionsBenefits />
    </main>
    </>
  );
};

const solutionTabs = [
  {
    id: 1,
    title: "SOLUTION 1",
    heading: "Smart Farming Solutions",
    description:
      "Use digital agriculture tools to monitor crop health, understand soil conditions, improve irrigation planning, and make better farming decisions.",
    benefits: [
      "Modern digital farming guidance",
      "Crop health and disease awareness",
      "Soil testing and nutrient information",
    ],
  },
  {
    id: 2,
    title: "SOLUTION 2",
    heading: "Efficient Farm Management",
    description:
      "Manage farming activities with better planning for water, labour, crop schedules, and daily farm expenses to use your resources more efficiently.",
    benefits: [
      "Smart irrigation and water management",
      "Digital crop and seasonal planning",
      "Farm expense and profit estimation",
    ],
  },
  {
    id: 3,
    title: "SOLUTION 3",
    heading: "Expert Agricultural Support",
    description:
      "Get useful agricultural information and practical guidance to help you understand farming challenges and plan the next steps for your crops.",
    benefits: [
      "Online agricultural expert guidance",
      "Crop care and disease prevention information",
      "Practical farming recommendations",
    ],
  },
];

const ServiceSolutionsBenefits = () => {
  const [activeSolution, setActiveSolution] = useState(solutionTabs[0]);

  return (
    <section className="service-solutions-section">
      <div className="service-solutions-layout">
        {/* Left side: Solutions and Benefits */}
        <div className="service-solutions-left">
          <h2 className="service-solutions-title">
            Our Solutions &amp; Benefits
          </h2>

          <div className="service-solutions-tabs">
            {solutionTabs.map((solution) => (
              <button
                type="button"
                key={solution.id}
                className={`service-solutions-tab ${
                  activeSolution.id === solution.id ? "active" : ""
                }`}
                onClick={() => setActiveSolution(solution)}
                aria-pressed={activeSolution.id === solution.id}
              >
                {solution.title}
              </button>
            ))}
          </div>

          <div className="service-solutions-panel" key={activeSolution.id}>
            <h3>{activeSolution.heading}</h3>

            <p>{activeSolution.description}</p>

            <ul className="service-solutions-benefit-list">
              {activeSolution.benefits.map((benefit) => (
                <li key={benefit}>
                  <span aria-hidden="true">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <p className="service-solutions-bottom-text">
            Every farm has different needs. Explore our solutions to find
            practical ways to improve crop management, use resources
            efficiently, and support your farming goals.
          </p>
        </div>

        {/* Right side: Contact Us image card */}
        <a
          className="service-contact-image-card"
          href="/ContactUs"
          aria-label="Contact us today"
        >
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85"
            alt="Green agricultural farmland"
            className="service-contact-image"
          />

          <div className="service-contact-image-overlay">
            <span>WE ARE HERE FOR YOU.</span>
            <h3>GET IN TOUCH!</h3>
            <span className="service-contact-image-link">
              Contact Us Today <span aria-hidden="true">↗</span>
            </span>
          </div>

          <span
            className="service-contact-decorative-leaf"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
};

 


export default ServiceDetailePage;
