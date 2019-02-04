import React, { Component } from "react";
// import { Provider } from "react-redux";
import Task from "./Task.js";
import "./styles/App.css";

const mockState = {
  id: 0,
  satName: "Bespin",
  start: 4934.539,
  end: 34943.023,
  status: "new"
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello Space!</p>
        </header>

        <Task {...mockState} />
      </div>
    );
  }
}

export default App;
