import React, { useState } from "react";
import tanishkaHero from "../assets/hero-image2.webp"; // Replace with Tanishka's actual photo

const Hero = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true); // State to control popup visibility

  const closePopup = () => {
    setIsPopupVisible(false); // Close the popup
  };

  return (
    <>
      {isPopupVisible && (
        <div className="popup-modal">
          <div className="popup-content">
            <h2>
              Happy Birthday <em style={{ color: "#32a9d5" }}>Tanishka!</em>
            </h2>
            <p>
              Here is a small gift from tumhare bande ka dost and uski bhabhi.
              Jug Jug Jeeyo!{" "}
            </p>
            <button className="close-popup" onClick={closePopup}>
              Continue to website
            </button>
          </div>
        </div>
      )}

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
            loading="eager"
            decoding="async"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
