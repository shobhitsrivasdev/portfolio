import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-blue-500 p-4 transform transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <a
            href={project.link}
            className="flex items-center justify-center text-white"
          >
            View Project <ExternalLink className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
