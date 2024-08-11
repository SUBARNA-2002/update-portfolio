import React from "react";
import mernStack1 from "../assets/mernsStack.jpg";
import mernStack2 from "../assets/mernstack2.png";
const Skills = () => {
  const skills = [
    {
      name: "HTML",
    },
    {
      name: "CSS/Tailwind CSS/Bootstrap",
    },
    {
      name: "JavaScript",
    },
    {
      name: "React",
    },
    {
      name: "React Native",
    },
    {
      name: "Node.js",
    },
  ];
  return (
    <div className="p-8 bg-gray-900 text-white h-screen pt-16 lg:pt-8 overflow-y-scroll">
      <h1 className="text-4xl font-bold mb-4">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills?.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:scale-105 p-5 h-40 flex justify-center items-center hover:cursor-pointer rounded-lg text-center"
          >
            <h2 className="text-2xl font-semibold">{skill.name}</h2>
            {/* <p className="text-gray-400">{project.Tech}</p> */}
          </div>
        ))}
      </div>
      <div className="pt-4">
        <h1 className="text-4xl font-bold mb-4">Certificate</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex gap-3 bg-gray-800 p-3 rounded">
            <div>
              <img
                className="rounded"
                src={mernStack1}
                alt="..."
                height={300}
                width={300}
              />
            </div>
            <div>
              <div className="text-2xl font-semibold">MERN Stack</div>
              <div className="text-lg font-semibold">
                Syllogistek Systems Private Ltd.
              </div>
              <div className="font-semibold">Internship</div>
              <div className="font-semibold">Jun 2022 ‑ Jul 2022</div>
              <div className="p-2 rounded bg-gray-700 text-center mt-4 inline-block px-14 hover:bg-gray-600 cursor-pointer">
                Certificate
              </div>
            </div>
          </div>
          <div className="flex gap-3 bg-gray-800 p-3 rounded">
            <div>
              <img
                className="rounded"
                src={mernStack2}
                alt="..."
                height={300}
                width={300}
              />
            </div>
            <div>
              <div className="text-2xl font-semibold">MERN Stack</div>
              <div className="text-lg font-semibold">PrepLabs.</div>
              <div className="font-semibold">Internship</div>
              <div className="font-semibold">May 2023 ‑ June 2023</div>
              <div className="p-2 rounded bg-gray-700 text-center mt-4 inline-block px-14 hover:bg-gray-600 cursor-pointer">
                Certificate
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
