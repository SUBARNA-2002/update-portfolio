import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-400">I am Subarna Keshari Sutar, a passionate developer.</p>
      <div>
        <img
          src="https://www.subarnasutar.com.np/static/media/subarna.4e9f7a3b.jpg"
          alt="Subarna Keshari Sutar"
          className="w-64 h-64 mt-4 rounded-full border-2 border-gray-400"
        />
      </div>
    </div>
  );
};

export default Home;
