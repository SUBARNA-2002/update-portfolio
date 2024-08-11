import React from "react";
import DummyPortfolio from "../assets/dummy-portfolio.png";
import Ytube from "../assets/Ytube.png";
import UarbanInteriors from "../assets/Urban-Interiors.png";
import Erp from "../assets/Erp-System.png";
import ExamPortal from '../assets/Exam-Portal.png';
import nike from '../assets/Nike-Landing-Page.png';
import BookHub from '../assets/Book-Hub.png';
import Netflix from '../assets/Netflix.png';
import DrumStick from '../assets/Drum-Stick.png';
import PortfolioGridx from '../assets/portfolio-gridx.png'

const Portfolio = () => {
  const projects = [
    {
      name: "Dummy Portfolio",
      image: DummyPortfolio,
      Tech: "React | Tailwind",
    },
    {
      name: "Ytube",
      image: Ytube,
      Tech: "React | Material UI | API",
    },
    {
      name: "Urban Interiors",
      image: UarbanInteriors,
      Tech: "React | Bootstrap | Nodejs | MongoDB",
    },
    {
      name: "ERP System",
      image: Erp,
      Tech: "React | Tailwind | Nodejs | MongoDB",
    },
    {
      name: "Exam Portal",
      image: ExamPortal,
      Tech: "React | Bootstrap | Nodejs | MongoDB",
    },
    {
      name: "Nike Landing Page",
      image: nike,
      Tech: "React | Tailwind",
    },
    {
      name: "Book Hub",
      image: BookHub,
      Tech: "React | Bootstrap | Nodejs",
    },
    {
      name: "Netflix",
      image: Netflix,
      Tech: "React | Tailwind",
    },
    {
      name: "Drum Stick",
      image: DrumStick,
      Tech: "HTML | CSS | JS",
    },
    {
      name: "Portfolio Gridx",
      image: PortfolioGridx,
      Tech: "React | Tailwind",
    }
  ];
  return (
    <div className="p-8 bg-gray-900 text-white h-screen overflow-y-auto pt-16 lg:pt-8">
      <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects?.map((project, index) => (
          <>
            <div className="bg-gray-800 p-4 rounded-lg">
              <img src={project.image} alt="" />
              <h2 className="text-2xl font-semibold">{project.name}</h2>
              <p className="text-gray-400">{project.Tech}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
