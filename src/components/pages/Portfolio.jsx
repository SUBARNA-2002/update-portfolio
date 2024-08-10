import React from "react";

const Portfolio = () => {
  return (
    <div className="p-8 bg-gray-900 text-white h-screen">
      <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold">Project 1</h2>
          <p className="text-gray-400">Description of the project...</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold">Project 2</h2>
          <p className="text-gray-400">Description of the project...</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold">Project 3</h2>
          <p className="text-gray-400">Description of the project...</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
