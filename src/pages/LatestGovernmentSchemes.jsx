
import "./LatestGovernmentSchemes.css";

const schemeUpdates = [
  "PM-KISAN Samman Nidhi",
  "Pradhan Mantri Fasal Bima Yojana",
  "Kisan Credit Card Scheme",
  "PM Krishi Sinchayee Yojana",
  "Soil Health Card Scheme",
  "National Agriculture Market (e-NAM)",
];

const LatestGovernmentSchemes = () => {
  return (
    <section className="gov-scheme-ticker">
      <div className="gov-ticker-track">

        {/* Original announcements */}
        <div className="gov-ticker-group">
          {schemeUpdates.map((scheme, index) => (
            <div className="gov-ticker-item" key={index}>
              <span>{scheme}</span>
              <span className="gov-ticker-star">✱</span>
            </div>
          ))}
        </div>

        {/* Duplicate for seamless infinite scrolling */}
        <div className="gov-ticker-group" aria-hidden="true">
          {schemeUpdates.map((scheme, index) => (
            <div className="gov-ticker-item" key={index}>
              <span>{scheme}</span>
              <span className="gov-ticker-star">✱</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestGovernmentSchemes;
