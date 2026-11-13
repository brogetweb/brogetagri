import { useState, useEffect } from "react";
import "./Testimonial.css";
// import AllPagesBanner from "../components/Banner/AllPagesBanner";


const testimonials = [
  {
    id: 1,
    name: "Daniel Hamilton",
    company: "Seamans Furniture",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    mainImage: "/images/testimonial-customer.png",
    rating: 5,
    text: "As a restaurant owner, sourcing clean and quality ingredients is everything. When we switched to organic poultry products, our customers immediately noticed the difference. The meat is tender, juicy, cooks evenly and best of all.",
  },
  {
    id: 2,
    name: "Alex Buckmaster",
    company: "Cala Foods",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
    mainImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
    rating: 5,
    text: "The quality and freshness of the products have made a real difference to our business. We appreciate the consistent service, excellent standards and commitment to providing healthy, high-quality food.",
  },
  {
    id: 3,
    name: "Stephanie Sharkey",
    company: "Ezhe Source",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    mainImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85",
    rating: 5,
    text: "Working with this team has been a wonderful experience. Their attention to quality, customer satisfaction and reliable service gives us confidence in every order. We would happily recommend them to others.",
  },
];

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically switch testimonials every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <>
     {/* <AllPagesBanner
        title="Testimonial"
        subtitle="Explore Profitable Agriculture Opportunities"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Testimonial" },
        ]}
      /> */}
    
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Section Heading */}
        <div className="testimonial-heading">
          <span className="testimonial-badge">
            <span className="testimonial-badge-dot"></span>
            Testimonials
          </span>

          <h2>Happy Customers </h2>
        </div>

        {/* Testimonial Content */}
        <div
          className="testimonial-layout"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          {/* Left: Testimonial Text Card */}
          <article
            className="testimonial-review-card"
            key={activeTestimonial.id}
            aria-live="polite"
          >
            <div className="testimonial-review-top">
              <span className="testimonial-quote-mark" aria-hidden="true">
                &#8220;
              </span>

              <div
                className="testimonial-stars"
                aria-label={`${activeTestimonial.rating} out of 5 stars`}
              >
                {Array.from(
                  { length: activeTestimonial.rating },
                  (_, index) => (
                    <span key={index} aria-hidden="true">
                      ★
                    </span>
                  )
                )}
              </div>
            </div>

            <p className="testimonial-review-text">
              "{activeTestimonial.text}"
            </p>

            <div className="testimonial-decoration" aria-hidden="true">
              <span></span>
              <span></span>
            </div>
          </article>

          {/* Center: Main Customer Image */}
          <div className="testimonial-main-image">
            <img
              key={activeTestimonial.mainImage}
              src={activeTestimonial.mainImage}
              alt={`Portrait of ${activeTestimonial.name}`}
              onError={(event) => {
                event.currentTarget.style.opacity = "0";
              }}
            />
          </div>

          {/* Right: Customer Selection Cards */}
          <div className="testimonial-customer-list">
            {testimonials.map((testimonial, index) => (
              <button
                type="button"
                key={testimonial.id}
                className={`testimonial-customer-card ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-pressed={activeIndex === index}
                aria-label={`Read testimonial from ${testimonial.name}`}
              >
                <div className="testimonial-customer-top">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="testimonial-avatar"
                  />

                  <span
                    className="testimonial-card-decoration"
                    aria-hidden="true"
                  >
                    <span></span>
                    <span></span>
                  </span>
                </div>

                <h3>{testimonial.name}</h3>
                <p>{testimonial.company}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Testimonial;