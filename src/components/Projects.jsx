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

const posters = [
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
];

const banners = [
  { id: 15, src: banner1, title: "", type: "Banners" },
  { id: 16, src: banner2, title: "", type: "Banners" },
];

// Add your thumbnails array here if you have images for it
const thumbnails = [
  // { id: 17, src: thumbnail1, title: "", type: "Thumbnails" },
  // ...
];

const tabTypes = ["Posters", "Banners"];

const Projects = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [activeTab, setActiveTab] = useState("Posters");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Combine all artworks for grid display
  const artworks = [
    ...posters,
    ...banners,
    ...thumbnails,
  ];

  // Get the array for the current tab
  const getCurrentArray = () => {
    if (activeTab === "Posters") return posters;
    if (activeTab === "Banners") return banners;
    if (activeTab === "Thumbnails") return thumbnails;
    return [];
  };

  // When opening preview, set the carousel index to the clicked image
  const openPreview = (artwork) => {
    const currentArray = getCurrentArray();
    const idx = currentArray.findIndex((a) => a.id === artwork.id);
    setCarouselIndex(idx === -1 ? 0 : idx);
    setSelectedArtwork(artwork);
  };

  const closePreview = () => {
    setSelectedArtwork(null);
  };

  // Carousel navigation
  const handlePrev = () => {
    const currentArray = getCurrentArray();
    setCarouselIndex((prev) =>
      prev === 0 ? currentArray.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    const currentArray = getCurrentArray();
    setCarouselIndex((prev) =>
      prev === currentArray.length - 1 ? 0 : prev + 1
    );
  };

  // Update selectedArtwork when carouselIndex changes
  useEffect(() => {
    if (selectedArtwork) {
      const currentArray = getCurrentArray();
      setSelectedArtwork(currentArray[carouselIndex]);
    }
    // eslint-disable-next-line
  }, [carouselIndex]);

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

  // Track loading of images for the current tab
  useEffect(() => {
    setImagesLoaded(false);
    const currentArray = getCurrentArray();
    if (currentArray.length === 0) {
      setImagesLoaded(true);
      return;
    }
    let loaded = 0;
    currentArray.forEach((artwork) => {
      const img = new window.Image();
      img.src = artwork.src;
      img.onload = img.onerror = () => {
        loaded += 1;
        if (loaded === currentArray.length) setImagesLoaded(true);
      };
    });
  }, [activeTab]);

  const getGridClass = () => {
    if (activeTab === "Posters") return "projects-grid posters-grid";
    if (activeTab === "Banners") return "projects-grid banners-grid";
    if (activeTab === "Thumbnails") return "projects-grid thumbnails-grid";
    return "projects-grid";
  };

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
      <div className={getGridClass() + " projects-fixed-height"}>
        {!imagesLoaded ? (
          // Skeleton loader grid
          <div className="projects-skeleton-grid">
            {Array.from({ length: getCurrentArray().length || 6 }).map((_, i) => (
              <div className="project-skeleton" key={i}></div>
            ))}
          </div>
        ) : (
          getCurrentArray().map((artwork, idx) => (
            <div
              key={artwork.id}
              className="project-item"
              onClick={() => openPreview(artwork)}
            >
              <img src={artwork.src} alt={artwork.title} />
            </div>
          ))
        )}
      </div>

      {selectedArtwork && (
        <div className="preview-modal" onClick={closePreview}>
          <div className="preview-close-btn-container">
            <button
              className="preview-close-btn"
              onClick={(e) => {
                e.stopPropagation();
                closePreview();
              }}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <div
            className="preview-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              if (e.touches.length === 1) {
                e.currentTarget.touchStartX = e.touches[0].clientX;
              }
            }}
            onTouchEnd={(e) => {
              if (typeof e.currentTarget.touchStartX !== "number") return;
              const touchEndX = e.changedTouches[0].clientX;
              const diff = touchEndX - e.currentTarget.touchStartX;
              const threshold = 50; // Minimum px to trigger swipe
              if (diff > threshold) {
                handlePrev();
              } else if (diff < -threshold) {
                handleNext();
              }
              e.currentTarget.touchStartX = undefined;
            }}
          >
            <button className="carousel-btn prev" onClick={handlePrev} aria-label="Previous">
              &#8592;
            </button>
            <img src={selectedArtwork.src} alt={selectedArtwork.title} />
            <button className="carousel-btn next" onClick={handleNext} aria-label="Next">
              &#8594;
            </button>
          </div>
          <div className="carousel-cards">
            {getCurrentArray().map((artwork, idx) => (
              <button
                key={artwork.id}
                className={`carousel-card${carouselIndex === idx ? " active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCarouselIndex(idx);
                }}
              >
                <img src={artwork.src} alt={artwork.title} />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
