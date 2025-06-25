import React, { useState, useEffect } from "react";
import artwork1 from "../assets/posters/artwork1.webp";
import artwork2 from "../assets/posters/artwork2.webp";
import artwork3 from "../assets/posters/artwork3.webp";
import artwork4 from "../assets/posters/artwork4.webp";
import artwork5 from "../assets/posters/artwork5.webp";
import artwork6 from "../assets/posters/artwork6.webp";
import artwork7 from "../assets/posters/artwork7.webp";
import artwork8 from "../assets/posters/artwork8.webp";
import artwork9 from "../assets/posters/artwork9.webp";
import artwork10 from "../assets/posters/artwork10.webp";
import artwork11 from "../assets/posters/artwork11.webp";
import artwork12 from "../assets/posters/artwork12.webp";
import artwork13 from "../assets/posters/artwork13.webp";
import artwork14 from "../assets/posters/artwork14.webp";
import banner1 from "../assets/banners/banner1.webp";
import banner2 from "../assets/banners/banner2.webp";

const Projects = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [activeTab, setActiveTab] = useState("Posters");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const artworks = [
    { id: 1, src: artwork1, title: "", type: "Posters" },
    { id: 2, src: artwork2, title: "", type: "Posters" },
    { id: 3, src: artwork3, title: "", type: "Posters" },
    { id: 4, src: artwork4, title: "", type: "Posters" },
    { id: 5, src: artwork5, title: "", type: "Posters" },
    { id: 6, src: artwork6, title: "", type: "Posters" },
    { id: 7, src: artwork7, title: "", type: "Posters" },
    { id: 8, src: artwork8, title: "", type: "Posters" },
    { id: 9, src: artwork9, title: "", type: "Posters" },
    { id: 10, src: artwork10, title: "", type: "Posters" },
    { id: 11, src: artwork11, title: "", type: "Posters" },
    { id: 12, src: artwork12, title: "", type: "Posters" },
    { id: 13, src: artwork13, title: "", type: "Posters" },
    { id: 14, src: artwork14, title: "", type: "Posters" },
    { id: 15, src: banner1, title: "", type: "Banners" },
    { id: 16, src: banner2, title: "", type: "Banners" },
  ];

  const tabTypes = ["Posters", "Banners", "Thumbnails"];

  const getGridClass = () => {
    if (activeTab === "Posters") return "projects-grid posters-grid";
    if (activeTab === "Banners") return "projects-grid banners-grid";
    if (activeTab === "Thumbnails") return "projects-grid thumbnails-grid";
    return "projects-grid";
  };

  const openPreview = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const closePreview = () => {
    setSelectedArtwork(null);
  };

  useEffect(() => {
    if (selectedArtwork) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedArtwork]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".tab-dropdown")) setDropdownOpen(false);
    };
    if (dropdownOpen) {
      window.addEventListener("mousedown", handleClick);
    }
    return () => window.removeEventListener("mousedown", handleClick);
  }, [dropdownOpen]);

  return (
    <section className="projects" id="artwork">
      <div className="projects-header">
        <h2 className="projects-title">
          My <span>Artwork</span>
        </h2>
        {/* Dropdown Tab Menu */}
        <div className="tab-dropdown">
          <button
            className="tab-dropdown-toggle"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            {activeTab}{" "}
            <span className="tab-dropdown-arrow">
              {dropdownOpen ? "▲" : "▼"}
            </span>
          </button>
          {dropdownOpen && (
            <div className="tab-dropdown-menu">
              {tabTypes.map((type) => (
                <button
                  key={type}
                  className={`tab-dropdown-item${
                    activeTab === type ? " active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab(type);
                    setDropdownOpen(false);
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Filtered Grid */}
      <div className={getGridClass()}>
        {artworks
          .filter((artwork) => artwork.type === activeTab)
          .map((artwork) => (
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
            <img src={selectedArtwork.src} alt={selectedArtwork.title} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
