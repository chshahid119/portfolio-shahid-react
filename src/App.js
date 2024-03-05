import "./sass/App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="App__header">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
