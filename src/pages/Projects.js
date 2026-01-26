import React, { useState } from "react";

const projects = [
  {
    name: "E-Commerce Store",
    image: "/images/pro01.png",
    link: "https://e-commerce-zeta-peach.vercel.app",
  },
  {
    name: "FG School Project",
    image: "/images/school.png",
    link: "https://school-frontend-lsg8.vercel.app/",
  },
  {
    name: "Qlab",
    image: "/images/qlab1.png",
    link: "https://q-lab.vercel.app",
  },
  {
    name: "Tic-Tac-Toe Game",
    image: "/images/tictactoe.png",
    link: "https://tic-tac-toe-game-lilac-mu.vercel.app/",
  },
  {
    name: "NetFlix",
    image: "/images/net2.png",
    link: "https://net-flix-iota.vercel.app",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  };

  return (
    <div className="projects-section text-center p-10 bg-transparent from-purple-500 to-blue-500 relative">
      <h2 className="text-4xl font-bold mb-12 animate-glow-text text-white">
        My Projects
      </h2>

      {/* Top two projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto max-w-screen-lg mb-4">
        {projects.slice(0, 2).map((project, index) => (
          <div
            key={index}
            className="project-card transform transition-all duration-300 bg-white p-4 rounded-lg shadow-lg relative overflow-hidden hover:scale-105 hover:shadow-2xl"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-[#f3661d] mb-2">{project.name}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white bg-[#f3661d] py-1 px-3 rounded-full transition-all duration-300 ease-in-out transform hover:bg-[#d3571a] hover:shadow-lg hover:scale-105"
            >
              View Project
            </a>
            {showTooltip && hoveredIndex === index && (
              <div className="tooltip absolute left-1/2 transform -translate-x-1/2 top-14 -mt-2 bg-gradient-to-r from-purple-300 to-blue-300 text-black p-2 rounded-md shadow-lg transition-all duration-300 z-10">
                Explore the features of this project!
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Last three projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-4 mx-auto max-w-screen-lg">
        {projects.slice(2).map((project, index) => (
          <div
            key={index + 2}
            className="project-card transform transition-all duration-300 bg-white p-4 rounded-lg shadow-lg relative overflow-hidden hover:scale-105 hover:shadow-2xl"
            onMouseEnter={() => handleMouseEnter(index + 2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-[#f3661d] mb-2">{project.name}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white bg-[#f3661d] py-1 px-3 rounded-full transition-all duration-300 ease-in-out transform hover:bg-[#d3571a] hover:shadow-lg hover:scale-105"
            >
              View Project
            </a>
            {showTooltip && hoveredIndex === index + 2 && (
              <div className="tooltip absolute left-1/2 transform -translate-x-1/2 top-14 -mt-2 bg-gradient-to-r from-purple-300 to-blue-300 text-black p-2 rounded-md shadow-lg transition-all duration-300 z-10">
                Dive into the details of this amazing project!
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
