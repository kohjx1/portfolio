import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Typewriter from "typewriter-effect";

import styles from "./styles.module.css";
import { useRef } from "react";

function App() {
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div>
      {/* background */}
      <div className="bg-gradient-to-t from-indigo-100 to-indigo-700 w-[100vw] h-[100vh] absolute" />
      <div className="bg-transparent absolute h-[10vh] w-[100vw] flex justify-between text-gray-300 items-center">
        <div className="w-[20vw] text-[1.5rem] grid justify-items-center">
          Glenn Codes
        </div>
        <div className="flex w-[80vw] text-[1.5rem] justify-end space-x-[3vw] mr-[5vw]">
          <div> Me</div>
          <div> Portfolio</div>
        </div>
      </div>
      <Parallax pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="flex items-center justify-center"
        >
          <p className={styles.scrollText}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello There! Welcome to glenn's webpage :)")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(500)
                  .start()
                
                  // .deleteAll()
                  // .callFunction(() => {
                  //   console.log("All strings were deleted");
                  // })
                  // .start();
              }
            }
            options={
              {loop:true}
            }
            />
          </p>
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
