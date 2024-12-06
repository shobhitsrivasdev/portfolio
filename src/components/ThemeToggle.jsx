import React from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="fixed bottom-4 right-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
    >
      {isDark ? (
        <Sun className="text-yellow-500" />
      ) : (
        <Moon className="text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
