import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./AgricultureServices.css";

const products = [
  {
    id: 1,
    title: "Digital Farming",
    price: "₹850",
    oldPrice: "₹1,000",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Fresh organic vegetables",
  },
  {
    id: 2,
    title: "Contract Farming",
    price: "₹1,250",
    oldPrice: "₹1,500",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Fresh farm produce",
  },
  {
    id: 3,
    title: "Smart Irrigation",
    price: "₹1,450",
    oldPrice: "₹1,700",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Freshly harvested vegetables",
  },
  {
    id: 4,
    title: "Soil Testing",
    price: "₹950",
    oldPrice: "₹1,200",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Green produce from local farms",
  },
  {
    id: 5,
    title: "Organic Farming",
    price: "₹1,100",
    oldPrice: "₹1,350",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A basket of fresh vegetables",
  },
];

function ArrowIcon({ direction = "right" }) {
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
      {direction === "left" ? (
        <>
          <path d="m15 18-6-6 6-6" />
        </>
      ) : (
        <>
          <path d="m9 18 6-6-6-6" />
        </>
      )}
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  );
}

function ProductCard({ product, isFavorite, onFavorite, onAction }) {
  return (
    <article className="agri-product-card">
      <div className="agri-product-image">
        <img src={product.image} alt={product.imageAlt} loading="lazy" />

        <button
          type="button"
          className={`agri-favorite ${isFavorite ? "is-favorite" : ""}`}
          onClick={() => onFavorite(product.id)}
          aria-label={
            isFavorite
              ? `Remove ${product.title} from favorites`
              : `Add ${product.title} to favorites`
          }
          aria-pressed={isFavorite}
        >
          ♥
        </button>

        <div className="agri-product-actions">
          <button
            type="button"
            className="agri-action-button"
            aria-label={`View ${product.title}`}
            onClick={() => onAction("view", product)}
          >
            <EyeIcon />
          </button>

          <button
            type="button"
            className="agri-action-button"
            aria-label={`Add ${product.title} to cart`}
            onClick={() => onAction("cart", product)}
          >
            <CartIcon />
          </button>

          <button
            type="button"
            className="agri-action-button"
            aria-label={`More details about ${product.title}`}
            onClick={() => onAction("details", product)}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      <div className="agri-product-details">
        <h2>{product.title}</h2>

<div className="agri-product-bottom">
  <Link
    to="/Service"
    className="agri-read-more"
    aria-label={`Read more about ${product.title}`}
  >
    Read More
    <span aria-hidden="true">↗</span>
  </Link>
</div>

        {/* <div className="agri-product-bottom">
          <p className="agri-price">
            {product.price}
            <del>{product.oldPrice}</del>
          </p>

          <span
            className="agri-rating"
            aria-label={`${product.rating} out of 5 stars`}
          >
            {"★".repeat(product.rating)}
          </span>
        </div> */}
      </div>
    </article>
  );
}

export default function AgricultureServices() {
  const trackRef = useRef(null);
  const firstCardRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [favorites, setFavorites] = useState([]);
  const [message, setMessage] = useState("");

  const maxIndex = Math.max(0, products.length - visibleCards);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 640) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex((index) =>
      Math.min(index, Math.max(0, products.length - visibleCards))
    );
  }, [visibleCards]);

  useEffect(() => {
    const track = trackRef.current;
    const card = firstCardRef.current;

    if (!track || !card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap) || 0;

    track.style.transform = `translateX(-${
      currentIndex * (cardWidth + gap)
    }px)`;
  }, [currentIndex, visibleCards]);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id]
    );
  };

  const handleProductAction = (action, product) => {
    if (action === "view") {
      setMessage(`You selected ${product.title}.`);
    } else if (action === "cart") {
      setMessage(`${product.title} added to your demo cart.`);
    } else {
      setMessage(`More information about ${product.title} coming soon.`);
    }
  };

  const previousSlide = () => {
    setCurrentIndex((index) => Math.max(0, index - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((index) => Math.min(maxIndex, index + 1));
  };

  return (
    <section className="agri-services-section" id="services">
      <div className="agri-services-container">
        <header className="agri-services-heading">
          <div className="agri-heading-left">
            <span className="agri-section-label">
              Our Agriculture Services
            </span>

            <h1>
              Growing Together.
              <br />
              Nurturing the Future.
            </h1>
          </div>

          <div className="agri-heading-right">
            <p>
              At Broget, we provide smart agricultural solutions and
              fresh farm products to help farmers grow sustainably
              and build a greener future.
            </p>

            <Link to="/Service" className="agri-shop-button">
  Explore Services <span aria-hidden="true">↗</span>
</Link>
          </div>
        </header>

        <div className="agri-slider-viewport">
          <div className="agri-services-track" ref={trackRef}>
            {products.map((product, index) => (
              <div
                className="agri-product-slide"
                key={product.id}
                ref={index === 0 ? firstCardRef : null}
              >
                <ProductCard
                  product={product}
                  isFavorite={favorites.includes(product.id)}
                  onFavorite={toggleFavorite}
                  onAction={handleProductAction}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="agri-slider-controls">
          <button
            type="button"
            className="agri-slider-arrow"
            onClick={previousSlide}
            disabled={currentIndex === 0}
            aria-label="Previous products"
          >
            <ArrowIcon direction="left" />
          </button>

          <button
            type="button"
            className="agri-slider-arrow"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            aria-label="Next products"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>

        <p className="agri-slider-message" aria-live="polite">
          {message ||
            `Showing ${currentIndex + 1}–${Math.min(
              currentIndex + visibleCards,
              products.length
            )} of ${products.length} products`}
        </p>
      </div>
    </section>
  );
}
