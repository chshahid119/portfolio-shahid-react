import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExp from "./components/WorkExp";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function DarkModeEnable() {
    setDarkMode((mode) => !mode);
  }
  return (
    <div className="App">
      <div className="App__header">
        <Header id="home" onSetDarkMode={DarkModeEnable} mode={darkMode} />
      </div>
      <div className="App__hero">
        <Hero />
      </div>
      <div className="App__about">
        <About />
      </div>
      <div className="App__help">How do i help?</div>
      <div className="App__experience">
        <WorkExp />
      </div>
      <div className="App__latestWork">My latest works (projects)</div>
      <div className="App__skills">Skills Set</div>
      <div className="App__collaboration">Team Work (FYP)</div>
      <div className="App__testemonials">Testemonials</div>
      <div id="contact" className="App__form">
        Contact or Email Form
      </div>
      <div className="App__footer">Footer section</div>
    </div>
  );
}

export default App;
