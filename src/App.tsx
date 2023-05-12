import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="react-logo" className="w-3/6 slow-spin" />
        <h1 className="text-amber-500">The Moose is TS</h1>
      </header>
    </div>
  );
}

export default App;
