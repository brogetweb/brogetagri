
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LatestGovernmentSchemes from "./pages/LatestGovernmentSchemes";
import AboutAgriculture from "./pages/AboutAgriculture";
import AgricultureServices from "./pages/AgricultureServices";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Banner/Hero";
import Navbar from "./components/Navbar/Navbar";
import GovernmentSchemesMain from "./pages/Government-Schemes";
import ContactUs from "./pages/ContactUs";
import Service from "./pages/Service";
import ServiceDetailePage from "./pages/ServiceDetailePage";
import BusinessIdeasHome from "./components/Business-Ideas-Home";
import BusinessIdeasForFarmers from "./pages/Business-Ideas-for-Farmers";
import BusinessIdeasForFarmersDetailed from "./pages/Business-Ideas-for-Farmers-detailed";
import GovernmentSchemes from "./components/GovernmentSchemes";
import WhyChooseUs from "./pages/WhyChooseUs";
import OurTeam from "./pages/OurTeam";
import Testimonial from "./pages/Testimonial";
// import BuilderDemo from "./pages/BuilderDemo";



function Home() {
  return (
    <>  
      <Hero />
      <LatestGovernmentSchemes />
      <AboutAgriculture />
      <AgricultureServices />
      <BusinessIdeasHome/>
      <WhyChooseUs/>
      <GovernmentSchemes/>
<Testimonial />
      {/* <section
        id="get-started"
        style={{ minHeight: "500px", padding: "80px 7%" }}
      >
        <h2>Start Your Organic Garden</h2>
        <p>
          Discover how to grow fresh, healthy vegetables at home.
        </p>
      </section>

      <section
        id="contact"
        style={{ minHeight: "500px", padding: "80px 7%" }}
      >
        <h2>Contact Us</h2>
        <p>
          Get in touch with our organic farming team.
        </p>
      </section> */}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Government-Schemes" element={<GovernmentSchemesMain />}/>
      <Route
  path="/Business-Ideas-for-Farmers"
  element={<BusinessIdeasForFarmers />}
/>

 <Route
      path="/Business-Ideas-for-Farmers-detailed"
      element={<BusinessIdeasForFarmersDetailed />}
    /> 
        <Route path="/ContactUs" element={<ContactUs />} />
 <Route path="/Service" element={<Service />} />
<Route
  path="/ServiceDetailePage"
  element={<ServiceDetailePage />}
/>

<Route path="/OurTeam" element={< OurTeam/>} />
<Route path="/Testimonial" element={<Testimonial />} />
{/* <Route path="/BuilderDemo" element={<BuilderDemo />} /> */}

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
