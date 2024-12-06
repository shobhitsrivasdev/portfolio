import React, { useState } from "react";
import { Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import Navigation from "./components/Navigation";
import TypeWriter from "./components/TypeWriter";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectCard from "./components/ProjectCard";
import SkillBar from "./components/SkillBar";
import ThemeToggle from "./components/ThemeToggle";
import { experiences, projects, skills } from "./data/portfolioData";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "dark" : ""
      } bg-white dark:bg-gray-900`}
    >
      <Navigation
        isOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">
            Hi, I'm Shobhit
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 dark:text-gray-200">
            I'm a{" "}
            <TypeWriter
              words={[
                "Frontend Developer",
                "React.js Expert",
                "UI/UX Enthusiast",
                "Software Engineer",
              ]}
            />
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/yourusername"
              className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shobhitcse0710@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            Experience
          </h2>
          <ExperienceTimeline experiences={experiences} />
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                  {category}
                </h3>
                {skillList.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>
          <a
            href="mailto:shobhitcse0710@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Me <ChevronRight className="ml-2" />
          </a>
        </section>
      </main>

      <ThemeToggle isDark={isDarkMode} toggle={toggleDarkMode} />

      <footer className="bg-white dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Shobhit Srivastava. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
