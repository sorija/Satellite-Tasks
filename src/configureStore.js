import { createStore, combineReducers, compose } from "redux";
import requestReducer from "./reducers/requestsReducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      requests: requestReducer
    }),
    composeEnhancers()
  );
  return store;
};
