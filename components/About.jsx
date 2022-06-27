import { useState } from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex justify-center items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>

          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not your normal developer</p>
          <p className="py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eos
            a nobis, corporis ea excepturi vitae voluptatem dolore delectus nisi
            rerum? Dicta consequatur perferendis sit fugiat, expedita hic quod
            ipsa modi veritatis odit praesentium porro ut exercitationem nobis
            pariatur doloremque voluptatibus cupiditate ea delectus magnam vitae
            ullam. Iste earum, eligendi modi voluptates adipisci non nam
            officiis accusantium vitae, aliquid dolore, eius libero optio at
            quia reprehenderit in consectetur deserunt facere similique.
            Temporibus laboriosam voluptates dicta accusamus cumque cupiditate
            aspernatur similique quod quae error eum sunt maxime quia voluptate,
            totam sequi? Exercitationem repellendus a blanditiis possimus
            dolores saepe harum reiciendis fugit?
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out my latest projects
          </p>
        </div>
        <div className="md:w-64 md:h-64 md:mt-28 m-auto mt-8 w-96 h-96 relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
          <Image
            className="cursor-pointer rounded-xl"
            src="https://res.cloudinary.com/sato-sato/image/upload/ar_1.0,c_fill,g_face/v1593377833/videothumbnails/YOLATENGO-TN_vhbdal.jpg"
            alt="Portrait"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};
//https://res.cloudinary.com/demo/image/upload/ar_1.0,c_thumb,g_face,w_0.6,z_0.7/r_max/co_brown,e_outline/co_grey,e_shadow,x_30,y_55/actor.png

export default About;
