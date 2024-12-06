import React from "react";

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="relative">
      {experiences.map((exp, index) => (
        <div key={index} className="flex mb-8">
          <div className="flex flex-col items-center mr-4">
            <div className="w-3 h-3 bg-blue-600 rounded-full" />
            <div className="w-0.5 h-full bg-gray-200" />
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all w-full">
            <h3 className="text-xl font-semibold dark:text-white">
              {exp.company}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{exp.role}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              {exp.duration}
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
