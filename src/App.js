import "./sass/App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Logo from "./components/Logo";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="App__header">
        <Header />
        <Home />
      </div>
      <Projects />
    </div>
  );
}

export default App;
