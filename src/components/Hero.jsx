import React from "react";
import tanishkaHero from "../assets/hero-image2.webp"; // Replace with Tanishka's actual photo

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Nice to meet you! I'm <em>tanishka</em>.
        </h1>
        <p>I make professional designs with a side of personality.</p>
        <a href="#artwork">
          <button className="cta-button">View Artwork</button>
        </a>
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
