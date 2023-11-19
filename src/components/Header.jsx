import React from "react";
import Typewriter from "typewriter-effect";


const Header = () => {
  return (
    <div className="bg-transparent absolute h-[10svh] w-[100svw] flex justify-between text-gray-300 items-center">
      <div className="w-[20svw] text-[1.5rem] grid justify-items-center ml-[5svw]">
        Glenn Codes
      </div>
      <div className="w-[60svw] text-[1.5rem] grid justify-items-center">
        <p className="text-[1.5rem] text-stone-400">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello There! Please be patient, this website is still in the process of development.")
                .pauseFor(1500)
                .start();
            }}
            options={{ loop: true, delay: 100, deleteSpeed: 50 }}
          />
        </p>
      </div>
      <div className="flex w-[20svw] text-[1.5rem] justify-end space-x-[3svw] mr-[5svw]">
        <div> Me</div>
        <div> Portfolio</div>
        <div> Blog</div>
      </div>
    </div>
  );
};

export default Header;
