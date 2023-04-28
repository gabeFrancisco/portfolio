import React from 'react'

import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Intro />
      <Portfolio/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
