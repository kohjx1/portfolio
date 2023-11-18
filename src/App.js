import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Typewriter from "typewriter-effect";

import styles from "./styles.module.css";
import { useRef } from "react";

function App() {
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div>
      {/* background */}
      <div className="bg-gradient-to-t from-black to-slate-800 w-[100svw] h-[100svh] absolute" />
      <div className="bg-transparent absolute h-[10svh] w-[100svw] flex justify-between text-gray-300 items-center">
        <div className="w-[20svw] text-[1.5rem] grid justify-items-center">
          Glenn Codes
        </div>
        <div className="w-[60svw] text-[1.5rem] grid justify-items-center">
          <p className="text-[1.5rem] text-stone-400">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello There! Welcome to glenn's webpage :)")
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
      <Parallax pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
        >
          <div className="flex ml-[5svw] mt-[30svh]">
          <img
            src="/profile-picture.jpg"
            className="rounded-3xl w-[30svw] grayscale shadow-md flex justify-center"
          />

          <div className="w-[30svw] text-[1.5rem] text-stone-400 flex justify-center"> Test</div>
          </div>
          
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 4 }}
          // style={{ ...alignCenter, justifyContent: "flex-start" }}
          className="flex items-center justify-start"
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
          className="flex items-center justify-end"
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
