import React, { Component } from "react";
// import { Provider } from "react-redux";
import TasksList from "./TasksList.js";
import "./styles/App.css";

const tasks = [
  {
    id: 0,
    satName: "Bespin",
    start: 4934.539,
    end: 34943.023,
    status: "new"
  },
  {
    id: 1,
    satName: "Dagobah",
    start: 924753.543,
    end: 89420.143,
    status: "new"
  },
  {
    id: 2,
    satName: "Hoth",
    start: 1243.876,
    end: 91348.471,
    status: "new"
  },
  {
    id: 3,
    satName: "Naboo",
    start: 98673.342,
    end: 1224325.023,
    status: "new"
  },
  {
    id: 4,
    satName: "Yavin",
    start: 12442.564,
    end: 153389.092,
    status: "new"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello Space!</p>
        </header>
        <TasksList tasks={tasks} />
      </div>
    );
  }
}

export default App;
