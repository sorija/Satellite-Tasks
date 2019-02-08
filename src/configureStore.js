import { createStore, combineReducers, compose } from "redux";
import requestReducer from "./reducers/requests.js";
import currentPageReducer from "./reducers/pagination.js";
import filtersReducer from "./reducers/filters.js";

// enable Redux DevTools Extension for debugging
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      requests: requestReducer,
      currentPage: currentPageReducer,
      filters: filtersReducer
    }),
    composeEnhancers()
  );
  return store;
};
