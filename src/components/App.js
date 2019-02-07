import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "../configureStore.js";
import RequestsList from "./RequestsList.js";
import "../styles/App.css";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <p>Hello Space!</p>
          </header>
          <RequestsList />
        </div>
      </Provider>
    );
  }
}

export default App;