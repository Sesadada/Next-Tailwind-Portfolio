import React from "react";
import netflix from "../public/projects/netflix.png";
import memory from "../public/projects/memory.png";
import weather from "../public/projects/weather.png";
import ecommerce from "../public/projects/ecommerce.png";
import Project from "./Project";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full
    "
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Project
            address={netflix}
            name="Netflix App"
            des="React + Firebase + Tailwind"
          />
          <Project
            address={memory}
            name="Memory Game"
            des="Vanilla Javascript + CSS + Webpack"
          />
          <Project
            address={ecommerce}
            name="E-commerce Shop"
            des="React + Instyle CSS"
          />
          <Project
            address={weather}
            name="Weather App"
            des="Vanilla Javascript + CSS + Webpack"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
