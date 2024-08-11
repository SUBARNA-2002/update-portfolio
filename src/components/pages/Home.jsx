import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-2">
      <h1 className="text-4xl font-semibold mb-4">Hey!👋I'am</h1>
      <p className="text-6xl text-gray-400 font-bold mb-4">Subarna Keshari Sutar</p>
      <div className="text-xl text-white font-bold mb-4">Web Developer</div>
      <div className="text-gray-400 text-xl">
        Dedicated web developer with a fervent ambition to bring
        about positive change through innovative digital solutions
      </div>
      {/* <div>
        <img
          src="https://www.subarnasutar.com.np/static/media/subarna.4e9f7a3b.jpg"
          alt="Subarna Keshari Sutar"
          className="w-64 h-64 mt-4 rounded-full border-2 border-gray-400"
        />
      </div> */}
    </div>
  );
};

export default Home;
