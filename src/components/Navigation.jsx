import React from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({ isOpen, toggleMenu }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold dark:text-white">
            Shobhit Srivastava
          </span>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-600 dark:text-white">
              About
            </a>
            <a
              href="#experience"
              className="hover:text-blue-600 dark:text-white"
            >
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-600 dark:text-white">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-600 dark:text-white">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:text-white">
              Contact
            </a>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800">
            <a
              href="#about"
              className="block px-3 py-2 hover:bg-gray-50 dark:text-white"
            >
              About
            </a>
            <a
              href="#experience"
              className="block px-3 py-2 hover:bg-gray-50 dark:text-white"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 hover:bg-gray-50 dark:text-white"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 hover:bg-gray-50 dark:text-white"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 hover:bg-gray-50 dark:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
