import "./Business-Ideas-for-Farmers.css";
import { Link } from "react-router-dom";
import AllPagesBanner from "../components/Banner/AllPagesBanner";

const businessIdeas = [
  {
    id: 1,
    title: "Dairy Farming",
    category: "Livestock Business",
    detail1: "Products: Milk & Dairy",
    detail2: "Market: Daily Demand",
    detail3: "Opportunity: Value Addition",
    description:
      "Start a dairy farming business by raising healthy cows or buffaloes. Supply fresh milk to households, dairy shops, hotels, and local collection centers. You can also explore curd, paneer, ghee, and other dairy products.",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Cattle on a farm for dairy production",
  },
  {
    id: 2,
    title: "Goat Farming",
    category: "Livestock Business",
    detail1: "Products: Goats & Milk",
    detail2: "Market: Meat & Breeding",
    detail3: "Opportunity: Small-Scale Farming",
    description:
      "Goat farming can be started on a small or medium scale with suitable housing, nutritious feed, and proper animal care. Farmers can develop markets for goat sales, breeding animals, and milk where local demand exists.",
    image:
      "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Goats being raised on a farm",
  },
  {
    id: 3,
    title: "Poultry Farming",
    category: "Animal Husbandry",
    detail1: "Products: Eggs & Chicken",
    detail2: "Market: Retail & Wholesale",
    detail3: "Opportunity: Regular Sales",
    description:
      "Build a poultry business by raising broilers, layers, or backyard poultry according to your investment and local market. Good hygiene, suitable housing, balanced feed, and disease prevention are essential.",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Chickens in a poultry farming environment",
  },
  {
    id: 4,
    title: "Beekeeping",
    category: "Agricultural Enterprise",
    detail1: "Products: Honey & Beeswax",
    detail2: "Market: Food & Wellness",
    detail3: "Opportunity: Crop Pollination",
    description:
      "Beekeeping offers farmers an additional source of income through honey, beeswax, and related products. Learn safe hive management, seasonal flowering patterns, and responsible harvesting before expanding your apiary.",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Honeycomb and honey from beekeeping",
  },
  {
    id: 5,
    title: "Mushroom Farming",
    category: "Indoor Farming",
    detail1: "Products: Fresh Mushrooms",
    detail2: "Market: Restaurants & Retail",
    detail3: "Opportunity: Limited Space",
    description:
      "Mushroom cultivation can be developed in a controlled indoor space. Start with a suitable variety, clean growing conditions, reliable growing materials, and a clear plan for selling fresh mushrooms to local buyers.",
    image:
      "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Fresh mushrooms ready for cultivation and sale",
  },
  {
    id: 6,
    title: "Vermicomposting",
    category: "Organic Agriculture",
    detail1: "Product: Organic Compost",
    detail2: "Market: Farmers & Nurseries",
    detail3: "Opportunity: Farm Waste Reuse",
    description:
      "Convert suitable farm waste and organic materials into nutrient-rich vermicompost using earthworms. Package and sell the finished compost to gardeners, nurseries, and farmers, while improving soil management on your own farm.",
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Organic compost and soil materials",
  },
  {
    id: 7,
    title: "Fish Farming",
    category: "Aquaculture",
    detail1: "Products: Fresh Fish",
    detail2: "Market: Fish Shops & Hotels",
    detail3: "Opportunity: Pond-Based Farming",
    description:
      "Fish farming can provide an alternative agricultural income where water resources and suitable land are available. Select appropriate fish species, maintain water quality, plan feeding carefully, and identify buyers before stocking a pond.",
    image:
      "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Fish raised for aquaculture production",
  },
  {
    id: 8,
    title: "Plant Nursery Business",
    category: "Horticulture",
    detail1: "Products: Plants & Seedlings",
    detail2: "Market: Farmers & Gardeners",
    detail3: "Opportunity: Seasonal Demand",
    description:
      "Start a plant nursery by producing vegetable seedlings, fruit plants, ornamental plants, or locally suitable saplings. Success depends on healthy planting material, proper watering, good plant care, and dependable local customers.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Young plants growing in a nursery",
  },
  {
    id: 9,
    title: "Organic Vegetable Farming",
    category: "Crop Production",
    detail1: "Products: Fresh Vegetables",
    detail2: "Market: Local Shops & Families",
    detail3: "Opportunity: Direct Selling",
    description:
      "Grow vegetables using suitable organic production methods, soil management, and responsible pest control. Plan crops around local demand and explore direct sales, weekly markets, shops, and community-supported produce orders.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Fresh vegetables produced for local markets",
  },
  {
    id: 10,
    title: "Food Processing",
    category: "Agri-Based Business",
    detail1: "Products: Pickles & Packaged Foods",
    detail2: "Market: Retail & Wholesale",
    detail3: "Opportunity: Add Product Value",
    description:
      "Create additional value from farm produce through suitable activities such as cleaning, grading, drying, milling, pickling, or packaging. Choose a product based on local demand and follow applicable food safety and licensing requirements.",
    image:
      "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Food preparation and processing activity",
  },
  {
    id: 11,
    title: "Fodder Production",
    category: "Crop Production",
    detail1: "Products: Green & Dry Fodder",
    detail2: "Market: Dairy & Livestock Farms",
    detail3: "Opportunity: Local Feed Supply",
    description:
      "Cultivate suitable fodder crops to supply dairy farms and livestock owners. Select crops according to local conditions, water availability, and livestock needs, and consider storage methods for periods when fresh fodder is scarce.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Green agricultural fields suitable for fodder crops",
  },
  {
    id: 12,
    title: "Farm Equipment Rental",
    category: "Agricultural Services",
    detail1: "Services: Machinery Rental",
    detail2: "Market: Local Farmers",
    detail3: "Opportunity: Shared Equipment",
    description:
      "Offer access to tractors, tillers, seeders, sprayers, or harvesting equipment on a rental basis. Build a practical business plan around local demand, maintenance, operator availability, transport, and seasonal booking schedules.",
    image:
      "https://images.unsplash.com/photo-1592982537447-6f2a6a0e8aab?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Agricultural tractor and farm machinery",
  },
  {
    id: 13,
    title: "Strawberry Farming",
    category: "Fruit Cultivation",
    detail1: "Products: Fresh Strawberries",
    detail2: "Market: Shops & Direct Buyers",
    detail3: "Opportunity: Premium Produce",
    description:
      "Explore strawberry cultivation where climate, suitable varieties, and growing conditions support the crop. Plan irrigation, crop protection, careful harvesting, packaging, and quick delivery to maintain fruit quality and reduce losses.",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Fresh strawberries grown for market",
  },
];

