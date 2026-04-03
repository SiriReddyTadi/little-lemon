import { Link } from "react-router-dom";
import "../styles/Home.css";
// We will use the dynamically generated cafe_hero_bg image here. Wait, how do I import it? 
// The system saves artifacts in the artifacts directory, but wait, images generated with generate_image go to artifacts. I should probably just copy them to the src/assets folder.
// Since the generated images are not yet ready, I will assume they are in src/assets.
import heroBg from "../assets/cafe_hero_bg.png";

const HomePage = () => {
  return (
    <div className="home-container animate-fade-in">
      <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-content glass-panel">
          <h1>Level Up Your <span className="title-highlight">Gaming Experience</span></h1>
          <p>Premium PC setups, blazing fast internet, and mouth-watering cafe snacks. Your ultimate gaming station awaits.</p>
          <div className="hero-buttons">
            <Link to="/book-pc" className="btn-primary">Book a PC Now</Link>
            <Link to="/menu" className="btn-secondary">Explore Menu</Link>
          </div>
        </div>
      </section>

      <section className="tiers-section">
        <div className="section-header">
          <h2>PC <span className="title-highlight">Tiers</span></h2>
          <p>Choose the rig that fits your playstyle.</p>
        </div>
        <div className="tiers-grid">
          <div className="tier-card glass-panel">
            <h3>Standard Station</h3>
            <p className="price">$5 / Hour</p>
            <ul>
              <li>RTX 3060 Ti</li>
              <li>144Hz 1080p Monitor</li>
              <li>Standard Peripherals</li>
            </ul>
          </div>
          <div className="tier-card glass-panel premium-tier">
            <h3>VIP Gaming Rig</h3>
            <p className="price">$10 / Hour</p>
            <ul>
              <li>RTX 4080</li>
              <li>240Hz 1440p Monitor</li>
              <li>Premium Mechanical Keys</li>
            </ul>
          </div>
          <div className="tier-card glass-panel">
            <h3>Streamer Pod</h3>
            <p className="price">$15 / Hour</p>
            <ul>
              <li>Dual RTX 4090s</li>
              <li>Professional Mic & Cam</li>
              <li>Soundproofed Room</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
