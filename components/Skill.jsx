import Image from "next/image";
import React from "react";

const Skill = ({ address, name }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={address} alt={name} width="64px" height="64px" />
          <div className="flex flex-col items-center justify-center">
            {" "}
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
