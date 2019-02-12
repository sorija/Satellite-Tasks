import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "../configureStore.js";
import RequestsList from "./RequestsList.js";
import AddNewRequest from "./AddNewRequest.js";
import RequestsFilters from "./RequestsFilters.js";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App space">
          <RequestsFilters />
          <AddNewRequest />
          <RequestsList />
          <figcaption>
            Photo by{" "}
            <a
              href="https://unsplash.com/photos/rTZW4f02zY8?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              data-href="https://unsplash.com/photos/rTZW4f02zY8?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              rel="noopener noreferrer"
              target="_blank"
            >
              NASA
            </a>{" "}
            on&nbsp;
            <a
              href="https://unsplash.com/search/photos/nasa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              data-href="https://unsplash.com/search/photos/nasa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              rel="noopener noreferrer"
              target="_blank"
            >
              Unsplash
            </a>
          </figcaption>
        </div>
      </Provider>
    );
  }
}

export default App;
