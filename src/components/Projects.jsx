import React from "react";

const Projects = () => {
  const artworks = [
    { id: 1, src: "https://picsum.photos/400/300", title: "Artwork 1" }, // Landscape
    { id: 2, src: "https://picsum.photos/300/400", title: "Artwork 2" }, // Portrait
    { id: 3, src: "https://picsum.photos/500/300", title: "Artwork 3" }, // Landscape
    { id: 4, src: "https://picsum.photos/300/500", title: "Artwork 4" }, // Portrait
    { id: 5, src: "https://picsum.photos/400/400", title: "Artwork 5" }, // Square
    { id: 6, src: "https://picsum.photos/600/400", title: "Artwork 6" }, // Landscape
  ];

  return (
    <section className="projects">
      <h2 className="projects-title">My Artwork</h2>
      <div className="projects-grid">
        {artworks.map((artwork) => {
          const isLandscape =
            artwork.src.includes("400/300") || artwork.src.includes("500/300");
          const isPortrait =
            artwork.src.includes("300/400") || artwork.src.includes("300/500");

          return (
            <div
              key={artwork.id}
              className={`project-item ${isLandscape ? "landscape" : ""} ${
                isPortrait ? "portrait" : ""
              }`}
            >
              <img src={artwork.src} alt={artwork.title} />
              <div className="project-overlay">
                <p>{artwork.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
