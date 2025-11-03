import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import './Home.css';
import NewsTicker from "../../components/NewsTicker/NewsTicker";
import AllianceMembers from "../../components/AllianceMembers/AllianceMembers";
import ContactUs from "../../components/ContactUs/ContactUs";
import NewsPreview from "../../components/NewsPreview/NewsPreview";
import SocialGlobalBanner from "../../components/SocialGlobalBanner/SocialGlobalBanner";



const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToNews) {
      const newsSection = document.getElementById("news-section");
      if (newsSection) {
        setTimeout(() => {
          newsSection.scrollIntoView({ behavior: "smooth" });
        }, 300); // give time for render
      }
    }
  }, [location]);

  return (
    <div className="page">
      <Slider />
      <NewsTicker />
      <AllianceMembers />
      <ContactUs />
      <div id="news-section">
        <NewsPreview />
      </div>
      <SocialGlobalBanner />
    </div>
  );
};

export default Home;
