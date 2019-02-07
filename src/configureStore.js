import { createStore, combineReducers, compose } from "redux";
import requestReducer from "./reducers/requestsReducer.js";
import currentPageReducer from "./reducers/paginationReducer.js";

// enable Redux DevTools Extension for debugging
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      requests: requestReducer,
      currentPage: currentPageReducer
    }),
    composeEnhancers()
  );
  return store;
};
