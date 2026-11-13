
import "./OurTeam.css";
import AllPagesBanner from "../components/Banner/AllPagesBanner";

const teamMembers = [
  {
    id: 1,
    name: "Chris Glasser",
    role: "Agricultural Specialist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
    alt: "Agricultural team member",
  },
  {
    id: 2,
    name: "Bradley Lawlor",
    role: "Farm Operations Manager",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85",
    alt: "Team member working with colleagues",
  },
  {
    id: 3,
    name: "Daniel Wilson",
    role: "Organic Farming Expert",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85",
    alt: "Agriculture team member portrait",
  },
  {
    id: 4,
    name: "Michael Anderson",
    role: "Crop Production Specialist",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=85",
    alt: "Crop production team member",
  },
  {
    id: 5,
    name: "James Cooper",
    role: "Agricultural Consultant",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85",
    alt: "Agricultural consultant portrait",
  },
  {
    id: 6,
    name: "Emily Parker",
    role: "Sustainable Farming Expert",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
    alt: "Sustainable farming team member",
  },
];

function SocialIcon({ type }) {
  const paths = {
    facebook: (
      <path d="M13.5 8H11V6.4c0-.8.3-1.2 1.2-1.2h1.2V2.4c-.6-.1-1.4-.2-2.3-.2-2.3 0-3.8 1.4-3.8 4V8H5v3h2.3v7h3.7v-7h2.2l.3-3Z" />
    ),
    linkedin: (
      <>
        <path d="M4 7h3v10H4zM5.5 2.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM9 7h3v1.4A3.5 3.5 0 0 1 15 6.8c3 0 3.5 2 3.5 4.5V17h-3v-5c0-1.2 0-2.7-1.7-2.7S12 10.6 12 12v5H9V7Z" />
      </>
    ),
    twitter: (
      <path d="M19.5 5.6c-.7.3-1.4.5-2.2.6a3.8 3.8 0 0 0 1.7-2.1 7.6 7.6 0 0 1-2.4.9 3.8 3.8 0 0 0-6.5 3.5 10.8 10.8 0 0 1-7.8-4 3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5v.1a3.8 3.8 0 0 0 3.1 3.7c-.6.2-1.2.2-1.7.1a3.8 3.8 0 0 0 3.5 2.6A7.7 7.7 0 0 1 2 17.2a10.8 10.8 0 0 0 16.6-9.1v-.5a7.7 7.7 0 0 0 1.9-2Z" />
    ),
    youtube: (
      <path d="M19.6 6.2a2.4 2.4 0 0 0-1.7-1.7C16.4 4.1 12 4.1 12 4.1s-4.4 0-5.9.4a2.4 2.4 0 0 0-1.7 1.7A25 25 0 0 0 4 10a25 25 0 0 0 .4 3.8 2.4 2.4 0 0 0 1.7 1.7c1.5.4 5.9.4 5.9.4s4.4 0 5.9-.4a2.4 2.4 0 0 0 1.7-1.7A25 25 0 0 0 20 10a25 25 0 0 0-.4-3.8ZM10.5 12.5v-5l4.3 2.5-4.3 2.5Z" />
    ),
  };

  return (
    <svg
      className="our-team-social-svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

function OurTeam() {
  return (
    <>
     <AllPagesBanner
        title="Our Team"
        subtitle="Explore Profitable Agriculture Opportunities"
        breadcrumbs={[
          { label: "Home", path: "/OurTeam" },
          { label: "Our Team" },
        ]}
      />
    <main className="our-team-page">
      

      {/* Team Members */}
      <section className="our-team-section">
        <div className="our-team-container">
          <div className="our-team-grid">
            {teamMembers.map((member) => (
              <article className="our-team-card" key={member.id}>
                <img
                  className="our-team-photo"
                  src={member.image}
                  alt={member.alt}
                  loading={member.id <= 3 ? "eager" : "lazy"}
                />

                <div className="our-team-card-shade" />

                {/* Social Icons */}
                <div className="our-team-socials">
                  {["facebook", "linkedin", "twitter", "youtube"].map(
                    (social) => (
                      <a
                        key={social}
                        href="#team-social"
                        className="our-team-social-link"
                        aria-label={`${member.name} on ${social}`}
                        onClick={(event) => event.preventDefault()}
                      >
                        <SocialIcon type={social} />
                      </a>
                    )
                  )}
                </div>

                {/* Member Details */}
                <div className="our-team-member-info">
                  <h2>{member.name}</h2>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default OurTeam;