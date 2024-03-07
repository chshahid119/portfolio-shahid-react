import Shahid from "./img/shahidOfficial.PNG";

function App() {
  return (
    <div className="App">
      <div className="App__header">
        <img src={Shahid} alt="company logo" />
      </div>
      <div className="App__hero">Hero Section</div>
      <div className="App__about">About</div>
      <div className="App__help">How do i help?</div>
      <div className="App__experience">My work experience.</div>
      <div className="App__latestWork">My latest works (projects)</div>
      <div className="App__skills">Skills Set</div>
      <div className="App__collaboration">Team Work (FYP)</div>
      <div className="App__testemonials">Testemonials</div>
      <div className="App__form">Contact or Email Form </div>
      <div className="App__footer">Footer section</div>
    </div>
  );
}

export default App;
