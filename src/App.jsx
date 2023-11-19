import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import styles from "./styles.module.css";
import { Header } from "./components";

function App() {
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div>
      {/* background */}
      <div className="bg-gradient-to-t from-black to-slate-800 w-[100svw] h-[100svh] absolute" />
      <Header />
      <Parallax pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="flex w-[90svw] h-[100svh] ml-[5svw] mr-[5svw] mt-[15svh]"
        >
          <div className="w-[50svw]">
            <img
              src="/profile-picture.jpg"
              className="rounded-3xl grayscale shadow-md"
            />
          </div>

          <div className="w-[50svw] flex-col ml-[5svw] ">
            <p className="text-[1.5rem] text-stone-500">
              This is      
              <a className=" pl-[2svw] pr-[2svw] text-[2.5rem] text-stone-400  decoration-violet-700 underline decoration-solid underline-offset-8">
                   Glenn
              </a>
              , a 
            </p>
            <p className="text-[2rem] text-stone-400 rounded-sm border-l-indigo-300 border-l-4 pl-[2svw]">Software Engineer</p>
            <p className="text-[2rem] text-stone-400 border-r-indigo-300 border-r-4 pl-[2svw]">Cloud Architect</p>
            <p className="text-[2rem] text-stone-400  decoration-violet-700 underline decoration-solid underline-offset-8">AI/ML Enthusiast</p>
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
