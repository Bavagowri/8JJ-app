import React from "react";
import Slider from "../components/Slider";
import './Home.css';
import NewsTicker from "../components/NewsTicker/NewsTicker";
import AllianceMembers from "../components/AllianceMembers/AllianceMembers";

const Home = () => {
  return (
    <div className="page">
      <Slider />
      <NewsTicker />
      <AllianceMembers />
    </div>
  );
};

export default Home;
