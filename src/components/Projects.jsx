import React, { useState, useEffect } from "react";
import artwork1 from "../assets/artwork1.webp";
import artwork2 from "../assets/artwork2.webp";
import artwork3 from "../assets/artwork3.webp";
import artwork4 from "../assets/artwork4.webp";
import artwork5 from "../assets/artwork5.webp";

const Projects = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const artworks = [
    { id: 1, src: artwork1, title: "Artwork 1" },
    { id: 2, src: artwork2, title: "Artwork 2" },
    { id: 3, src: artwork3, title: "Artwork 3" },
    { id: 4, src: artwork4, title: "Artwork 4" },
    { id: 5, src: artwork5, title: "Artwork 5" },
  ];

  const openPreview = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const closePreview = () => {
    setSelectedArtwork(null);
  };

  // Disable scrolling when the modal is open
  useEffect(() => {
    if (selectedArtwork) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedArtwork]);

  return (
    <section className="projects" id="artwork">
      <h2 className="projects-title">
        My <span>Artwork</span>
      </h2>

      <div className="projects-grid">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="project-item"
            onClick={() => openPreview(artwork)}
          >
            <img src={artwork.src} alt={artwork.title} />
          </div>
        ))}
      </div>

      {selectedArtwork && (
        <div className="preview-modal" onClick={closePreview}>
          <div className="preview-content" onClick={(e) => e.stopPropagation()}>
            {/* <button className="close-icon" onClick={closePreview}>
              &times;
            </button> */}
            <img src={selectedArtwork.src} alt={selectedArtwork.title} />
            {/* <p>{selectedArtwork.title}</p> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
