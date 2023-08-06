// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, lazy } from "react";
import Terminal from "./components/Terminal";
import Header from "./components/Header";

const Intro = lazy(() => import("./components/Intro"));
const Timeline = lazy(() => import("./components/Timeline"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [theme, setTheme] = useState('null');
  const [terminal, setTerminal] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    setTheme('dark')
  }, []);

  const handleThemeSwtich = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleTerminal = () =>
    terminal ? setTerminal(false) : setTerminal(true);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        // eslint-disable-next-line react/no-unknown-property
        stroke-linecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  const console = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");''
    }
  }, [theme]);

  return (
    <div className="main">
      <button
        type="button"
        onClick={handleThemeSwtich}
        className="fixed z-20 lg:right-16 right-4 lg:top-2 top-16 bg-purple-300 text-lg p-1 rounded-lg dark:bg-yellow-300"
      >
        {theme === "dark" ? sun : moon}
      </button>
      <button
        type="button"
        onClick={handleTerminal}
        className="fixed z-20 right-4 lg:top-2 top-28 bg-green-300 text-lg p-1 rounded-lg dark:bg-blue-400"
      >
        {console}
      </button>

      <div className="bg-gradient-to-r bg-slate-200 dark:bg-gradient-to-r dark:bg-zinc-950 dark:text-stone-300 text-stone-900 min-h-screen font-inter">
          <Header/>
        <div className="max-w-5x1 w-11/12 mx-auto">
          <Intro />
          <main>
            {terminal ? <Terminal handleTerminal={handleTerminal} /> : null}
            <Portfolio />
            <Timeline />
            <Contact />
            <Footer />
          </main>
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
        </div>
      </div>
    </div>
  );
}

export default App;
