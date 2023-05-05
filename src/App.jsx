import React, { useState, useEffect, Suspense, lazy } from "react";


const Intro = lazy(() => import("./components/Intro"))
const Timeline = lazy(() => import("./components/Timeline"))
const Portfolio = lazy(() => import("./components/Portfolio"))
const Contact = lazy(() => import("./components/Contact"))
const Footer = lazy(() => import("./components/Footer"))
const Title = lazy(() => import("./components/Title"))

import { Canvas } from "@react-three/fiber";
import {
  Center,
  Environment,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import Pc from "./components/models/Pc";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwtich = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="main">
      <button
        type="button"
        onClick={handleThemeSwtich}
        className="fixed z-10 right-5 md:right-10 top-4 bg-purple-300 text-lg p-1 rounded-lg dark:bg-yellow-300"
      >
        {theme === "dark" ? sun : moon}
      </button>

      <div className="bg-gradient-to-r from-slate-50 via-blue-100 to-blue-200 dark:bg-gradient-to-r dark:from-gray-950 dark:to-slate-800 dark:text-stone-300 text-stone-900 min-h-screen font-inter">
        <div className="max-w-5x1 w-11/12 mx-auto">
          <Intro />
          {/* <div className="three-view">
            <Canvas>
              <Environment preset="warehouse" />
              <Center scale={20}>
                <Suspense fallback={null}>
                  <PresentationControls
                    global
                    polar={[-0.1, 0.1]}
                    azimuth={[-0.2, 0.2]}
                  >
                    <OrbitControls>
                      <Pc />
                    </OrbitControls>
                  </PresentationControls>
                </Suspense>
              </Center>
            </Canvas>
          </div> */}
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
