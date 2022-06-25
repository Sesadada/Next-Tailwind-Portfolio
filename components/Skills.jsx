import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-wider uppercase text-[#5651e5] ">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skill address="/../public/skills/html.png" name="HTML" />
          <Skill address="/../public/skills/css.png" name="CSS" />
          <Skill address="/../public/skills/firebase.png" name="Firebase" />
          <Skill address="/../public/skills/github1.png" name="Github" />
          <Skill address="/../public/skills/javascript.png" name="Javascript" />
          <Skill address="/../public/skills/node.png" name="Node" />
          <Skill address="/../public/skills/react.png" name="React" />
          <Skill address="/../public/skills/tailwind.png" name="Tailwind" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
