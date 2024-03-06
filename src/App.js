import "./sass/App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Logo from "./components/Logo";
import Filters from "./components/Filters";
import Headings from "./components/Headings";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import "./sass/App.scss";

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="App__header">
        <Header />
        <Home />
      </div>
      <Headings>
        <h2>Skills [What I Know]</h2>
      </Headings>

      <Skills />
      <Headings>
        <h2>Projects</h2>
      </Headings>
      <Filters />

      <div className="App__projects">
        <Projects />
      </div>
    </div>
  );
}

export default App;
