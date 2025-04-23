import React from "react";
import tanishkaHero from "../assets/hero-image.webp";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Nice to meet you! I'm <em>tanishka</em>.
        </h1>
        <p>Professional designs with a side of personality.</p>
        <button className="cta-button">
          <a href="#contact">View Artwork</a>
        </button>
      </div>
      <div className="hero-image">
        <img
          src={tanishkaHero} // Replace with Tanishka's actual photo
          alt="Tanishka"
        />
      </div>
    </section>
  );
};

export default Hero;