const BusinessIdeasForFarmers = () => {
  return (
    <>
     <AllPagesBanner
        title="Business Ideas for Farmers"
        subtitle="Explore Profitable Agriculture Opportunities"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Business Ideas for Farmers" },
        ]}
      />

        <section className="farmer-business-section" id="business-ideas">
      <div className="farmer-business-container">
        {/* SECTION HEADING */}
        <div className="farmer-business-heading">
          <span className="farmer-business-eyebrow">
            Explore Agricultural Opportunities
          </span>

          <h2>Extra Business Ideas for Farmers</h2>

          <p>
            Discover practical farming and agriculture-based business
            opportunities. Explore new ways to use your land, agricultural
            skills, and available resources to develop additional income
            streams.
          </p>
        </div>

        {/* BUSINESS IDEA CARDS */}
        <div className="farmer-business-list">
          {businessIdeas.map((idea) => (
            <article
              className="farmer-business-card"
              id={`business-idea-${idea.id}`}
              key={idea.id}
            >
              {/* IMAGE */}
              <div className="farmer-business-image-wrap">
                <img
                  className="farmer-business-image"
                  src={idea.image}
                  alt={idea.imageAlt}
                  loading="lazy"
                />

                <span className="farmer-business-number">
                  {String(idea.id).padStart(2, "0")}
                </span>
              </div>

              {/* CONTENT */}
              <div className="farmer-business-content">
                <span className="farmer-business-category">
                  {idea.category}
                </span>

                <h3>{idea.title}</h3>

                {/* BUSINESS DETAILS */}
                <div className="farmer-business-meta">
                  <span>
                    <span className="farmer-meta-icon" aria-hidden="true">
                      ✦
                    </span>
                    {idea.detail1}
                  </span>

                  <span>
                    <span className="farmer-meta-icon" aria-hidden="true">
                      ✦
                    </span>
                    {idea.detail2}
                  </span>

                  <span>
                    <span className="farmer-meta-icon" aria-hidden="true">
                      ✦
                    </span>
                    {idea.detail3}
                  </span>
                </div>

                <p className="farmer-business-description">
                  {idea.description}
                </p>

               <Link
  to="/Business-Ideas-for-Farmers-detailed"
  className="farmer-business-readmore"
  aria-label={`Read more about ${idea.title}`}
>
  <span>Read More</span>
  {/* <span aria-hidden="true"></span> */}
</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>

  );
};

export default BusinessIdeasForFarmers;