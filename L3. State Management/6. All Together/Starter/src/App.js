import logo from "./logo.svg";
import "./App.css";
import GameTracker from "./components/GameTracker";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <GameTracker />
    </div>
  );
};

export default App;
